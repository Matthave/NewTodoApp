import React from "react";
import LabelsWrap from "./LabelsWrap/LabelsWrap";
import TermsWrap from "./TermsWrap/TermsWrap";
import TasksListWrap from "./TasksListWrap/TasksListWrap";
import CommentWrap from "./CommentWrap/CommentWrap";
import styled from "styled-components";
import { device } from "../../../../Style/MediaQuery/mq";

const StyledDetailMarks = styled.div`
  width: 100%;

  @media ${device.laptop} {
    width: 75%;
  }
`;

function DetailCoverMarks({
  matchedColorsToThisCard,
  commentVisi,
  commentChange,
  commentValue,
  addCommentToCard,
  taskId,
  listOfAllComments,
  editCommentToCard,
  matchedTerms,
  termDoneCheckbox,
  matchedListTasks,
  listOfAllTasksList,
  addNewCard,
  currentListId,
  toggleCurrentListVisiFunc,
  closeAllListsWindowsFunc,
  tasksListVisi,
  commentVisiToggleFunc,
}) {
  return (
    <StyledDetailMarks className="detailCoverClose">
      <LabelsWrap
        matchedColorsToThisCard={matchedColorsToThisCard}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
      />
      <TermsWrap
        matchedTerms={matchedTerms}
        taskId={taskId}
        termDoneCheckbox={termDoneCheckbox}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
      />
      <TasksListWrap
        matchedListTasks={matchedListTasks}
        listOfAllTasksList={listOfAllTasksList}
        taskId={taskId}
        closeAllListsWindowsFunc={closeAllListsWindowsFunc}
        tasksListVisi={tasksListVisi}
        addNewCard={addNewCard}
        currentListId={currentListId}
      />
      <CommentWrap
        listOfAllComments={listOfAllComments}
        editCommentToCard={editCommentToCard}
        taskId={taskId}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        commentChange={commentChange}
        addCommentToCard={addCommentToCard}
        commentValue={commentValue}
        commentVisi={commentVisi}
        commentVisiToggleFunc={commentVisiToggleFunc}
      />
    </StyledDetailMarks>
  );
}

export default DetailCoverMarks;
