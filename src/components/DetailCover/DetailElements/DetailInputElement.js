import React from "react";
import styled from "styled-components";

const StyledTaskName = styled.input`
  width: calc(100% - 50px);
  background-color: #f4f5f7;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #172b4d;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

function Detail_Input({ taskTitle, taskTitleFeature, updateCard }) {
  return (
    <>
      <StyledTaskName
        className="input"
        value={taskTitle}
        onChange={(e) => taskTitleFeature(e)}
      />
      <span
        className="fas fa-times close"
        onClick={(e) => updateCard(e, taskTitle)}
      />
    </>
  );
}

export default Detail_Input;
