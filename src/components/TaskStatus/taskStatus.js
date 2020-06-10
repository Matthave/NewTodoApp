import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledTaskSection = styled.section`
  width: 275px;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 7.5px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
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

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  padding: 7.5px;
  resize: none;
`;

const StyledSpan = styled.span`
  margin-right: 5px;
`;

const StyledSpanX = styled.span`
  font-size: 2.3rem;
  vertical-align: middle;
  color: #666;
  cursor: pointer;
`;

const TaskStatus = ({ title, addListFeatue }) => {
  const [inputValue, setInputValue] = useState(title);
  const [toDoInput, handleToDoInput] = useState(false);
  const [textArea, handletextArea] = useState("");

  useEffect(() => {
    document.addEventListener("click", hideAll);
  });

  const hideAll = (e) => {
    const searchingClass = e.target.className;
    if (searchingClass.includes("main") || searchingClass.includes("input")) {
      handleToDoInput(false);
      addListFeatue(false);
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const nameNewCard = (e) => {
    handleToDoInput(!toDoInput);
  };

  const addNewCard = (e) => {
    const card = e.target.parentNode;
    const newTask = document.createElement("div");
    const newSpanIcon = document.createElement("span");
    newSpanIcon.classList.add("fas");
    newSpanIcon.classList.add("fa-highlighter");
    newTask.textContent = textArea;
    newTask.classList.add("card");
    card.appendChild(newTask);
    handleToDoInput(!inputValue);
    handletextArea("");
    newTask.appendChild(newSpanIcon);
  };

  const textAreaFeature = (e) => {
    handletextArea(e.target.value);
  };

  const handleEscapeButton = () => {
    handleToDoInput(!toDoInput);
    handletextArea("");
  };

  return (
    <StyledTaskSection>
      <StyledInput
        onChange={(e) => handleInputValue(e)}
        className="input"
        value={inputValue}
      />
      {toDoInput ? (
        <StyledTextArea
          placeholder="Enter title for this card..."
          value={textArea}
          onChange={(e) => textAreaFeature(e)}
        />
      ) : null}
      {toDoInput ? (
        <>
          <StyledAddButton onClick={(e) => addNewCard(e)}>
            Add Card
          </StyledAddButton>
          <StyledSpanX className="fas fa-times" onClick={handleEscapeButton} />
        </>
      ) : (
        <StyledButton onClick={(e) => nameNewCard(e)}>
          <StyledSpan className="fas fa-plus" />
          Add another card
        </StyledButton>
      )}
    </StyledTaskSection>
  );
};

export default TaskStatus;
