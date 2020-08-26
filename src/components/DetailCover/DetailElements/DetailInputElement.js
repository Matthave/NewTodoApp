import React from "react";
import styled from "styled-components";

const StyledTaskName = styled.input`
  width: calc(100% - 80px);
  background-color: #f4f5f7;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #172b4d;
  margin-top: 20px;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledIcon = styled.span`
  padding-left: 15px;
`;

function Detail_Input({
  taskTitle,
  taskTitleFeature,
  updateCard,
  currentListId,
  taskId,
}) {
  return (
    <>
      {" "}
      <StyledIcon className="fas fa-credit-card" />
      <StyledTaskName
        className="input detailCoverClose"
        value={taskTitle}
        onChange={(e) => taskTitleFeature(e)}
      />
      <span
        className="fas fa-times close"
        onClick={(e) => updateCard(e, taskTitle, currentListId, taskId)}
      />
    </>
  );
}

export default Detail_Input;
