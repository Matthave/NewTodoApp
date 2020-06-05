import React, { useState } from "react";
import styled from "styled-components";

const StyledTaskSection = styled.section`
  width: 250px;
  background-color: #ebecf0;
  border-radius: 4px;
  padding: 10px 12px;
  margin-right: 7.5px;
`;

const StyledInput = styled.input`
  background-color: #ebecf0;
  margin-bottom: 12.5px;
  padding: 5px 3px;
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

const StyledSpan = styled.span`
  margin-right: 5px;
`;

const TaskStatus = ({ title }) => {
  const [inputValue, setInputValue] = useState(title);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledTaskSection>
      <StyledInput onChange={(e) => handleInputValue(e)} value={inputValue} />
      <StyledButton>
        <StyledSpan className="fas fa-plus" />
        Add another card
      </StyledButton>
    </StyledTaskSection>
  );
};

export default TaskStatus;
