import React from "react";
import styled from "styled-components";

const StyledChangeListDetails = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  position: fixed;
  right: ${(props) => (props.rightPosition ? "-120px" : "null")};
  top: ${(props) => (props.topPosition ? "0px" : "null")};
  width: 300px;
  background-color: #fff;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 17.5px;
`;

const StyledReplaceTitle = styled.h3`
  width: 100%;
  position: relative;
  flex-grow: 1;
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  font-size: 1.5rem;
  border-bottom: ${(props) => (props.border ? "1px solid #aaa" : "null")};
  padding-bottom: 6px;
  color: #555;
  font-weight: 400;
  margin-bottom: ${(props) => (props.biggerMargin ? "27.5px" : "5px")};

  & > .fa-times {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

const StyledSuggestList = styled.div`
  width: 100%;
  max-width: 275px;
  word-break: break-all;
  margin: 0 auto;
  margin-bottom: 7px;
  padding: 9px 7.5px;
  font-size: 1.4rem;
  background-color: #f5f6f8;
  border-radius: 3px;
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};
  color: ${(props) => (props.disabled ? "#999" : "#000")};
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
  transition: 0.1s linear;
  z-index: 9999;

  &:hover {
    background-color: #e6e8ed;
  }
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  font-size: ${(props) => (props.biggerFont ? "15.5px" : "13px")};
  transition: 0.1s linear;
`;

function MoveToAnotherListBox({
  taskTitle,
  wholeList,
  moveCardToAnotherList,
  taskId,
  optionCover,
  currentListId,
}) {
  return (
    <StyledChangeListDetails
      className="replaceCard suggested"
      rightPosition={optionCover}
      topPosition={optionCover}
    >
      <StyledReplaceTitle border alignCenter biggerMargin className="suggested">
        Replace Card
        <span className="fas fa-times"></span>
      </StyledReplaceTitle>
      <>
        <StyledReplaceTitle className="suggested">
          <StyledIcon className="fas fa-map-marker" />
          Suggested
        </StyledReplaceTitle>
        {wholeList.map((list) => (
          <StyledSuggestList
            className="suggested"
            onClick={() =>
              moveCardToAnotherList(taskId, taskTitle, list.id, currentListId)
            }
            key={list.id}
            disabled={list.id === currentListId}
          >
            <StyledIcon biggerFont className="fas fa-long-arrow-alt-left" />
            {list.title.length !== 0 ? list.title : "No Name List"}
            {list.id === currentListId ? " (Actual)" : null}
          </StyledSuggestList>
        ))}
      </>
    </StyledChangeListDetails>
  );
}

export default MoveToAnotherListBox;
