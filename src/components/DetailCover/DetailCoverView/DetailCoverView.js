import React from "react";
import DetailInputElement from "../DetailElements/DetailInputElement";
import DetailSuggestedElement from "../DetailElements/DetailSuggestedElement";
import DetailTools from "../DetailTools/DetailTools";
import styled from "styled-components";

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledDetail = styled.div`
  position: fixed;
  top: 41px;
  left: 50%;
  bottom: 17.5px;
  transform: translate(-50%, 0%);
  width: 100%;
  max-width: 775px;
  padding: 15px;
  border-radius: 3px;
  background-color: #f4f5f7;
`;

function DetailCoverView({
  updateCard,
  taskTitle,
  taskTitleFeature,
  changeListInDetails,
  taskTitleList,
  visibilityChangeListInDetails,
  wholeList,
  moveCardToAnotherList,
}) {
  return (
    <StyledCover className="cover" onClick={(e) => updateCard(e, taskTitle)}>
      <StyledDetail
        className="detail"
        onClick={(e) => updateCard(e, taskTitle)}
      >
        <span className="fas fa-credit-card"></span>
        <DetailInputElement
          taskTitle={taskTitle}
          taskTitleFeature={taskTitleFeature}
          updateCard={updateCard}
        />
        <DetailSuggestedElement
          changeListInDetails={changeListInDetails}
          taskTitleList={taskTitleList}
          taskTitle={taskTitle}
          visibilityChangeListInDetails={visibilityChangeListInDetails}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
        />
        <DetailTools />
      </StyledDetail>
    </StyledCover>
  );
}

export default DetailCoverView;
