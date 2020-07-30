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
  labelsVisibility,
  handleLabelsVisibility,
  deleteCard,
  idUpdatedList,
  taskId,
  matchedColorsToThisCard,
  addPriorityForCards,
  toggleCommentFeature,
  toggleCommentVisibility,
  commentChange,
  commentValue,
  addCommentToCard,
  listOfAllComments,
  editCommentToCard,
  changeListInDetails,
  toggleDetailMove,
  taskTitle,
  wholeList,
  moveCardToAnotherList,
  taskTitleList,
}) {
  return (
    <StyledDetailToolsWrap>
      <DetailCoverMarks
        matchedColorsToThisCard={matchedColorsToThisCard}
        handleLabelsVisibility={handleLabelsVisibility}
        labelsVisibility={labelsVisibility}
        toggleCommentFeature={toggleCommentFeature}
        toggleCommentVisibility={toggleCommentVisibility}
        commentChange={commentChange}
        commentValue={commentValue}
        addCommentToCard={addCommentToCard}
        taskId={taskId}
        listOfAllComments={listOfAllComments}
        editCommentToCard={editCommentToCard}
      />
      <DetailCoverNav
        handleLabelsVisibility={handleLabelsVisibility}
        labelsVisibility={labelsVisibility}
        deleteCard={deleteCard}
        idUpdatedList={idUpdatedList}
        taskId={taskId}
        addPriorityForCards={addPriorityForCards}
        changeListInDetails={changeListInDetails}
        toggleDetailMove={toggleDetailMove}
        taskTitle={taskTitle}
        wholeList={wholeList}
        moveCardToAnotherList={moveCardToAnotherList}
        taskTitleList={taskTitleList}
      />
    </StyledDetailToolsWrap>
  );
}

export default DetailTools;
