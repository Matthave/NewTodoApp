import React from "react";
import styled from "styled-components";

const StyledOptionWindow = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  right: 0;
  width: 300px;
  height: 140px;
  background-color: #fff;
  border-radius: 4px;
`;

const StyledTitle = styled.h3`
  width: 100%;
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px 7.5px 10px;
  font-size: 15px;
  color: #42516e;
`;

const StyledX = styled.span`
  position: fixed;
  transform: translateY(10px);
  right: 15px;
  font-size: 14px;
  color: #42516e;
  cursor: pointer;
`;

const StyledWrapList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
`;

const StyledListElement = styled.li`
  width: 100%;
  padding: 10px 7.5px;
  margin-bottom: 7.5px;
  font-size: 14px;
  color: #42516e;
  cursor: pointer;

  &:hover {
    background-color: #eaecf0;
  }
`;

function SubtasksOptionView({
  subTaskToCard,
  subTaskDelete,
  subTaskOptionsVisiToggle,
}) {
  return (
    <StyledOptionWindow>
      <StyledTitle>Subtasks options</StyledTitle>
      <StyledX
        className="fas fa-times"
        onClick={() => subTaskOptionsVisiToggle("")}
      />
      <StyledWrapList>
        <StyledListElement onClick={() => subTaskToCard()}>
          Make card from it
        </StyledListElement>
        <StyledListElement onClick={() => subTaskDelete()}>
          Delete
        </StyledListElement>
      </StyledWrapList>
    </StyledOptionWindow>
  );
}

export default SubtasksOptionView;
