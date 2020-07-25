import React, { Component } from "react";
import ListView from "../../components/List/ListView";

class List extends Component {
  state = {
    inputTitle: "",
    showAddField: false,
    textAreaValue: "",
    selectedList: false,
  };

  componentDidMount() {
    document.addEventListener("click", this.hideAll);
    document.addEventListener("keypress", (e) =>
      this.addNewCardFeatureByKey(e, this.props.id, this.state.textAreaValue)
    );
    const main = document.querySelector(".main");
    const mainWidth = main.offsetWidth;
    main.scroll({
      left: mainWidth + 285 * (this.props.wholeList.length + 1),
      behavior: "smooth",
    });

    this.setState({
      inputTitle: this.props.title,
    });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hideAll);
    document.removeEventListener("keypress", (e) =>
      this.addNewCardFeatureByKey(e, this.props.id, this.state.textAreaValue)
    );
  }

  hideAll = (e) => {
    const searchingClass = e.target.className;
    if (
      searchingClass.includes("main") ||
      searchingClass.includes("input") ||
      searchingClass.includes("nav") ||
      searchingClass.includes("wrapList") ||
      searchingClass.includes("singleListWrap")
    ) {
      this.setState({
        showAddField: false,
      });
      this.props.showListHandle(false);
      this.props.setListInput("");
    }
  };

  setListTitle = (e, listId) => {
    this.setState({
      inputTitle: e.target.value,
    });
    this.props.updateListTitle(e.target.value, listId);
  };

  swapAddFieldFeature = (buttonId) => {
    if (buttonId === "textArea") {
      this.setState({
        showAddField: true,
      });
    } else {
      this.setState({
        showAddField: false,
      });
    }
  };

  setTextAreaValue = (e) => {
    this.setState({
      textAreaValue: e.target.value,
    });
  };

  addNewCardFeature = (listId, textAreaValue, taskId) => {
    this.props.addNewCard(listId, textAreaValue, taskId);
    this.setState({
      showAddField: false,
      textAreaValue: "",
    });
  };

  addNewCardFeatureByKey = (e, listId, textAreaValue, taskId) => {
    if (e.which === 13 && this.state.showAddField) {
      e.preventDefault();
      this.props.addNewCard(listId, textAreaValue, taskId);
      this.setState({
        textAreaValue: "",
      });
    }
  };

  deleteCardFeatureByMove = (listId, taskId) => {
    this.props.deleteCard(listId, taskId);
    this.setState({
      textAreaValue: "",
    });
  };

  mouseDownFeature = (e) => {
    if (e.target.classList[0] !== "lists") return;
    this.setState({
      selectedList: true,
    });
    e.target.style.zIndex = 999;
    e.target.style.cursor = "grabbing";
    e.target.style.boxShadow = "0px 0px 20px 0.5px rgba(0,0,0,0.1";
  };

  mouseMoveFeature = (e) => {
    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    if (this.state.selectedList && e.target.classList[0] === "lists") {
      e.target.style.left = `${e.clientX - 135}px`;
      e.target.style.top = `${e.clientY - 45}px`;
      e.target.style.position = "fixed";
      e.target.style.transform = "rotate(5deg)";

      const allBlankSpan = document.querySelectorAll(".frontBlankList");
      allBlankSpan.forEach((all) => {
        all.style.display = "none";
      });

      for (let i = 1; i < 10; i++) {
        if (e.pageX < 285 - scrollHeighFromMain) {
          allBlankSpan[0].style.width = "275px";
          allBlankSpan[0].style.height = "10px";
          allBlankSpan[0].style.backgroundColor = "rgba(0,0,0,0.15)";
          allBlankSpan[0].style.marginRight = "10px";
          allBlankSpan[0].style.borderRadius = "4px";
          allBlankSpan[0].style.display = "initial";
          allBlankSpan[0].style.position = "absolute";
          allBlankSpan[0].style.top = "-17.5px";
        } else if (
          e.pageX > 285 * i - scrollHeighFromMain &&
          e.pageX < 285 * i + 285 - scrollHeighFromMain &&
          this.props.wholeList.length >= i + 1
        ) {
          allBlankSpan[i].style.width = "275px";
          allBlankSpan[i].style.height = "10px";
          allBlankSpan[i].style.backgroundColor = "rgba(0,0,0,0.15)";
          allBlankSpan[i].style.marginRight = "10px";
          allBlankSpan[i].style.borderRadius = "4px";
          allBlankSpan[i].style.display = "initial";
          allBlankSpan[i].style.position = "absolute";
          allBlankSpan[i].style.top = "-17.5px";
        }
      }
    }
  };

  mouseUpFeature = (e) => {
    if (e.target.classList[0] !== "lists") return;
    e.target.style.position = "static";
    e.target.style.cursor = "pointer";
    e.target.style.zIndex = null;
    e.target.style.boxShadow = null;
    e.target.style.transform = null;

    const { scrollPosition, wholeList } = this.props;
    const scrollHeighFromMain = Math.floor(scrollPosition);

    const allBlankSpan = document.querySelectorAll(".frontBlankList");
    allBlankSpan.forEach((all) => {
      all.style.display = "none";
    });

    const draggedListIndex = this.props.wholeList.findIndex(
      (list) => list.id === this.props.id
    );

    if (e.pageX < 285 - scrollHeighFromMain) {
      this.props.moveListToAnotherPlace(draggedListIndex, 0);
    }

    for (let i = 1; i < 10; i++) {
      if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        wholeList.length >= i + 1
      ) {
        this.props.moveListToAnotherPlace(draggedListIndex, i);
      }
    }

    this.setState({
      selectedList: false,
    });
  };

  mouseLeaveFeature = () => {
    const list = document.querySelectorAll(".lists");
    list.forEach((all) => {
      all.style.position = "static";
      all.style.cursor = "pointer";
      all.style.boxShadow = null;
      all.style.transform = null;
      all.style.zIndex = null;
    });

    const allBlankSpan = document.querySelectorAll(".frontBlankList");
    allBlankSpan.forEach((all) => {
      all.style.display = "none";
    });

    this.setState({
      selectedList: false,
    });
  };

  render() {
    const {
      listOption,
      id,
      tasks,
      wholeList,
      scrollPosition,
      isDragAndDropTrue,
      visibilityOptionFunction,
      taskDetailsFunction,
      clearAllBlankSpan,
    } = this.props;
    const {
      showAddField,
      textAreaValue,
      inputTitle,
      selectedList,
    } = this.state;
    return (
      <div className="singleListWrap">
        <div className="frontBlankList"></div>
        <ListView
          selectedList={selectedList}
          listOption={listOption}
          wholeList={wholeList}
          id={id}
          tasks={tasks}
          scrollPosition={scrollPosition}
          isDragAndDropTrue={isDragAndDropTrue}
          visibilityOptionFunction={visibilityOptionFunction}
          taskDetailsFunction={taskDetailsFunction}
          inputTitle={inputTitle}
          clearAllBlankSpan={clearAllBlankSpan}
          showAddField={showAddField}
          textAreaValue={textAreaValue}
          mouseDownFeature={this.mouseDownFeature}
          mouseMoveFeature={this.mouseMoveFeature}
          mouseUpFeature={this.mouseUpFeature}
          mouseLeaveFeature={this.mouseLeaveFeature}
          setTextAreaValue={this.setTextAreaValue}
          swapAddFieldFeature={this.swapAddFieldFeature}
          setListTitle={this.setListTitle}
          addNewCardFeature={this.addNewCardFeature}
          deleteCardFeatureByMove={this.deleteCardFeatureByMove}
        />
      </div>
    );
  }
}

export default List;
