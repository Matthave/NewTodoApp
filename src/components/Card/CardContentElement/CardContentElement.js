import React from "react";
import styled from "styled-components";

const StyledContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  padding: 10px;
`;

const StyledContent = styled.h3`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 400;
  color: #172b4d;
`;

const StyledEdit = styled.span`
  margin: 0 5px;
  align-self: center;
  pointer-events: initial;
`;

function CardContentElement({ task, listId, visibilityOptionFunction }) {
  return (
    <StyledContentWrap>
      <StyledContent>{task.taskName}</StyledContent>
      <StyledEdit
        className="fas fa-highlighter"
        onClick={(e) =>
          visibilityOptionFunction(
            e,
            true,
            task,
            listId,
            task.currentListName,
            task.id
          )
        }
      />
    </StyledContentWrap>
  );
}

export default CardContentElement;
