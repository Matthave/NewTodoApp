import React from "react";
import styled from "styled-components";
import Labels from "../../../../Containers/Labels/Labels";
import MoveToAnotherListBox from "../../../MoveToAnotherList/MoveToAnotherListBox";
import DatePicker from "../../../../Containers/DatePicker/DatePicker";
import TasksList from "../../../../Containers/TasksList/TasksList";
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
    width: 200px;
  }
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  font-size: 13px;
  color: #42516e;
  pointer-events: none;
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
  toggleDetailMove,
  taskTitle,
  wholeList,
  moveCardToAnotherList,
  taskTitleList,
  matchedPriority,
  copyVisibility,
  matchedColorsToThisCard,
  toggleDateVisibility,
  dateVisibility,
  toggleLabelColorToCard,
  listOfAllBadges,
  listOfAllTasksId,
  labelColors,
  setLabelColors,
  toggleTermToCard,
  setTasksListVisibility,
  tasksListVisibility,
  setListOfTasksList,
  listOfAllTasksList,
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
        <StyledDetailList
          onClick={() => setTasksListVisibility(!tasksListVisibility)}
          className="tasksList"
        >
          <StyledIcon className="fas fa-list-alt tasksList" />
          Tasks list
        </StyledDetailList>
        <StyledDetailList
          onClick={() => toggleDateVisibility()}
          className="calendar"
        >
          <StyledIcon className="far fa-clock calendar" />
          Term
        </StyledDetailList>
        <StyledDetailList>
          <StyledIcon className="far fa-image" />
          Cover
        </StyledDetailList>
      </StyledDetailUl>
      <StyledDetailUl>
        <StyledDetailList first> ACTIONS</StyledDetailList>
        <StyledDetailList className="suggested">
          <StyledIcon className="fas fa-long-arrow-alt-right suggested" />
          Move
        </StyledDetailList>
        <StyledDetailList className="suggested">
          <StyledIcon className="far fa-clipboard suggested" />
          Copy
        </StyledDetailList>
        <StyledDetailList
          onClick={(e) => addPriorityForCards(e, taskId, "detailCover")}
          style={{
            color: `${matchedPriority.length !== 0 ? "#db4a36" : "#42516e"}`,
          }}
        >
          <StyledIcon
            className="fas fa-exclamation-circle suggested"
            style={{
              color: `${matchedPriority.length !== 0 ? "#db4a36" : "#42516e"}`,
            }}
          />
          Priority
        </StyledDetailList>
        <StyledDetailList
          className="delete"
          onClick={(e) => deleteCard(idUpdatedList, taskId, "byButton")}
        >
          <StyledIcon className="fas fa-archive suggested" />
          Archive
        </StyledDetailList>
      </StyledDetailUl>
      {labelsVisibility ? (
        <Labels
          detailCover={true}
          handleLabelsVisibility={handleLabelsVisibility}
          toggleLabelColorToCard={toggleLabelColorToCard}
          listOfAllBadges={listOfAllBadges}
          taskId={taskId}
          listOfAllTasksId={listOfAllTasksId}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
        />
      ) : null}
      {toggleDetailMove ? (
        <MoveToAnotherListBox
          taskTitle={taskTitle}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          taskId={taskId}
          currentListId={idUpdatedList}
          byElement="byNavMove"
        />
      ) : null}
      {dateVisibility ? (
        <DatePicker
          toggleDateVisibility={toggleDateVisibility}
          toggleTermToCard={toggleTermToCard}
          taskId={taskId}
        />
      ) : null}
      {tasksListVisibility ? (
        <TasksList
          setListOfTasksList={setListOfTasksList}
          listOfAllTasksList={listOfAllTasksList}
          taskId={taskId}
        />
      ) : null}
    </StyledDetailNav>
  );
}

export default DetailCoverNav;
