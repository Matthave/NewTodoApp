import React from "react";
import styled from "styled-components";
import Labels from "../../../../Containers/Labels/Labels";
import MoveToAnotherListBox from "../../../MoveToAnotherList/MoveToAnotherListBox";
import DatePicker from "../../../../Containers/DatePicker/DatePicker";
import TasksList from "../../../../Containers/TasksList/TasksList";
import CopyCard from "../../../../Containers/CopyCard/CopyCard";
import CoverCard from "../../../../Containers/CoverCard/CoverCard";
import { device } from "../../../../Style/MediaQuery/mq";

const StyledDetailNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 300px;
  @media ${device.laptop} {
    width: 215px;
  }
`;

const StyledDetailUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
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
  padding-left: ${(props) => (props.first ? "15px" : "7.5px")};
  margin-bottom: ${(props) => (props.first ? "5px" : "10px")};
  list-style: none;
  font-size: 14px;
  color: #42516e;
  cursor: ${(props) => (props.first ? "initial" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.first ? "transparent" : "#dadce0")};
  }

  @media ${device.laptop} {
    width: 90%;
  }
`;

function DetailCoverNav({
  labelVisi,
  archiveCard,
  currentListId,
  taskId,
  addPriorityForCards,
  moveToAnotherListVisi,
  taskTitle,
  wholeList,
  moveCardToAnotherList,
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
  listOfAllComments,
  setListOfallTerms,
  reloadCoverComponentFunc,
  addNewCard,
  isThisCardArchived,
  deleteCard,
  coverCardVisi,
  listOfAllCover,
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
        <StyledDetailList
          onClick={() => toggleCurrentListVisiFunc("coverCardVisi")}
        >
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
        {isThisCardArchived.length !== 0 ? (
          <StyledDetailList
            className="delete ultimateDelete"
            onClick={(e) => deleteCard(taskId)}
          >
            <StyledIcon className="fas fa-skull-crossbones" />
            Delete
          </StyledDetailList>
        ) : (
          <StyledDetailList
            className="delete"
            onClick={(e) => archiveCard(currentListId, taskId)}
          >
            <StyledIcon className="fas fa-archive" />
            Archive
          </StyledDetailList>
        )}
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
          reloadCoverComponentFunc={reloadCoverComponentFunc}
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
          listOfAllBadges={listOfAllBadges}
          listOfAllTerms={listOfAllTerms}
          listOfAllComments={listOfAllComments}
          listOfAllTasksId={listOfAllTasksId}
          addNewCard={addNewCard}
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
      {coverCardVisi ? (
        <CoverCard
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          labelColors={labelColors}
          listOfAllCover={listOfAllCover}
          taskId={taskId}
        />
      ) : null}
    </StyledDetailNav>
  );
}

export default DetailCoverNav;
