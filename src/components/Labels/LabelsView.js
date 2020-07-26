import React from "react";
import LabelsNameColors from "./LabelView/LabelsNameColors";
import LabelsChooseColors from "./LabelView/LabelsChooseColors";

function LabelsView({
  handleLabelsVisibility,
  detailCover,
  nameLabelVisibility,
  labelVisibility,
  toggleLabelColorToCard,
  taskId,
  generateCheckIcon,
  searchLabelColor,
  searchInputLabel,
  filteredColors,
}) {
  return (
    <>
      {labelVisibility ? (
        <LabelsNameColors
          nameLabelVisibility={nameLabelVisibility}
          filteredColors={filteredColors}
          detailCover={detailCover}
        />
      ) : (
        <LabelsChooseColors
          detailCover={detailCover}
          handleLabelsVisibility={handleLabelsVisibility}
          filteredColors={filteredColors}
          nameLabelVisibility={nameLabelVisibility}
          toggleLabelColorToCard={toggleLabelColorToCard}
          taskId={taskId}
          generateCheckIcon={generateCheckIcon}
          searchLabelColor={searchLabelColor}
          searchInputLabel={searchInputLabel}
        />
      )}
    </>
  );
}

export default LabelsView;
