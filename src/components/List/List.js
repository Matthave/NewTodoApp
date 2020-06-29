import React, { Component } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import { device } from "../mq";

const StyledList = styled.section`
  position: relative;
  width: 275px;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 7.5px;
  margin-bottom: 15px;

  @media ${device.laptop} {
    margin-right: 10px;
    align-self: flex-start;
  }
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
  };

  componentDidMount() {
    document.addEventListener("click", this.hideAll);
    document.addEventListener("keypress", (e) =>
      this.addNewCardFeatureByKey(e, this.props.id, this.state.textAreaValue)
    );
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
      searchingClass.includes("nav")
    ) {
      this.setState({
        showAddField: false,
      });
      this.props.showListHandle(false);
      this.props.setListInput("");
    }
  };

  setListTitle = (e) => {
    this.setState({
      inputTitle: e.target.value,
    });
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
      this.props.addNewCard(id, textAreaValue);
      this.setState({
        showAddField: false,
        textAreaValue: "",
      });
    }
  };

  deleteCardFeature = (e) => {
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

  render() {
    const { listOption, id, tasks, wholeList } = this.props;
    const { showAddField, textAreaValue } = this.state;
    return (
      <StyledList>
        <StyledInput
          value={this.state.inputTitle}
          onChange={(e) => this.setListTitle(e)}
          className="input"
        />
        <span
          className="fas fa-ellipsis-h"
          onClick={() => listOption(id)}
        ></span>
        {tasks.map((task) => (
          <Card
            wholeList={wholeList}
            key={task}
            task={task}
            deleteCardFeature={this.deleteCardFeature}
            id={id}
            addNewCard={this.addNewCardFeature}
            deleteCardFeatureByMove={this.deleteCardFeatureByMove}
          />
        ))}
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
    );
  }
}

export default List;
