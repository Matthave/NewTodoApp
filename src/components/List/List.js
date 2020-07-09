import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const StyledList = styled.section`
  position: relative;
  width: 275px;
  margin-right: 10px;
  align-self: flex-start;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 7.5px;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  width: 220px;
  background-color: #ebecf0;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #172b4d;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: ${(props) => (props.showStyle ? "60px" : "31px")};
  background-color: ${(props) => (props.showStyle ? "#fff" : "#ebecf0")};
  border-radius: 5px;
  padding: 7.5px;
  color: #779;
  resize: none;
  cursor: pointer;
  transition: 0.1s linear;
  box-shadow: ${(props) =>
    props.showStyle ? "0px 0.5px 0px 0.5px #aaa" : "none"};

  &:hover {
    background-color: ${(props) => (props.showStyle ? null : "#dddfe5")};
  }
`;

const StyledAddButton = styled.button`
  background-color: #5aac44;
  border-radius: 5px;
  color: white;
  padding: 8px 20px;
  margin: 5px 0px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #67ba50;
  }
`;

const StyledSpanX = styled.span`
  font-size: 2.3rem;
  vertical-align: middle;
  color: #666;
  cursor: pointer;
`;

class List extends Component {
  state = {
    inputTitle: this.props.title,
    showAddField: false,
    textAreaValue: "",
    selected: false,
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
      searchingClass.includes("wrapList")
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

  addNewCardFeature = (id, textAreaValue) => {
    this.props.addNewCard(id, textAreaValue);
    this.setState({
      showAddField: false,
      textAreaValue: "",
    });
  };

  addNewCardFeatureByKey = (e, id, textAreaValue) => {
    if (e.which === 13 && this.state.showAddField) {
      e.preventDefault();
      this.props.addNewCard(id, textAreaValue);
      this.setState({
        textAreaValue: "",
      });
    }
  };

  deleteCardFeature = (e) => {
    this.props.isDragAndDropTrue(false);
    this.props.deleteCard(e, this.props.id);
    this.setState({
      textAreaValue: "",
    });
  };

  deleteCardFeatureByMove = (targetName, id) => {
    this.props.deleteCard(targetName, id);
    this.setState({
      textAreaValue: "",
    });
  };

  mouseDownList = (e) => {
    console.log(e.target.classList[2]);
    if (e.target.classList[2] !== "lists") return;
    this.setState({
      selected: true,
    });
    e.target.style.cursor = "grabbing";
    e.target.style.zIndex = 999;
  };

  mouseUpList = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";

    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    const movingListIndex = this.props.wholeList.findIndex(
      (list) => list.id === this.props.id
    );
    const movingList = this.props.wholeList.filter(
      (list) => list.id === this.props.id
    );
    for (let i = 1; i < 10; i++) {
      if (e.pageX < 285 - scrollHeighFromMain) {
        this.props.wholeList.splice(movingListIndex, 1);
        this.props.wholeList[0] = movingList;
      } else if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        this.props.wholeList.length >= i + 1
      ) {
        //Coś
      }
    }

    const allBlank = document.querySelectorAll(".blanForList");

    allBlank.forEach((blank) => {
      blank.style.width = "0";
      blank.style.height = "0";
      blank.style.backgroundColor = "transparent";
    });

    this.setState({
      selected: false,
    });
  };

  mouseMoveList = (e) => {
    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    if (this.state.selected && e.target.classList[2] === "lists") {
      e.target.style.left = `${e.clientX - 135}px`;
      e.target.style.top = `${e.clientY - 40}px`;
      e.target.style.position = "fixed";
      e.target.style.transform = "rotate(5deg)";

      const allBlankSpan = document.querySelectorAll(".blanForList");
      allBlankSpan.forEach((all) => {
        all.style.width = "0";
        all.style.height = "0";
        all.style.backgroundColor = "transparent";
        all.style.borderRadius = "5px";
      });

      for (let i = 1; i < 10; i++) {
        if (e.pageX < 285 - scrollHeighFromMain) {
          allBlankSpan[0].style.width = "270px";
          allBlankSpan[0].style.height = "90px";
          allBlankSpan[0].style.backgroundColor = "rgba(0,0,0,0.1)";
          allBlankSpan[0].style.borderRadius = "5px";
        } else if (
          e.pageX > 285 * i - scrollHeighFromMain &&
          e.pageX < 285 * i + 285 - scrollHeighFromMain &&
          this.props.wholeList.length >= i + 1
        ) {
          allBlankSpan[i].style.width = "270px";
          allBlankSpan[i].style.height = "90px";
          allBlankSpan[i].style.backgroundColor = "rgba(0,0,0,0.1)";
          allBlankSpan[i].style.borderRadius = "5px";
        }
      }
    }
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
    } = this.props;
    const { showAddField, textAreaValue } = this.state;
    return (
      <>
        <span className="blanForList"></span>
        <StyledList
          className="lists"
          onMouseDown={(e) => this.mouseDownList(e)}
          onMouseUp={(e) => this.mouseUpList(e)}
          onMouseMove={(e) => this.mouseMoveList(e)}
        >
          <StyledInput
            value={this.state.inputTitle}
            onChange={(e) => this.setListTitle(e, id)}
            className="input"
          />
          <span className="fas fa-ellipsis-h" onClick={() => listOption(id)} />
          {tasks.map((task) => (
            <Card
              wholeList={wholeList}
              key={task}
              task={task}
              deleteCardFeature={this.deleteCardFeature}
              id={id}
              addNewCard={this.addNewCardFeature}
              deleteCardFeatureByMove={this.deleteCardFeatureByMove}
              scrollPosition={scrollPosition}
              isDragAndDropTrue={isDragAndDropTrue}
              visibilityOptionFunction={visibilityOptionFunction}
              taskDetailsFunction={taskDetailsFunction}
              inputTitle={this.state.inputTitle}
            />
          ))}
          <div className="blank" />
          <StyledTextArea
            value={showAddField ? textAreaValue : "Add Another Card"}
            onChange={(e) => this.setTextAreaValue(e)}
            onClick={() => this.swapAddFieldFeature("textArea")}
            showStyle={showAddField}
          />
          {showAddField ? (
            <>
              <StyledAddButton
                onClick={() => this.addNewCardFeature(id, textAreaValue)}
              >
                Add Card
              </StyledAddButton>
              <StyledSpanX
                className="fas fa-times"
                onClick={() => this.swapAddFieldFeature("SpanX")}
              />
            </>
          ) : null}
        </StyledList>
      </>
    );
  }
}

export default List;
