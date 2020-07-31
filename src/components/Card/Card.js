import React, { Component } from "react";

class Card extends Component {
  state = {
    selected: false,
    scrollHeight: 0,
    taskk: "",
  };

  componentDidMount() {
    this.setState({
      taskk: this.props.task.taskName,
    });
  }

  mouseDownFeature = (e) => {
    if (e.target.classList[0] !== "card") return;
    this.setState({
      selected: true,
    });
    e.target.style.zIndex = 999;
  };

  mouseUpFeature = (e) => {
    if (e.target.classList[0] !== "card") return;

    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";
    e.target.style.zIndex = 0;

    const {
      scrollPosition,
      wholeList,
      addNewCardFeature,
      deleteCardFeatureByMove,
      listId,
    } = this.props;

    const scrollHeighFromMain = Math.floor(scrollPosition);
    const taskId = e.target.getAttribute("id");
    const draggedCard = document.getElementById(taskId);

    const draggedCardChildren = draggedCard.children;
    const draggenCardLabelsChildren = [...draggedCardChildren[0].children];

    if (draggedCard.children[0].children.length !== 0) {
      draggedCard.children[0].style.width = "100%";
      draggedCard.children[0].style.fontSize = "12px";
    }

    if (e.pageX < 285 - scrollHeighFromMain) {
      if (wholeList[0].id === listId) return this.mouseLeaveFeature(e); //When put card in this same place
      draggenCardLabelsChildren.forEach((ele) => {
        ele.textContent = "";
      });
      deleteCardFeatureByMove(listId, taskId);
      addNewCardFeature(wholeList[0].id, e.target.textContent, taskId);
    }

    for (let i = 1; i <= 10; i++) {
      if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        wholeList.length >= i + 1
      ) {
        if (wholeList[i].id === listId) return this.mouseLeaveFeature(e); //When put card in this same place
        draggenCardLabelsChildren.forEach((ele) => {
          ele.textContent = "";
        });
        deleteCardFeatureByMove(listId, taskId);
        addNewCardFeature(wholeList[i].id, e.target.textContent, taskId);
      }
    }

    this.props.isDragAndDropTrue(false);
    this.props.clearAllBlankSpan();

    this.setState({
      selected: false,
    });
  };

  mouseMoveFeature = (e) => {
    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    if (this.state.selected && e.target.classList[0] === "card") {
      e.target.style.left = `${e.clientX - 130}px`;
      e.target.style.top = `${e.clientY - 27.5}px`;
      e.target.style.position = "fixed";
      e.target.style.cursor = "grabbing";
      e.target.style.transform = "rotate(5deg)";
      e.target.style.zIndex = 999;

      const taskId = e.target.getAttribute("id");
      const draggedCard = document.getElementById(taskId);

      if (draggedCard.children[0].children.length !== 0) {
        draggedCard.children[0].style.width = "25%";
        draggedCard.children[0].style.fontSize = "0px";
      }

      const allBlankSpan = document.querySelectorAll(".blank");
      allBlankSpan.forEach((all) => {
        all.style.width = "0";
        all.style.height = "0";
        all.style.backgroundColor = "transparent";
      });

      for (let i = 1; i < 10; i++) {
        if (e.pageX < 285 - scrollHeighFromMain) {
          allBlankSpan[0].style.width = "100%";
          allBlankSpan[0].style.height = "35px";
          allBlankSpan[0].style.backgroundColor = "#dddfe5";
          allBlankSpan[0].style.borderRadius = "5px";
        } else if (
          e.pageX > 285 * i - scrollHeighFromMain &&
          e.pageX < 285 * i + 285 - scrollHeighFromMain &&
          this.props.wholeList.length >= i + 1
        ) {
          allBlankSpan[i].style.width = "100%";
          allBlankSpan[i].style.height = "35px";
          allBlankSpan[i].style.backgroundColor = "#dddfe5";
          allBlankSpan[i].style.borderRadius = "5px";
        }
      }
    }

    this.props.isDragAndDropTrue(true);
  };

  mouseLeaveFeature = (e) => {
    const cardWrapLabel = document.querySelectorAll(".card_wrapLabel");
    cardWrapLabel.forEach((ele) => {
      ele.style.width = "100%";
    });

    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";
    e.target.style.zIndex = 0;
    this.props.clearAllBlankSpan();
    this.props.isDragAndDropTrue(false);
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
    } = this.props;

    return (
      <div
        id={task.id}
        className="card"
        onDoubleClick={(e) =>
          taskDetailsFunction(task.taskName, inputTitle, listId, task.id)
        }
        onMouseDown={(e) => this.mouseDownFeature(e)}
        onMouseUp={(e) => this.mouseUpFeature(e)}
        onMouseMove={(e) => this.mouseMoveFeature(e)}
        onMouseLeave={(e) => this.mouseLeaveFeature(e)}
        style={{
          border: task.priority === "priority" ? "1px solid #db4a36" : null,
        }}
      >
        <div
          className="card_wrapLabel"
          onClick={() => this.labelFontSizeToggle(hideFontSizeLabel)}
          style={{ fontSize: hideFontSizeLabel ? 0 : "12px" }}
        >
          {task.badges.map((ele) => (
            <div
              key={ele.color}
              id={ele.labelId}
              className="labelElement"
              style={{ backgroundColor: ele.color }}
            >
              {ele.name}
            </div>
          ))}
        </div>
        {task.taskName}
        <span
          className="fas fa-highlighter"
          onClick={(e) =>
            visibilityOptionFunction(
              e,
              true,
              task,
              listId,
              task.currentListName,
              task.id
            )
          }
        />
      </div>
    );
  }
}

export default Card;
