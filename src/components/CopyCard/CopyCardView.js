import React from "react";
import styled from "styled-components";

const StyledCopyWrap = styled.div`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  right: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  width: 310px;
  min-height: 400px;
  transform: ${(props) =>
    props.optionCoverPosition ? "translate(130px)" : "null"};
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 17.5px;
  box-shadow: 0 0 15px 1px rgba(50, 50, 50, 0.2);
`;

const StyledReplaceTitle = styled.h3`
  width: 100%;
  position: relative;
  flex-grow: 1;
  text-align: ${(props) => (props.alignCenter ? "center" : "left")};
  font-size: 1.5rem;
  border-bottom: ${(props) => (props.border ? "1px solid #aaa" : "null")};
  padding-bottom: 6px;
  margin-left: 5px;
  color: #555;
  font-weight: 400;

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
  margin-left: 5px;
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
  align-self: flex-start;
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

const StyledLabelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  font-size: 15px;
  color: #42516e;
`;

const StyledX = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

const StyledBack = styled.span`
  font-size: 15px;
  opacity: 0;
`;

const StyledTitle = styled.h4``;

function CopyCardView({
  changeCopyTextArea,
  copyTextArea,
  matchedColorsToThisCard,
  toggleCanCopyLables,
  copyLabelsAllow,
  wholeList,
  optionCover,
  toggleCurrentListVisiFunc,
  taskId,
  taskTitle,
  currentListId,
  copyCard,
}) {
  return (
    <StyledCopyWrap optionCoverPosition={optionCover}>
      <StyledLabelTitle>
        <StyledBack className="fas fa-angle-left" />
        <StyledTitle>Copy Card</StyledTitle>
        <StyledX
          className="fas fa-times"
          onClick={() => toggleCurrentListVisiFunc("copyCardVisi")}
        />
      </StyledLabelTitle>
      <StyledReplaceTitle>Title</StyledReplaceTitle>
      <StyledTextArea
        onChange={(e) => changeCopyTextArea(e)}
        value={copyTextArea}
      />
      <StyledReplaceTitle className="suggested">Keep...</StyledReplaceTitle>
      <StyledCheckedBox
        onClick={() => toggleCanCopyLables()}
        style={{
          backgroundColor: `${copyLabelsAllow ? "#0079bf" : "#fff"}`,
          border: `${copyLabelsAllow ? "2px solid #0079bf" : "2px solid #aaa"}`,
        }}
      >
        <StyledCheckIcon className="fas fa-check" />
      </StyledCheckedBox>
      <StyledCheckBoxTitle>
        Labels ({matchedColorsToThisCard.length})
      </StyledCheckBoxTitle>
      <StyledReplaceTitle>
        <StyledIcon className="fas fa-map-marker" />
        Copy to...
      </StyledReplaceTitle>
      {wholeList.map((list) => (
        <StyledSuggestList
          key={list.id}
          onClick={() => copyCard(taskId, list.id, copyLabelsAllow)}
        >
          <StyledIcon biggerFont className="fas fa-long-arrow-alt-left" />
          {list.title}
        </StyledSuggestList>
      ))}
    </StyledCopyWrap>
  );
}

export default CopyCardView;
