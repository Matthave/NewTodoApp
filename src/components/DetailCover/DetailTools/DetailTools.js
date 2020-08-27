import React from "react";
import styled from "styled-components";
import { device } from "../../../Style/MediaQuery/mq";
import DetailCoverNav from "./DetailCoverNav/DetailCoverNav";
import DetailCoverMarks from "./DetailCoverMarks/DetailCoverMarks";

const StyledDetailToolsWrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 600px;
  margin-top: 10px;
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

function DetailTools({
  labelVisi,
  archiveCard,
  addNewCard,
  currentListId,
  taskId,
  matchedColorsToThisCard,
  addPriorityForCards,
  commentVisi,
  commentChange,
  commentValue,
  addCommentToCard,
  listOfAllComments,
  editCommentToCard,
  moveToAnotherListVisi,
  taskTitle,
  wholeList,
  moveCardToAnotherList,
  taskTitleList,
  matchedPriority,
  datePickerVisi,
  toggleLabelColorToCard,
  listOfAllBadges,
  listOfAllTasksId,
  labelColors,
  setLabelColors,
  matchedTerms,
  toggleTermToCard,
  termDoneCheckbox,
  tasksListVisi,
  setListOfTasksList,
  listOfAllTasksList,
  matchedListTasks,
  toggleCurrentListVisiFunc,
  closeAllListsWindowsFunc,
  copyCardVisi,
  setListOfallTerms,
  listOfAllTerms,
  reloadCoverComponentFunc,
  commentVisiToggleFunc,
}) {
  return (
    <StyledDetailToolsWrap>
      <DetailCoverMarks
        matchedColorsToThisCard={matchedColorsToThisCard}
        commentVisi={commentVisi}
        commentChange={commentChange}
        commentValue={commentValue}
        addCommentToCard={addCommentToCard}
        taskId={taskId}
        listOfAllComments={listOfAllComments}
        editCommentToCard={editCommentToCard}
        matchedTerms={matchedTerms}
        termDoneCheckbox={termDoneCheckbox}
        listOfAllTasksList={listOfAllTasksList}
        matchedListTasks={matchedListTasks}
        addNewCard={addNewCard}
        currentListId={currentListId}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        closeAllListsWindowsFunc={closeAllListsWindowsFunc}
        commentVisiToggleFunc={commentVisiToggleFunc}
      />
      <DetailCoverNav
        labelVisi={labelVisi}
        archiveCard={archiveCard}
        currentListId={currentListId}
        taskId={taskId}
        addPriorityForCards={addPriorityForCards}
        moveToAnotherListVisi={moveToAnotherListVisi}
        taskTitle={taskTitle}
        wholeList={wholeList}
        moveCardToAnotherList={moveCardToAnotherList}
        taskTitleList={taskTitleList}
        matchedPriority={matchedPriority}
        matchedColorsToThisCard={matchedColorsToThisCard}
        datePickerVisi={datePickerVisi}
        toggleLabelColorToCard={toggleLabelColorToCard}
        listOfAllBadges={listOfAllBadges}
        listOfAllTasksId={listOfAllTasksId}
        labelColors={labelColors}
        setLabelColors={setLabelColors}
        toggleTermToCard={toggleTermToCard}
        setListOfTasksList={setListOfTasksList}
        listOfAllTasksList={listOfAllTasksList}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        copyCardVisi={copyCardVisi}
        setListOfallTerms={setListOfallTerms}
        listOfAllTerms={listOfAllTerms}
        listOfAllComments={listOfAllComments}
        tasksListVisi={tasksListVisi}
        reloadCoverComponentFunc={reloadCoverComponentFunc}
        addNewCard={addNewCard}
      />
    </StyledDetailToolsWrap>
  );
}

export default DetailTools;
