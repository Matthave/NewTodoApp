import React, { Component } from "react";
import OptionCoverView from "../../components/OptionCover/OptionCoverView";

class OptionCover extends Component {
  state = {
    taskTitle: "",
  };

  componentDidMount() {
    this.setOptionCoverPostion(this.props.optionCoverData);
    this.setState({
      taskTitle: this.props.optionCoverData[0].taskTitle.taskName,
    });
  }

  setOptionCoverPostion = (taskData) => {
    const mainOffsetTop = document.querySelector(".main").offsetTop;
    const coverBox = document.querySelector(".cover_box");
    const coverBoxHeight = coverBox.offsetHeight;
    const scrollPosition = Math.floor(
      document.querySelector(".main").scrollLeft
    );

    const currentList = document.getElementById(`list${taskData[0].listId}`);
    const currentListScrollNow = currentList.scrollTop;

    //ListIndex, when list is moving to another place
    const listIndex = taskData[0].wholeList.findIndex(
      (element) => element.id === taskData[0].listId
    );

    const positionY =
      mainOffsetTop +
      taskData[0].top -
      currentListScrollNow +
      coverBoxHeight / 1.65;
    const positionX = 285 * listIndex + 18.5 - scrollPosition;

    //Top and Left BOX Position Calculate
    coverBox.style.top = `${positionY}px`;
    coverBox.style.left = `${positionX}px`;
  };

  taskTitleFeature = (e) => {
    this.setState({ taskTitle: e.target.value });
  };

  render() {
    const {
      optionCoverData,
      updateCard,
      deleteCard,
      handleLabelsVisibility,
      labelsVisibility,
      toggleLabelColorToCard,
      listOfAllBadges,
      listOfAllTasksId,
      labelColors,
      setLabelColors,
      addPriorityForCards,
      toggleDetailMove,
      wholeList,
      moveCardToAnotherList,
      listOfAllPriorityTasks,
      copyVisibility,
      dateVisibility,
      toggleDateVisibility,
      toggleTermToCard,
      listOfAllTerms,
      listOfAllTasksList,
    } = this.props;

    const { taskTitle } = this.state;

    const copyOfallBadges = [...listOfAllBadges];

    const matchedColorsToThisCard = copyOfallBadges.filter(
      (ele) => ele.id === optionCoverData[0].clickedCardId
    );

    const copyOfAllPriority = [...listOfAllPriorityTasks];
    const matchedPriority = copyOfAllPriority.filter(
      (ele) => ele === optionCoverData[0].clickedCardId
    );

    const copyOfAllTerms = [...listOfAllTerms];
    const matchedTerms = copyOfAllTerms.filter(
      (ele) => ele.id === optionCoverData[0].clickedCardId
    );

    const copyOfAllTasksList = [...listOfAllTasksList];
    const matchedTasksList = copyOfAllTasksList.filter(
      (ele) => ele.id === optionCoverData[0].clickedCardId
    );

    let unActiveTasks = 0;
    let totalTasks = 0;

    matchedTasksList.forEach((ele) => {
      totalTasks += ele.totalOfSubTasks;
      unActiveTasks += ele.unActiveSubtasks;
    });

    return (
      <>
        <OptionCoverView
          optionCoverData={optionCoverData}
          taskTitleFeature={this.taskTitleFeature}
          taskTitle={taskTitle}
          updateCard={updateCard}
          deleteCard={deleteCard}
          handleLabelsVisibility={handleLabelsVisibility}
          labelsVisibility={labelsVisibility}
          toggleLabelColorToCard={toggleLabelColorToCard}
          listOfAllBadges={listOfAllBadges}
          matchedColorsToThisCard={matchedColorsToThisCard}
          listOfAllTasksId={listOfAllTasksId}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          addPriorityForCards={addPriorityForCards}
          toggleDetailMove={toggleDetailMove}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          matchedPriority={matchedPriority}
          copyVisibility={copyVisibility}
          dateVisibility={dateVisibility}
          toggleDateVisibility={toggleDateVisibility}
          toggleTermToCard={toggleTermToCard}
          matchedTerms={matchedTerms}
          listOfAllTasksList={listOfAllTasksList}
          unActiveTasks={unActiveTasks}
          totalTasks={totalTasks}
        />
      </>
    );
  }
}

export default OptionCover;
