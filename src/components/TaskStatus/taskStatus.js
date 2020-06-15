import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../mq";

const StyledTaskSection = styled.section`
  width: 275px;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 7.5px;
  margin: 0 auto;
  margin-bottom: 15px;

  @media ${device.laptop} {
    margin-right: 15px;
  }
`;

const StyledInput = styled.input`
  background-color: #ebecf0;
  padding: 5px 4px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #172b4d;
  box-sizing: border-box;
  margin-bottom: 5px;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 2px 1px #0079bf;
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

const TaskStatus = ({
  title,
  addListFeature,
  tasks,
  addNewCard,
  id,
  taskEditCard,
}) => {
  const [inputValue, setInputValue] = useState(title);

  const [textArea, handletextArea] = useState("");
  const [toDoInput, handleToDoInput] = useState(false);

  useEffect(() => {
    document.addEventListener("click", hideAll);
  });

  const hideAll = (e) => {
    const searchingClass = e.target.className;
    if (searchingClass.includes("main") || searchingClass.includes("input")) {
      handleToDoInput(false);
      addListFeature(false);
    }
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const nameNewCard = (e) => {
    handleToDoInput(!toDoInput);
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
        className="inputs"
        value={inputValue}
      />
      {tasks.map((task) => (
        <div key={task} className="card">
          {task}
          <span
            className="fas fa-highlighter"
            onClick={() => taskEditCard(id, task)}
          ></span>
        </div>
      ))}
      {toDoInput ? (
        <StyledTextArea
          placeholder="Enter title for this card..."
          value={textArea}
          onChange={(e) => textAreaFeature(e)}
        />
      ) : null}
      {toDoInput ? (
        <>
          <StyledAddButton
            onClick={() =>
              addNewCard(textArea, id, handleToDoInput, handletextArea)
            }
          >
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
