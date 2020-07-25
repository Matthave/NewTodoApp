import React, { useState } from "react";
import LabelsView from "../../components/Labels/LabelsView";

function Labels({
  handleLabelsVisibility,
  detailCover,
  addLabelColor,
  optionCoverData,
  toggleLabelColorToCard,
  taskId,
  listOfAllBadges,
}) {
  const [labelVisibility, setLabelVisibility] = useState(false);

  const nameLabelVisibility = (toggle) => {
    setLabelVisibility(toggle);
  };

  const generateCheckIcon = () => {
    const matchedBadges = listOfAllBadges.filter((ele) => ele.id === taskId);
    if (matchedBadges.length !== 0) {
      matchedBadges.forEach((element) => {
        const currentCheckIcon = document.getElementById(
          `${element.color}Check`
        );
        currentCheckIcon.style.display = "block";
      });
    }
  };

  return (
    <LabelsView
      handleLabelsVisibility={handleLabelsVisibility}
      detailCover={detailCover}
      nameLabelVisibility={nameLabelVisibility}
      labelVisibility={labelVisibility}
      addLabelColor={addLabelColor}
      optionCoverData={optionCoverData}
      toggleLabelColorToCard={toggleLabelColorToCard}
      taskId={taskId}
      generateCheckIcon={generateCheckIcon}
    />
  );
}

export default Labels;
