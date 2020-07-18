import React from "react";
import styled from "styled-components";
import OptionCoverListView from "./OptionCoverListView/OptionCoverListView";

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
`;

const StyledOptionBox = styled.div`
  position: fixed;
  transform: translate(0, -50%);
  height: 400px;
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
`;

const StyledTextArea = styled.textarea`
  height: 100px;
  width: 260px;
  padding: 7.5px;
  margin-right: 10px;
  border-radius: 5px;
  resize: none;
`;

const StyledSaveButton = styled.button`
  position: fixed;
  top: 108px;
  width: 75px;
  height: 32.5px;
  background-color: #5aac44;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: #6abc54;
  }
`;

const OptionCover = ({
  optionCoverData,
  taskTitleFeature,
  taskTitle,
  visibilityOptionFunction,
  updateCard,
}) => {
  return (
    <StyledCover
      className="coverOption"
      onClick={(e) => visibilityOptionFunction(e, null, null)}
    >
      <StyledOptionBox className="cover_box">
        <StyledTextArea
          className="cover_textArea"
          onChange={(e) => taskTitleFeature(e)}
          value={taskTitle}
        />
        <OptionCoverListView />
        <StyledSaveButton
          className="cover_saveBtn"
          onClick={(e) => updateCard(e, taskTitle)}
        >
          Save
        </StyledSaveButton>
      </StyledOptionBox>
    </StyledCover>
  );
};

export default OptionCover;
