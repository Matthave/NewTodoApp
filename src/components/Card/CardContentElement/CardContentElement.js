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
  color: ${(props) => (props.fullCoverStyle ? "#fff" : "#172b4d")};
  text-shadow: ${(props) =>
    props.fullCoverStyle ? "0.5px 0.5px #000" : "none"};
`;

const StyledEdit = styled.span`
  align-self: center;
  margin-bottom: 0px;
  color: #fff;
  margin: 0 5px;
  pointer-events: initial;
  background-color: ${(props) =>
    props.fullCoverStyle ? "rgba(155,155,155,0.5)" : "transparent"};
  box-shadow: ${(props) =>
    props.fullCoverStyle ? "0 0 0 6.5px rgba(155,155,155,0.5)" : "none"};
  transition: 0.1s linear;
`;

function CardContentElement({
  task,
  listId,
  visibilityOptionFunction,
  matchedCover,
}) {
  return (
    <StyledContentWrap>
      <StyledContent
        fullCoverStyle={matchedCover.length !== 0 && matchedCover[0].fullCover}
      >
        {task.taskName}
      </StyledContent>
      <StyledEdit
        fullCoverStyle={matchedCover.length !== 0 && matchedCover[0].fullCover}
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
