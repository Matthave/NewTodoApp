import React from "react";
import styled from "styled-components";

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

const StyledTextArea = styled.textarea`
  width: 95%;
  background-color: #f5f6f8;
  margin: 0px auto 10px auto;
  padding: 7.5px 5px;
  border-radius: 3px;
  min-height: 75px;
  resize: none;
  cursor: pointer;
  transition: 0.1s linear;
  box-shadow: 0px 0px 1px 1.5px #aaa;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledCheckedBox = styled.span`
  position: relative;
  width: 17px;
  height: 17px;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
  transition: 0.1s linear;
`;

const StyledCheckIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
`;

const StyledCheckBoxTitle = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
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
  cursor: pointer;
  color: black;
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

function CopyCardView({
  changeCopyTextArea,
  copyTextArea,
  matchedColorsToThisCard,
  toggleCanCopyLables,
  canCopyLabels,
  wholeList,
  taskId,
  currentListId,
}) {
  return (
    <>
      <StyledReplaceTitle className="suggested">Title</StyledReplaceTitle>
      <StyledTextArea
        className="suggested"
        onChange={(e) => changeCopyTextArea(e)}
        value={copyTextArea}
      />
      <StyledReplaceTitle className="suggested">Keep...</StyledReplaceTitle>
      <StyledCheckedBox
        className="suggested"
        onClick={() => toggleCanCopyLables()}
        style={{
          backgroundColor: `${canCopyLabels ? "#0079bf" : "#fff"}`,
          border: `${canCopyLabels ? "2px solid #0079bf" : "2px solid #aaa"}`,
        }}
      >
        <StyledCheckIcon className="fas fa-check suggested" />
      </StyledCheckedBox>
      <StyledCheckBoxTitle className="suggested">
        Labels ({matchedColorsToThisCard.length})
      </StyledCheckBoxTitle>
      <StyledReplaceTitle className="suggested">
        <StyledIcon className="fas fa-map-marker" />
        Copy to...
      </StyledReplaceTitle>
      {wholeList.map((list) => (
        <StyledSuggestList className="suggested" key={list.id}>
          <StyledIcon biggerFont className="fas fa-long-arrow-alt-left" />
          {list.title}
        </StyledSuggestList>
      ))}
    </>
  );
}

export default CopyCardView;
