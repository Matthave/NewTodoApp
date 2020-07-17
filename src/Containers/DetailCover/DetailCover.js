import React, { useState } from "react";
import DetailCoverView from "../../components/DetailCover/DetailCoverView/DetailCoverView";

const DetailCover = ({
  taskName,
  taskTitleList,
  updateCard,
  changeListInDetails,
  visibilityChangeListInDetails,
  wholeList,
  moveCardToAnotherList,
}) => {
  const [taskTitle, setTaskTitle] = useState(taskName);

  const taskTitleFeature = (e) => {
    setTaskTitle(e.target.value);
  };
  return (
    <DetailCoverView
      updateCard={updateCard}
      taskTitle={taskTitle}
      taskTitleFeature={taskTitleFeature}
      changeListInDetails={changeListInDetails}
      taskTitleList={taskTitleList}
      visibilityChangeListInDetails={visibilityChangeListInDetails}
      wholeList={wholeList}
      moveCardToAnotherList={moveCardToAnotherList}
    />
  );
};

export default DetailCover;
