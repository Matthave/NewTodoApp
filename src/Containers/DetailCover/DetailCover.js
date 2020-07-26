import React, { useState } from "react";
import DetailCoverView from "../../components/DetailCover/DetailCoverView/DetailCoverView";

const DetailCover = ({
  taskName,
  taskId,
  taskTitleList,
  updateCard,
  deleteCard,
  idUpdatedList,
  changeListInDetails,
  visibilityChangeListInDetails,
  wholeList,
  moveCardToAnotherList,
  labelsVisibility,
  handleLabelsVisibility,
  toggleLabelColorToCard,
  listOfAllBadges,
}) => {
  const [taskTitle, setTaskTitle] = useState(taskName);

  const taskTitleFeature = (e) => {
    setTaskTitle(e.target.value);
  };
  return (
    <>
      <DetailCoverView
        updateCard={updateCard}
        taskTitle={taskTitle}
        taskTitleFeature={taskTitleFeature}
        changeListInDetails={changeListInDetails}
        taskTitleList={taskTitleList}
        visibilityChangeListInDetails={visibilityChangeListInDetails}
        wholeList={wholeList}
        moveCardToAnotherList={moveCardToAnotherList}
        labelsVisibility={labelsVisibility}
        handleLabelsVisibility={handleLabelsVisibility}
        deleteCard={deleteCard}
        idUpdatedList={idUpdatedList}
        taskId={taskId}
        toggleLabelColorToCard={toggleLabelColorToCard}
        listOfAllBadges={listOfAllBadges}
      />
    </>
  );
};

export default DetailCover;
