import React, { Component } from "react";
import OptionCoverView from "../../components/OptionCover/OptionCoverView";

class OptionCover extends Component {
  state = {
    taskTitle: "",
    moveToAnotherListVisi: false,
    copyCardVisi: false,
    labelVisi: false,
    datePickerVisi: false,
    reloadOptionCoverCompState: false,
  };

  componentDidMount() {
    this.setOptionCoverPostion(this.props.optionCoverData);
    this.setState({
      taskTitle: this.props.optionCoverData[0].taskTitle.taskName,
    });
  }

  addPriorityForCards = (e, cardId, byElement) => {
    const { listOfAllPriorityTasks, setListOfPriority } = this.props;
    if (!listOfAllPriorityTasks.includes(cardId)) {
      setListOfPriority([...listOfAllPriorityTasks, cardId]);
      const clickedCardDOM = document.getElementById(cardId);
      clickedCardDOM.style.border = "1px solid #db4a36";
      e.target.style.color = "#db4a36";
      e.target.children[0].style.color = "#db4a36";
    } else if (listOfAllPriorityTasks.includes(cardId)) {
      const indexToDelete = listOfAllPriorityTasks.findIndex(
        (ele) => ele === cardId
      );
      listOfAllPriorityTasks.splice(indexToDelete, 1);
      const clickedCardDOM = document.getElementById(cardId);
      clickedCardDOM.style.border = null;
      if (byElement === "detailCover") {
        e.target.style.color = "#42516e";
        e.target.children[0].style.color = "#42516e";
      } else {
        e.target.style.color = "#fff";
        e.target.children[0].style.color = "#fff";
      }
    }
  };

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
      currentListScrollNow -
      25 +
      coverBoxHeight / 1.65;
    const positionX = 285 * listIndex + 18.5 - scrollPosition;

    //Top and Left BOX Position Calculate
    coverBox.style.top = `${positionY}px`;
    coverBox.style.left = `${positionX}px`;
  };

  taskTitleFeature = (e) => {
    this.setState({ taskTitle: e.target.value });
  };

  toggleCurrentListVisiFunc = (nameVisi) => {
    this.setState({ [nameVisi]: !this.state[nameVisi] });
  };

  closeAllListsWindowsFunc = () => {
    this.setState({
      moveToAnotherListVisi: false,
      copyCardVisi: false,
      labelVisi: false,
      datePickerVisi: false,
    });
  };

  reloadCoverComponentFunc = () => {
    this.setState({
      reloadOptionCoverCompState: !this.state.reloadOptionCoverCompState,
    });
  };

  render() {
    const {
      optionCoverData,
      updateCard,
      deleteCard,
      listOfAllBadges,
      listOfAllTasksId,
      labelColors,
      setLabelColors,
      wholeList,
      moveCardToAnotherList,
      listOfAllPriorityTasks,
      toggleDateVisibility,
      toggleTermToCard,
      listOfAllTerms,
      listOfAllTasksList,
      listOfAllComments,
      setListOfallTerms,
      addNewCard,
    } = this.props;

    const {
      taskTitle,
      moveToAnotherListVisi,
      copyCardVisi,
      labelVisi,
      datePickerVisi,
    } = this.state;

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
          listOfAllBadges={listOfAllBadges}
          matchedColorsToThisCard={matchedColorsToThisCard}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          addPriorityForCards={this.addPriorityForCards}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          matchedPriority={matchedPriority}
          toggleDateVisibility={toggleDateVisibility}
          toggleTermToCard={toggleTermToCard}
          matchedTerms={matchedTerms}
          unActiveTasks={unActiveTasks}
          totalTasks={totalTasks}
          listOfAllTasksId={listOfAllTasksId}
          listOfAllTasksList={listOfAllTasksList}
          closeAllListsWindowsFunc={this.closeAllListsWindowsFunc}
          toggleCurrentListVisiFunc={this.toggleCurrentListVisiFunc}
          labelVisi={labelVisi}
          moveToAnotherListVisi={moveToAnotherListVisi}
          datePickerVisi={datePickerVisi}
          copyCardVisi={copyCardVisi}
          setListOfallTerms={setListOfallTerms}
          listOfAllTerms={listOfAllTerms}
          listOfAllComments={listOfAllComments}
          reloadCoverComponentFunc={this.reloadCoverComponentFunc}
          addNewCard={addNewCard}
        />
      </>
    );
  }
}

export default OptionCover;
