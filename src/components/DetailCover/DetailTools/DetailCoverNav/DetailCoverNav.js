import React from "react";
import styled from "styled-components";
import MoveToAnotherListBox from "../../../MoveToAnotherList/MoveToAnotherListBox";
import { device } from "../../../../Style/MediaQuery/mq";

const StyledDetailNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 300px;
  @media ${device.laptop} {
    width: 200px;
  }
`;

const StyledDetailUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  font-size: 13px;
  color: #42516e;
`;

const StyledDetailList = styled.li`
  width: ${(props) => (props.first ? "100%" : "45%")};
  background-color: ${(props) => (props.first ? "transparent" : "#eaecf0")};
  border-radius: ${(props) => (props.first ? "null" : "3px")};
  padding: 7.5px;
  margin-right: ${(props) => (props.first ? "0px" : "10px")};
  margin-bottom: ${(props) => (props.first ? "5px" : "10px")};
  list-style: none;
  font-size: 14px;
  color: #42516e;
  cursor: ${(props) => (props.first ? "initial" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.first ? "transparent" : "#dadce0")};
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;

function DetailCoverNav({
  handleLabelsVisibility,
  labelsVisibility,
  deleteCard,
  idUpdatedList,
  taskId,
  addPriorityForCards,
  changeListInDetails,
  toggleDetailMove,
  taskTitle,
  wholeList,
  moveCardToAnotherList,
  taskTitleList,
}) {
  return (
    <StyledDetailNav>
      <StyledDetailUl>
        <StyledDetailList first> ADD TO CARD</StyledDetailList>
        <StyledDetailList
          onClick={() => handleLabelsVisibility(!labelsVisibility)}
          className="label"
        >
          <StyledIcon className="fas fa-tag label" />
          Edit labels
        </StyledDetailList>
        <StyledDetailList>
          <StyledIcon className="fas fa-list-alt" />
          Tasks list
        </StyledDetailList>
        <StyledDetailList>
          <StyledIcon className="far fa-clock" />
          Term
        </StyledDetailList>
        <StyledDetailList>
          <StyledIcon className="far fa-image" />
          Cover
        </StyledDetailList>
      </StyledDetailUl>
      <StyledDetailUl>
        <StyledDetailList first> ACTIONS</StyledDetailList>
        <StyledDetailList
          onClick={() => changeListInDetails("byNavMove")}
          className="suggested"
        >
          <StyledIcon className="fas fa-long-arrow-alt-right" />
          Move
        </StyledDetailList>
        <StyledDetailList>
          <StyledIcon className="far fa-clipboard" />
          Copy
        </StyledDetailList>
        <StyledDetailList onClick={() => addPriorityForCards(taskId)}>
          <StyledIcon className="fas fa-exclamation-circle" />
          Priority
        </StyledDetailList>
        <StyledDetailList
          className="delete"
          onClick={(e) => deleteCard(idUpdatedList, taskId, "byButton")}
        >
          <StyledIcon className="fas fa-archive" />
          Archive
        </StyledDetailList>
      </StyledDetailUl>
      {toggleDetailMove ? (
        <MoveToAnotherListBox
          taskTitle={taskTitle}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          taskId={taskId}
          changeListInDetails={changeListInDetails}
          taskTitleList={taskTitleList}
          byElement="byNavMove"
        />
      ) : null}
    </StyledDetailNav>
  );
}

export default DetailCoverNav;
