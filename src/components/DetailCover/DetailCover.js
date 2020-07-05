import React, { useState } from "react";
import styled from "styled-components";

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledDetail = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 75vw;
  max-width: 775px;
  padding: 15px;
  background-color: #f4f5f7;
`;

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

const StyledLightText = styled.h3`
  margin-top: 5px;
  font-weight: 500;
  font-size: 1.4rem;
  color: #172b4d;
`;

const StyledStrongText = styled.strong`
  cursor: pointer;
`;

const DetailCover = ({ taskName, taskTitleList, updateCard }) => {
  const [taskTitle, setTaskTitle] = useState(taskName);

  const taskTitleFeature = (e) => {
    setTaskTitle(e.target.value);
  };
  return (
    <StyledCover className="cover" onClick={(e) => updateCard(e, taskTitle)}>
      <StyledDetail className="detail">
        <span className="fas fa-credit-card"></span>

        <StyledTaskName
          value={taskTitle}
          onChange={(e) => taskTitleFeature(e)}
        />
        <span
          className="fas fa-times"
          onClick={(e) => updateCard(e, taskTitle)}
        ></span>
        <StyledLightText>
          On the list <StyledStrongText>{taskTitleList}</StyledStrongText>
        </StyledLightText>
      </StyledDetail>
    </StyledCover>
  );
};

export default DetailCover;
