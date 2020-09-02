import React from "react";
import styled from "styled-components";

const StyledMoveListWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 43px;
  left: 230px;
  width: 280px;
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

const StyledAvailableList = styled.div`
  width: 100%;
  margin: 10px auto;
`;

const StyledNameList = styled.h4`
  width: 100%;
  padding: 10px;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => (props.disabled ? "#999" : "#333")};
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "initial" : "#EBECF0")};
  }
`;

function ListMoveCardsWindowView({ availableLists, moveCardsFromListFunc }) {
  return (
    <StyledMoveListWrap className="listOptions">
      <StyledX className="fas fa-times" />
      <StyledTitle className="listOptions">
        Move every card from list
      </StyledTitle>
      <StyledAvailableList className="listOptions">
        {availableLists.map((ele) => (
          <StyledNameList
            key={ele.id}
            disabled={ele.currentList === "true"}
            onClick={() => moveCardsFromListFunc(ele.id)}
          >
            {ele.currentList === "true"
              ? `${ele.title} (Actual)`
              : `${ele.title}`}
          </StyledNameList>
        ))}
      </StyledAvailableList>
    </StyledMoveListWrap>
  );
}

export default ListMoveCardsWindowView;
