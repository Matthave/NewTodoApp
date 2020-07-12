import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card/Card";

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

const StyledInputCover = styled.div`
  display: inline-block;
  width: 220px;
  background-color: #ebecf0;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #172b4d;
  margin-bottom: 25px;
`;

class List extends Component {
  state = {
    inputTitle: this.props.title,
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

    for (let i = 1; i < 10; i++) {
      if (e.pageX < 285 - scrollHeighFromMain) {
      } else if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        wholeList.length >= i + 1
      ) {
      }
    }

    this.setState({
      selectedList: false,
    });
  };

  mouseLeaveFeature = (e) => {
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
    } = this.props;
    const {
      showAddField,
      textAreaValue,
      inputTitle,
      selectedList,
    } = this.state;
    return (
      <div className="listWrap">
        <div className="frontBlankList"></div>
        <div
          className="lists"
          onMouseDown={(e) => this.mouseDownFeature(e)}
          onMouseMove={(e) => this.mouseMoveFeature(e)}
          onMouseUp={(e) => this.mouseUpFeature(e)}
          onMouseLeave={(e) => this.mouseLeaveFeature(e)}
        >
          {selectedList ? (
            <StyledInputCover
              onChange={(e) => this.setListTitle(e, id)}
              className="input"
            >
              {this.state.inputTitle}
            </StyledInputCover>
          ) : (
            <StyledInput
              value={this.state.inputTitle}
              onChange={(e) => this.setListTitle(e, id)}
              className="input"
            />
          )}
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
              inputTitle={inputTitle}
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
        </div>
      </div>
    );
  }
}

export default List;
