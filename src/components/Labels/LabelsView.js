import React from "react";
import LabelsNameColors from "./LabelView/LabelsNameColors";
import LabelsChooseColors from "./LabelView/LabelsChooseColors";

const labelColors = [
  "#61BD4F",
  "#F2D600",
  "#FF9F1A",
  "#EB5A46",
  "#C377E0",
  "#0079BF",
  "#00C2E0",
  "#51E898",
  "#FF78CB",
  "#344563",
  "#B3BAC5",
];

function LabelsView({
  handleLabelsVisibility,
  detailCover,
  nameLabelVisibility,
  labelVisibility,
}) {
  return (
    <>
      {labelVisibility ? (
        <LabelsNameColors
          nameLabelVisibility={nameLabelVisibility}
          labelColors={labelColors}
          detailCover={detailCover}
        />
      ) : (
        <LabelsChooseColors
          detailCover={detailCover}
          handleLabelsVisibility={handleLabelsVisibility}
          labelColors={labelColors}
          nameLabelVisibility={nameLabelVisibility}
        />
      )}
    </>
  );
}

export default LabelsView;
