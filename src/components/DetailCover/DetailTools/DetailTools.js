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
}) {
  return (
    <StyledDetailToolsWrap>
      <DetailCoverMarks
        matchedColorsToThisCard={matchedColorsToThisCard}
        handleLabelsVisibility={handleLabelsVisibility}
        labelsVisibility={labelsVisibility}
      />
      <DetailCoverNav
        handleLabelsVisibility={handleLabelsVisibility}
        labelsVisibility={labelsVisibility}
        deleteCard={deleteCard}
        idUpdatedList={idUpdatedList}
        taskId={taskId}
      />
    </StyledDetailToolsWrap>
  );
}

export default DetailTools;
