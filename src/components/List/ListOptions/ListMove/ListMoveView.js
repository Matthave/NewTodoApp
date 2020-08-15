import React from "react";
import styled from "styled-components";

const StyledMoveListWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 43px;
  left: 230px;
  width: 280px;
  height: 150px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0px 0.5px 0px 0.5px #aaa;
  z-index: 999;
  cursor: initial;
`;

const StyledX = styled.span`
  position: absolute;
  top: 12px;
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
  width: 75px;
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

const StyledSelectDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 45px;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 2.5px 5px;
  margin: 5px auto;
  margin-top: 15px;
  cursor: pointer;
`;

const StyledPossibleMoveOptions = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid black;
`;

const StyledAvailableEle = styled.div`
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  padding: 2.5px 5px;
  pointer-events: ${(props) => (props.disabled ? "none" : "initial")};
  color: ${(props) => (props.disabled ? "#999" : "initial")};
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};

  &:hover {
    background-color: #2099df;
  }
`;

const StyledSelectText = styled.h3`
  width: 100%;
  padding: 2.5px 5px;
  font-weight: 500;
  font-size: ${(props) => (props.smallerText ? "11px" : "13px")};
  color: ${(props) => (props.smallerText ? "#999" : "#333")};
`;

function ListMoveView({
  togglePossibleMoveForList,
  possibleMoveListVisi,
  availableLists,
  setThisPlaceToDiv,
  moveThisList,
  listId,
}) {
  return (
    <StyledMoveListWrap className="listOptions">
      <StyledX className="fas fa-times" />
      <StyledTitle className="listOptions">Move list</StyledTitle>
      <StyledSelectDiv
        onClick={() => togglePossibleMoveForList()}
        className="listOptions"
      >
        <StyledSelectText smallerText className="listOptions">
          Position
        </StyledSelectText>
        <StyledSelectText className="available listOptions">
          Select list place
        </StyledSelectText>
        {possibleMoveListVisi ? (
          <StyledPossibleMoveOptions>
            {availableLists.map((ele) => (
              <StyledAvailableEle
                key={ele.list}
                disabled={ele.currentList === "true" ? true : false}
                onClick={(e) => setThisPlaceToDiv(e)}
                className="listOptions"
              >
                {ele.list}
                {`${ele.currentList === "true" ? " (Actual)" : ""}`}
              </StyledAvailableEle>
            ))}
          </StyledPossibleMoveOptions>
        ) : null}
      </StyledSelectDiv>
      <StyledButton onClick={() => moveThisList(listId)}>Move It</StyledButton>
    </StyledMoveListWrap>
  );
}

export default ListMoveView;
