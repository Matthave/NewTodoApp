import React, { useState, useEffect } from "react";
import OptionCoverView from "../../components/OptionCover/OptionCoverView";

function OptionCover({
  optionCoverData,
  updateCard,
  deleteCard,
  handleLabelsVisibility,
  labelsVisibility,
  toggleLabelColorToCard,
  listOfAllBadges,
}) {
  useEffect(() => {
    setOptionCoverPostion(optionCoverData);
  });

  const setOptionCoverPostion = (taskData) => {
    const mainOffsetTop = document.querySelector(".main").offsetTop;
    const coverBox = document.querySelector(".cover_box");
    const coverBoxHeight = coverBox.offsetHeight;
    const scrollPosition = Math.floor(
      document.querySelector(".main").scrollLeft
    );

    //ListIndex, when list is moving to another place
    const listIndex = taskData[0].wholeList.findIndex(
      (element) => element.id === taskData[0].listId
    );

    const positionY =
      mainOffsetTop + taskData[0].top - 10 + coverBoxHeight / 1.6;
    const positionX = 285 * listIndex + 18.5 - scrollPosition;

    //Top and Left BOX Position Calculate
    coverBox.style.top = `${positionY}px`;
    coverBox.style.left = `${positionX}px`;
  };

  const [taskTitle, setTaskTitle] = useState(
    optionCoverData[0].taskTitle.taskName
  );

  const taskTitleFeature = (e) => {
    setTaskTitle(e.target.value);
  };

  return (
    <>
      <OptionCoverView
        optionCoverData={optionCoverData}
        taskTitleFeature={taskTitleFeature}
        taskTitle={taskTitle}
        updateCard={updateCard}
        deleteCard={deleteCard}
        handleLabelsVisibility={handleLabelsVisibility}
        labelsVisibility={labelsVisibility}
        toggleLabelColorToCard={toggleLabelColorToCard}
        listOfAllBadges={listOfAllBadges}
      />
    </>
  );
}

export default OptionCover;
