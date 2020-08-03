import React from "react";
import LabelsNameColors from "./LabelView/LabelsNameColors";
import LabelsChooseColors from "./LabelView/LabelsChooseColors";

function LabelsView({
  handleLabelsVisibility,
  detailCover,
  optionCover,
  nameLabelVisibility,
  labelVisibility,
  toggleLabelColorToCard,
  taskId,
  generateCheckIcon,
  searchLabelColor,
  searchInputLabel,
  filteredColors,
  nameLabelInput,
  nameLabelInputValue,
  choosedSquar,
  saveNameLabel,
  currentSquarEdit,
}) {
  return (
    <>
      {labelVisibility ? (
        <LabelsNameColors
          nameLabelVisibility={nameLabelVisibility}
          filteredColors={filteredColors}
          detailCover={detailCover}
          nameLabelInput={nameLabelInput}
          nameLabelInputValue={nameLabelInputValue}
          choosedSquar={choosedSquar}
          saveNameLabel={saveNameLabel}
          currentSquarEdit={currentSquarEdit}
          optionCover={optionCover}
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
          optionCover={optionCover}
        />
      )}
    </>
  );
}

export default LabelsView;
