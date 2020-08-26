import React from "react";
import styled from "styled-components";
import MoveToAnotherListBox from "../../../MoveToAnotherList/MoveToAnotherListBox";

const StyledLightText = styled.h3`
  margin-top: 7.5px;
  font-weight: 400;
  font-size: 1.4rem;
  padding-left: 15px;
  color: #172b4d;
`;

const StyledStrongText = styled.strong`
  cursor: pointer;
`;

function DetailSuggestedElement({
  taskTitleList,
  taskTitle,
  moveToInSuggestedVisi,
  toggleCurrentListVisiFunc,
  wholeList,
  moveCardToAnotherList,
  taskId,
  currentListId,
}) {
  return (
    <StyledLightText>
      On the list{" "}
      <StyledStrongText
        onClick={() => toggleCurrentListVisiFunc("moveToInSuggestedVisi")}
      >
        {taskTitleList.length !== 0 ? taskTitleList : "No Name List"}
        {}
      </StyledStrongText>
      {moveToInSuggestedVisi ? (
        <MoveToAnotherListBox
          taskTitle={taskTitle}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          taskId={taskId}
          taskTitleList={taskTitleList}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          currentListId={currentListId}
          moveToInSuggestedVisi={"moveToInSuggestedVisi"}
        />
      ) : null}
    </StyledLightText>
  );
}

export default DetailSuggestedElement;
