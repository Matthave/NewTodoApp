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

    //ListIndex, when list is moving to another place
    const listIndex = taskData[0].wholeList.findIndex(
      (element) => element.id === taskData[0].listId
    );

    const positionY =
      mainOffsetTop + taskData[0].top - 8 + coverBoxHeight / 1.6;
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
      changeListInDetails,
      wholeList,
      moveCardToAnotherList,
      listOfAllPriorityTasks,
      copyVisibility,
      dateVisibility,
      toggleDateVisibility,
      toggleTermToCard,
      listOfAllTerms,
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
          changeListInDetails={changeListInDetails}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          matchedPriority={matchedPriority}
          copyVisibility={copyVisibility}
          dateVisibility={dateVisibility}
          toggleDateVisibility={toggleDateVisibility}
          toggleTermToCard={toggleTermToCard}
          matchedTerms={matchedTerms}
        />
      </>
    );
  }
}

export default OptionCover;
