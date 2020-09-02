import React from "react";
import styled from "styled-components";

const StyledMoveListWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 43px;
  left: 230px;
  width: 280px;
  height: 175px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0.5px 0px 0.5px #aaa;
  z-index: 999;
  cursor: initial;
`;

const StyledX = styled.span`
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 14px;
  color: #aaa;
  cursor: pointer;
`;
const StyledTitle = styled.h3`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #aaa;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 32.5px;
  background-color: #5aac44;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 6px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: #6abc54;
  }
`;

const StyledTeaxtArea = styled.textarea`
  width: 95%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 15px auto;
  margin-top: ${(props) => (props.marginTop ? "5px" : "15px")};
  resize: none;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

function ListCopyWindowView({ textAreaValue, setCopyListValue, copyList }) {
  return (
    <StyledMoveListWrap className="listOptions">
      <StyledX className="fas fa-times" />
      <StyledTitle className="listOptions">Copy list</StyledTitle>
      <StyledTeaxtArea
        className="listOptions"
        value={textAreaValue}
        onChange={(e) => setCopyListValue(e)}
      />
      <StyledButton onClick={() => copyList()} className="listOptions">
        Create List
      </StyledButton>
    </StyledMoveListWrap>
  );
}

export default ListCopyWindowView;
