import React from "react";
import styled from "styled-components";
import MoveToAnotherListBox from "../../../MoveToAnotherList/MoveToAnotherListBox";

const StyledLightText = styled.h3`
  margin-top: 7.5px;
  font-weight: 400;
  font-size: 1.4rem;
  color: #172b4d;
`;

const StyledStrongText = styled.strong`
  cursor: pointer;
`;

function DetailSuggestedElement({
  changeListInDetails,
  taskTitleList,
  taskTitle,
  visibilityChangeListInDetails,
  wholeList,
  moveCardToAnotherList,
  taskId,
}) {
  return (
    <StyledLightText className="suggested">
      On the list{" "}
      <StyledStrongText className="suggested">
        {taskTitleList.length !== 0 ? taskTitleList : "No Name List"}
      </StyledStrongText>
      {visibilityChangeListInDetails ? (
        <MoveToAnotherListBox
          taskTitle={taskTitle}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          taskId={taskId}
          taskTitleList={taskTitleList}
          byElement="byListName"
        />
      ) : null}
    </StyledLightText>
  );
}

export default DetailSuggestedElement;
