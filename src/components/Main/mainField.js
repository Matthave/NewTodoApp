import React from "react";
import styled from "styled-components";
import TaskStatus from "../TaskStatus/taskStatus";

const StyledMain = styled.main`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  min-height: calc(100vh - 50px);
  background-color: #4bbf6b;
  padding: 40px 15px 0px 15px;
`;

const mainField = () => {
  return (
    <StyledMain>
      <TaskStatus title="To do" />
      <TaskStatus title="In progress" />
      <TaskStatus title="Finished" />
    </StyledMain>
  );
};

export default mainField;
