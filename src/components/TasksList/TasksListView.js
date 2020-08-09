import React from "react";
import styled from "styled-components";

const StyledNameTask = styled.div`
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  position: fixed;
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 3px;
  padding: 10px;
`;

const StyledReplaceTitle = styled.h3`
  width: 100%;
  position: relative;
  flex-grow: 1;
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 6px;
  color: #555;
  font-weight: 400;

  & > .fa-times {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

const StyledLabelInput = styled.input`
  width: 95%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 0px auto;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledTitle = styled.h3`
  width: 95%;
  padding: 7.5px 5px;
  color: #888;
  margin-top: 15px;
`;

const StyledButton = styled.button`
  width: 75px;
  height: 32.5px;
  background-color: #5aac44;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 25px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: #6abc54;
  }
`;

function TasksListView({ changeTasksListTitle, tasksListTitle, addTasksList }) {
  return (
    <StyledNameTask className="tasksList">
      <StyledReplaceTitle className="tasksList">
        Add tasks list
        <span className="fas fa-times" />
      </StyledReplaceTitle>
      <StyledTitle className="tasksList">Title</StyledTitle>
      <StyledLabelInput
        className="tasksList"
        onChange={(e) => changeTasksListTitle(e)}
        value={tasksListTitle}
      />
      <StyledButton onClick={() => addTasksList()}>ADD</StyledButton>
    </StyledNameTask>
  );
}

export default TasksListView;
