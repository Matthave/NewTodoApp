import React, { Component } from "react";
import SubtasksOptionView from "../../../components/TasksList/SubtasksOptionView/SubtasksOptionView";
// import PropTypes from 'prop-types'

class SubtasksOption extends Component {
  subTaskToCard = () => {
    this.props.addNewCard(
      this.props.currentListId,
      this.props.subTaskNameOptionClicked
    );

    this.subTaskDelete();
  };

  subTaskDelete = () => {
    //Find current displaying tasksList
    const matchedTasksList = this.props.listOfAllTasksList.filter(
      (ele) =>
        ele.id === this.props.taskId && ele.listName === this.props.listName
    );

    //Find proper tasks in above list, which is clicked
    const subTaskIndex = matchedTasksList[0].subTasksList.findIndex(
      (ele) => ele.name === this.props.subTaskNameOptionClicked
    );

    const subTaskClicked = matchedTasksList[0].subTasksList.filter(
      (ele) => ele.name === this.props.subTaskNameOptionClicked
    );

    //Delete it
    matchedTasksList[0].subTasksList.splice(subTaskIndex, 1);

    //Updated active and total number of subTasks in current list
    if (subTaskClicked[0].active) {
      matchedTasksList[0].activeSubtasks -= 1;
    } else {
      matchedTasksList[0].unActiveSubtasks -= 1;
    }

    matchedTasksList[0].totalOfSubTasks -= 1;

    this.props.subTaskOptionsVisiToggle("");
  };

  render() {
    return (
      <SubtasksOptionView
        subTaskToCard={this.subTaskToCard}
        subTaskDelete={this.subTaskDelete}
        subTaskOptionsVisiToggle={this.props.subTaskOptionsVisiToggle}
      />
    );
  }
}

export default SubtasksOption;
