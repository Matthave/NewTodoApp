import React from "react";
import LabelsView from "../../components/Labels/LabelsView";

function Labels({ labelsVisibility }) {
  return <>{labelsVisibility ? <LabelsView /> : null}</>;
}

export default Labels;
