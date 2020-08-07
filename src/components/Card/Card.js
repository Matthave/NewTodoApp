import React, { Component } from "react";
import styled from "styled-components";

const StyledContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  padding: 2px;
`;

const StyledContent = styled.h3`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 400;
  color: #172b4d;
`;

const StyledEdit = styled.span`
  margin: 0 5px;
  align-self: center;
  pointer-events: initial;
`;

const StyledIcon = styled.span`
  margin-right: 5px;
  font-size: 12.5px;
`;

const StyledTermInCard = styled.span`
  color: #888;
  font-size: 12.5px;
  letter-spacing: 0.5px;
  margin-left: 3px;
`;

class Card extends Component {
  state = {
    selected: false,
    scrollHeight: 0,
    taskk: "",
    offsetX: "",
    offsetY: "",
    cardH: "",
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
    } = this.props;

    const scrollHeighFromMain = Math.floor(scrollPosition);
    const taskId = card.getAttribute("id");
    const draggedCard = document.getElementById(taskId);

    const draggedCardChildren = draggedCard.children;
    const draggenCardLabelsChildren = [...draggedCardChildren[0].children]; //Weard thing that is need to properly dragging without doubling card content
    const draggedCardTermChildren = [...draggedCard.children[2].children]; //Weard thing that is need to properly dragging without doubling card content

    if (e.pageX < 285 - scrollHeighFromMain) {
      if (wholeList[0].id === listId) return this.mouseLeaveFeature(card); //When put card in this same place
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
    } = this.props;

    return (
      <div
        id={task.id}
        className="card"
        onDoubleClick={(e) =>
          taskDetailsFunction(task.taskName, inputTitle, listId, task.id)
        }
        onMouseDown={(e) => this.mouseDownFeature(e)}
        style={{
          border: task.priority === "priority" ? "1px solid #db4a36" : null,
        }}
      >
        <div
          className="card_wrapLabel"
          onClick={() => this.labelFontSizeToggle(hideFontSizeLabel)}
          style={{
            fontSize: hideFontSizeLabel ? 0 : "12px",
            pointerEvents: "none",
          }}
        >
          {task.badges.map((ele) => (
            <div
              key={ele.color}
              id={ele.labelId}
              className="labelElement"
              style={{ backgroundColor: ele.color, pointerEvents: "none" }}
            >
              {ele.name}
            </div>
          ))}
        </div>
        <StyledContentWrap>
          <StyledContent>{task.taskName}</StyledContent>
          <StyledEdit
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
        </StyledContentWrap>

        <div
          style={{ width: "100%", pointerEvents: "none" }}
          id={`${task.id}term`}
        >
          {task.date.map((ele) => (
            <StyledTermInCard
              key={ele.id}
              className={ele.classN}
              style={{ backgroundColor: ele.statusColor, color: ele.fontColor }}
            >
              <StyledIcon className="far fa-clock" />
              {`${ele.day} ${ele.monthName} ${ele.status}`}
            </StyledTermInCard>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
