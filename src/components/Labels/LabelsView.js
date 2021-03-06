import React from "react";
import LabelsNameColors from "./LabelView/LabelsNameColors";
import LabelsChooseColors from "./LabelView/LabelsChooseColors";

function LabelsView({
  toggleCurrentListVisiFunc,
  detailCover,
  optionCover,
  nameLabelVisibilityFunc,
  colorNameWindowVisi,
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
  menuSlideClasses,
}) {
  return (
    <>
      {colorNameWindowVisi ? (
        <LabelsNameColors
          nameLabelVisibilityFunc={nameLabelVisibilityFunc}
          filteredColors={filteredColors}
          detailCover={detailCover}
          nameLabelInput={nameLabelInput}
          nameLabelInputValue={nameLabelInputValue}
          choosedSquar={choosedSquar}
          saveNameLabel={saveNameLabel}
          currentSquarEdit={currentSquarEdit}
          optionCover={optionCover}
          menuSlideClasses={menuSlideClasses}
        />
      ) : (
        <LabelsChooseColors
          detailCover={detailCover}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          filteredColors={filteredColors}
          nameLabelVisibilityFunc={nameLabelVisibilityFunc}
          toggleLabelColorToCard={toggleLabelColorToCard}
          taskId={taskId}
          generateCheckIcon={generateCheckIcon}
          searchLabelColor={searchLabelColor}
          searchInputLabel={searchInputLabel}
          optionCover={optionCover}
          menuSlideClasses={menuSlideClasses}
        />
      )}
    </>
  );
}

export default LabelsView;
