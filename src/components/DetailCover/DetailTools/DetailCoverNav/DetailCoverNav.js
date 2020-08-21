import React from "react";
import styled from "styled-components";
import Labels from "../../../../Containers/Labels/Labels";
import MoveToAnotherListBox from "../../../MoveToAnotherList/MoveToAnotherListBox";
import DatePicker from "../../../../Containers/DatePicker/DatePicker";
import TasksList from "../../../../Containers/TasksList/TasksList";
import CopyCard from "../../../../Containers/CopyCard/CopyCard";
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
  labelVisi,
  deleteCard,
  currentListId,
  taskId,
  addPriorityForCards,
  moveToAnotherListVisi,
  taskTitle,
  wholeList,
  moveCardToAnotherList,
  taskTitleList,
  matchedPriority,
  matchedColorsToThisCard,
  datePickerVisi,
  toggleLabelColorToCard,
  listOfAllBadges,
  listOfAllTasksId,
  labelColors,
  setLabelColors,
  toggleTermToCard,
  tasksListVisi,
  setListOfTasksList,
  listOfAllTasksList,
  copyCardVisi,
  toggleCurrentListVisiFunc,
  listOfAllTerms,
  setListOfallTerms,
}) {
  return (
    <StyledDetailNav>
      <StyledDetailUl>
        <StyledDetailList first> ADD TO CARD</StyledDetailList>
        <StyledDetailList
          onClick={() => toggleCurrentListVisiFunc("labelVisi")}
        >
          <StyledIcon className="fas fa-tag" />
          Edit labels
        </StyledDetailList>
        <StyledDetailList
          onClick={() => toggleCurrentListVisiFunc("tasksListVisi")}
        >
          <StyledIcon className="fas fa-list-alt" />
          Tasks list
        </StyledDetailList>
        <StyledDetailList
          onClick={() => toggleCurrentListVisiFunc("datePickerVisi")}
        >
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
          onClick={() => toggleCurrentListVisiFunc("moveToAnotherListVisi")}
        >
          <StyledIcon className="fas fa-long-arrow-alt-right" />
          Move
        </StyledDetailList>
        <StyledDetailList
          onClick={() => toggleCurrentListVisiFunc("copyCardVisi")}
        >
          <StyledIcon className="far fa-clipboard" />
          Copy
        </StyledDetailList>
        <StyledDetailList
          onClick={(e) => addPriorityForCards(e, taskId, "detailCover")}
          style={{
            color: `${matchedPriority.length !== 0 ? "#db4a36" : "#42516e"}`,
          }}
        >
          <StyledIcon
            className="fas fa-exclamation-circle"
            style={{
              color: `${matchedPriority.length !== 0 ? "#db4a36" : "#42516e"}`,
            }}
          />
          Priority
        </StyledDetailList>
        <StyledDetailList
          className="delete"
          onClick={(e) => deleteCard(currentListId, taskId, "byButton")}
        >
          <StyledIcon className="fas fa-archive" />
          Archive
        </StyledDetailList>
      </StyledDetailUl>
      {labelVisi ? (
        <Labels
          detailCover={true}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          toggleLabelColorToCard={toggleLabelColorToCard}
          listOfAllBadges={listOfAllBadges}
          taskId={taskId}
          listOfAllTasksId={listOfAllTasksId}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
        />
      ) : null}
      {moveToAnotherListVisi ? (
        <MoveToAnotherListBox
          taskTitle={taskTitle}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          taskId={taskId}
          currentListId={currentListId}
        />
      ) : null}
      {copyCardVisi ? (
        <CopyCard
          matchedColorsToThisCard={matchedColorsToThisCard}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          wholeList={wholeList}
          taskTitle={taskTitle}
          taskId={taskId}
          currentListId={currentListId}
        />
      ) : null}
      {datePickerVisi ? (
        <DatePicker
          toggleTermToCard={toggleTermToCard}
          taskId={taskId}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          listOfAllTerms={listOfAllTerms}
          setListOfallTerms={setListOfallTerms}
        />
      ) : null}
      {tasksListVisi ? (
        <TasksList
          setListOfTasksList={setListOfTasksList}
          listOfAllTasksList={listOfAllTasksList}
          taskId={taskId}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        />
      ) : null}
    </StyledDetailNav>
  );
}

export default DetailCoverNav;
