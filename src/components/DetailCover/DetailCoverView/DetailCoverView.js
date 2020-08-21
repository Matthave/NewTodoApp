import React from "react";
import DetailInputElement from "../DetailElements/DetailInputElement";
import DetailSuggestedElement from "../DetailElements/DetalSuggestedElement/DetailSuggestedElement";
import DetailTools from "../DetailTools/DetailTools";
import styled from "styled-components";

const StyledCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.6);

  &::-webkit-scrollbar {
    width: 5px;
  }
`;

const StyledDetail = styled.div`
  position: relative;
  top: 41px;
  left: 50%;
  bottom: 17.5px;
  transform: translate(-50%, 0%);
  width: 100%;
  max-width: 775px;
  min-height: calc(100vh - 40px - 17.5px);
  padding: 15px;
  border-radius: 3px;
  background-color: #f4f5f7;
  margin-bottom: 25px;
`;

function DetailCoverView({
  updateCard,
  deleteCard,
  addNewCard,
  currentListId,
  taskTitle,
  taskTitleFeature,
  taskTitleList,
  moveToInSuggestedVisi,
  wholeList,
  moveCardToAnotherList,
  labelVisi,
  taskId,
  toggleLabelColorToCard,
  listOfAllBadges,
  matchedColorsToThisCard,
  labelColors,
  setLabelColors,
  listOfAllTasksId,
  addPriorityForCards,
  commentVisi,
  commentChange,
  commentValue,
  addCommentToCard,
  listOfAllComments,
  editCommentToCard,
  moveToAnotherListVisi,
  matchedPriority,
  datePickerVisi,
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
  listOfAllTerms,
  setListOfallTerms,
  reloadCoverComponentFunc,
}) {
  return (
    <StyledCover
      className="cover"
      onClick={(e) => updateCard(e, taskTitle, currentListId, taskId)}
    >
      <StyledDetail
        className="detail"
        onClick={(e) => updateCard(e, taskTitle, currentListId, taskId)}
      >
        <span className="fas fa-credit-card"></span>
        <DetailInputElement
          taskTitle={taskTitle}
          taskTitleFeature={taskTitleFeature}
          updateCard={updateCard}
          currentListId={currentListId}
          taskId={taskId}
        />
        <DetailSuggestedElement
          taskTitleList={taskTitleList}
          taskTitle={taskTitle}
          moveToInSuggestedVisi={moveToInSuggestedVisi}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          taskId={taskId}
        />
        <DetailTools
          labelVisi={labelVisi}
          deleteCard={deleteCard}
          addNewCard={addNewCard}
          currentListId={currentListId}
          taskId={taskId}
          matchedColorsToThisCard={matchedColorsToThisCard}
          addPriorityForCards={addPriorityForCards}
          commentVisi={commentVisi}
          commentChange={commentChange}
          commentValue={commentValue}
          addCommentToCard={addCommentToCard}
          listOfAllComments={listOfAllComments}
          editCommentToCard={editCommentToCard}
          moveToAnotherListVisi={moveToAnotherListVisi}
          taskTitle={taskTitle}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          taskTitleList={taskTitleList}
          matchedPriority={matchedPriority}
          datePickerVisi={datePickerVisi}
          toggleLabelColorToCard={toggleLabelColorToCard}
          listOfAllBadges={listOfAllBadges}
          listOfAllTasksId={listOfAllTasksId}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          matchedTerms={matchedTerms}
          toggleTermToCard={toggleTermToCard}
          termDoneCheckbox={termDoneCheckbox}
          tasksListVisi={tasksListVisi}
          setListOfTasksList={setListOfTasksList}
          listOfAllTasksList={listOfAllTasksList}
          matchedListTasks={matchedListTasks}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          closeAllListsWindowsFunc={closeAllListsWindowsFunc}
          copyCardVisi={copyCardVisi}
          listOfAllTerms={listOfAllTerms}
          setListOfallTerms={setListOfallTerms}
          reloadCoverComponentFunc={reloadCoverComponentFunc}
        />
      </StyledDetail>
    </StyledCover>
  );
}

export default DetailCoverView;
