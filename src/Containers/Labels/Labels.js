import React, { useState } from "react";
import LabelsView from "../../components/Labels/LabelsView";

function Labels({
  handleLabelsVisibility,
  detailCover,
  addLabelColor,
  optionCoverData,
}) {
  const [labelVisibility, setLabelVisibility] = useState(false);

  const nameLabelVisibility = (toggle) => {
    setLabelVisibility(toggle);
  };

  return (
    <LabelsView
      handleLabelsVisibility={handleLabelsVisibility}
      detailCover={detailCover}
      nameLabelVisibility={nameLabelVisibility}
      labelVisibility={labelVisibility}
      addLabelColor={addLabelColor}
      optionCoverData={optionCoverData}
    />
  );
}

export default Labels;
