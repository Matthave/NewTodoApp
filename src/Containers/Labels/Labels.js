import React from "react";
import LabelsView from "../../components/Labels/LabelsView";

function Labels({ handleLabelsVisibility, detailCover }) {
  return (
    <LabelsView
      handleLabelsVisibility={handleLabelsVisibility}
      detailCover={detailCover}
    />
  );
}

export default Labels;
