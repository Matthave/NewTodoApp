import React, { Component } from "react";
import styled from "styled-components";

const StyledList = styled.section`
  width: 275px;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 7.5px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  width: 220px;
  background-color: #ebecf0;
  padding: 5px 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #172b4d;

  &:focus {
    background-color: white;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  margin-left: 5px;
  padding: 7.5px 3px;
  color: #779;
  cursor: pointer;

  &:hover {
    background-color: #dddfe5;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 7.5px;
  resize: none;
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

  setListTitle = (e) => {
    this.setState({
      inputTitle: e.target.value,
    });
  };

  swapAddFieldFeature = () => {
    this.setState({
      showAddField: !this.state.showAddField,
    });
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

  deleteCardFeature = (e) => {
    this.props.deleteCard(e, this.props.id);
    this.setState({
      textAreaValue: "",
    });
  };

  render() {
    const { listOption, id, tasks } = this.props;
    const { showAddField, textAreaValue } = this.state;
    return (
      <StyledList>
        <StyledInput
          value={this.state.inputTitle}
          onChange={(e) => this.setListTitle(e)}
        />
        <span
          className="fas fa-ellipsis-h"
          onClick={() => listOption(id)}
        ></span>
        {tasks.map((task) => (
          <div key={task} className="card">
            {task}
            <span
              className="fas fa-highlighter"
              onClick={(e) => this.deleteCardFeature(e)}
            />
          </div>
        ))}
        {showAddField ? (
          <>
            <StyledTextArea
              value={this.state.textAreaValue}
              onChange={(e) => this.setTextAreaValue(e)}
            />
            <StyledAddButton
              onClick={() => this.addNewCardFeature(id, textAreaValue)}
            >
              Add Card
            </StyledAddButton>
            <StyledSpanX
              className="fas fa-times"
              onClick={this.swapAddFieldFeature}
            />
          </>
        ) : (
          <StyledButton onClick={this.swapAddFieldFeature}>
            <span className="fas fa-plus"></span> Add Another Card
          </StyledButton>
        )}
      </StyledList>
    );
  }
}

export default List;
