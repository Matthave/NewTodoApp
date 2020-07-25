import React, { Component } from "react";

class Card extends Component {
  state = {
    selected: false,
    scrollHeight: 0,
  };

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

    if (e.pageX < 285 - scrollHeighFromMain) {
      if (wholeList[0].id === listId) return this.mouseLeaveFeature(e); //When put card in this same place
      deleteCardFeatureByMove(listId, taskId);
      addNewCardFeature(wholeList[0].id, e.target.textContent, taskId);
    }

    for (let i = 1; i <= 10; i++) {
      if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        wholeList.length >= i + 1
      ) {
        if (wholeList[i].id === listId) return this.mouseLeaveFeature(e);
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

  render() {
    const {
      task,
      inputTitle,
      listId,
      taskDetailsFunction,
      visibilityOptionFunction,
    } = this.props;

    return (
      <div
        id={task.id}
        className="card"
        onDoubleClick={(e) =>
          taskDetailsFunction(e.target.textContent, inputTitle, listId, task.id)
        }
        onMouseDown={(e) => this.mouseDownFeature(e)}
        onMouseUp={(e) => this.mouseUpFeature(e)}
        onMouseMove={(e) => this.mouseMoveFeature(e)}
        onMouseLeave={(e) => this.mouseLeaveFeature(e)}
      >
        {task.taskName}
        <span
          className="fas fa-highlighter"
          onClick={(e) =>
            visibilityOptionFunction(e, true, task, listId, task.id)
          }
        />
      </div>
    );
  }
}

export default Card;
