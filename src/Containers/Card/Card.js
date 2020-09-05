import React, { Component } from "react";
import CardArchiveWarning from "../../components/CardArchiveWarning/CardArchiveWarning";
import CardView from "../../components/Card/CardView";

class Card extends Component {
  state = {
    selected: false,
    scrollHeight: 0,
    taskk: "",
    offsetX: "",
    offsetY: "",
    cardH: "",
    cardDeleteWarningVisi: false,
  };

  componentDidMount() {
    this.setState({
      taskk: this.props.task.taskName,
    });
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMoveFeature, true);
    document.removeEventListener("mouseup", this.mouseUpFeature, true);
  }

  mouseDownFeature = (e) => {
    if (e.target.classList[0] !== "card") return;
    const card = document.getElementById(this.props.task.id);
    const cardH = card.clientHeight;
    this.setState({
      selected: true,
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      cardH: cardH,
    });

    e.target.style.zIndex = 999;
    document.addEventListener("mousemove", this.mouseMoveFeature, true);
    document.addEventListener("mouseup", this.mouseUpFeature, true);
  };

  mouseUpFeature = (e) => {
    const card = document.getElementById(this.props.task.id);
    if (e.target.classList[0] !== "card") return;
    card.style.cursor = "pointer";
    card.style.position = "static";
    card.style.transform = "rotate(0deg)";
    card.style.boxShadow = null;
    card.style.zIndex = 0;

    const {
      scrollPosition,
      wholeList,
      addNewCardFeature,
      deleteCardFeatureByMove,
      listId,
      archiveCard,
      slideMenuState,
    } = this.props;

    const scrollHeighFromMain = Math.floor(scrollPosition);
    const taskId = card.getAttribute("id");
    const draggedCard = document.getElementById(taskId);

    const draggedCardChildren = draggedCard.children;
    const draggenCardLabelsChildren = [...draggedCardChildren[1].children]; //Weard thing that is need to properly dragging without doubling card content?
    const draggedCardTermChildren = [...draggedCard.children[3].children]; //Weard thing that is need to properly dragging without doubling card content?

    if (
      e.pageX > window.innerWidth - 320 - scrollHeighFromMain &&
      slideMenuState
    ) {
      draggenCardLabelsChildren.forEach((ele) => {
        ele.textContent = "";
      });
      draggedCardTermChildren.forEach((ele) => {
        ele.textContent = "";
      });
      this.props.clearAllBlankSpan();
      archiveCard(listId, taskId);
      return;
    }

    if (e.pageX < 285 - scrollHeighFromMain) {
      if (wholeList[0].id === listId) return this.mouseLeaveFeature(card); //When put card in this same place call it
      draggenCardLabelsChildren.forEach((ele) => {
        ele.textContent = "";
      });
      draggedCardTermChildren.forEach((ele) => {
        ele.textContent = "";
      });
      deleteCardFeatureByMove(listId, taskId);
      addNewCardFeature(wholeList[0].id, card.textContent, taskId);
    }

    for (let i = 1; i <= 10; i++) {
      if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        wholeList.length >= i + 1
      ) {
        if (wholeList[i].id === listId) return this.mouseLeaveFeature(card); //When put card in this same place
        draggenCardLabelsChildren.forEach((ele) => {
          ele.textContent = "";
        });
        draggedCardTermChildren.forEach((ele) => {
          ele.textContent = "";
        });
        deleteCardFeatureByMove(listId, taskId);
        addNewCardFeature(wholeList[i].id, card.textContent, taskId);
      }
    }

    this.props.isDragAndDropTrue(false);
    this.props.clearAllBlankSpan();

    document.removeEventListener("mousemove", this.mouseMoveFeature, true);
    document.removeEventListener("mouseup", this.mouseUpFeature, true);

    this.setState({
      selected: false,
    });
  };

  mouseMoveFeature = (e) => {
    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    const card = document.getElementById(this.props.task.id);

    if (this.state.selected) {
      card.style.left = `${e.pageX - card.getBoundingClientRect().width / 2}px`;
      card.style.top = `${e.pageY - card.getBoundingClientRect().height / 2}px`;

      card.style.position = "fixed";
      card.style.cursor = "grabbing";
      card.style.transform = "rotate(5deg)";
      card.style.boxShadow = "0px 10px 20px 0.6px rgba(0,0,0,0.25)";
      card.style.zIndex = 999;

      const allBlankSpan = document.querySelectorAll(".blank");
      allBlankSpan.forEach((all) => {
        all.style.width = "0";
        all.style.height = "0";
        all.style.backgroundColor = "transparent";
      });

      if (
        e.pageX > window.innerWidth - 320 - scrollHeighFromMain &&
        this.props.slideMenuState
      ) {
        this.setState({ cardDeleteWarningVisi: true });
      } else {
        if (this.state.cardDeleteWarningVisi)
          this.setState({ cardDeleteWarningVisi: false });
      }

      for (let i = 1; i < 10; i++) {
        if (e.pageX < 285 - scrollHeighFromMain) {
          allBlankSpan[0].style.width = "100%";
          allBlankSpan[0].style.height = `${this.state.cardH}px`;
          allBlankSpan[0].style.backgroundColor = "#dddfe5";
          allBlankSpan[0].style.borderRadius = "5px";
        } else if (
          e.pageX > 285 * i - scrollHeighFromMain &&
          e.pageX < 285 * i + 285 - scrollHeighFromMain &&
          this.props.wholeList.length >= i + 1
        ) {
          allBlankSpan[i].style.width = "100%";
          allBlankSpan[i].style.height = `${this.state.cardH}px`;
          allBlankSpan[i].style.backgroundColor = "#dddfe5";
          allBlankSpan[i].style.borderRadius = "5px";
        }
      }
    }

    this.props.isDragAndDropTrue(true);
  };

  mouseLeaveFeature = (card) => {
    const target = card;
    target.style.cursor = "pointer";
    target.style.position = "static";
    target.style.transform = "rotate(0deg)";
    target.style.zIndex = 0;
    this.props.clearAllBlankSpan();
    this.props.isDragAndDropTrue(false);

    document.removeEventListener("mousemove", this.mouseMoveFeature, true);
    document.removeEventListener("mouseup", this.mouseUpFeature, true);

    this.setState({
      selected: false,
    });
  };

  labelFontSizeToggle = (hideFontSizeLabel) => {
    this.props.setHideFontSizeLabel(!hideFontSizeLabel);
  };

  render() {
    const {
      task,
      inputTitle,
      listId,
      taskDetailsFunction,
      visibilityOptionFunction,
      hideFontSizeLabel,
      listOfAllTasksList,
      listOfAllCover,
    } = this.props;

    const { cardDeleteWarningVisi } = this.state;

    const matchedTasksList = listOfAllTasksList.filter(
      (ele) => ele.id === task.id
    );

    const matchedCover = listOfAllCover.filter((ele) => ele.id === task.id);

    let unActiveTasks = 0;
    let totalTasks = 0;

    matchedTasksList.forEach((ele) => {
      totalTasks += ele.totalOfSubTasks;
      unActiveTasks += ele.unActiveSubtasks;
    });

    return (
      <>
        <CardView
          task={task}
          listId={listId}
          taskDetailsFunction={taskDetailsFunction}
          inputTitle={inputTitle}
          hideFontSizeLabel={hideFontSizeLabel}
          visibilityOptionFunction={visibilityOptionFunction}
          unActiveTasks={unActiveTasks}
          totalTasks={totalTasks}
          mouseDownFeature={this.mouseDownFeature}
          labelFontSizeToggle={this.labelFontSizeToggle}
          matchedCover={matchedCover}
        />
        <CardArchiveWarning cardDeleteWarningVisi={cardDeleteWarningVisi} />
      </>
    );
  }
}

export default Card;
