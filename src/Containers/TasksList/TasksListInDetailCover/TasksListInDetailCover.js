import React, { Component } from "react";
import TasksListInDetailCoverView from "../../../components/TasksList/TasksListInDetailCoverView/TasksListInDetailCoverView";

class TasksListInDetailCover extends Component {
  state = {
    subTaskToggleVisi: false,
    subTaskInputValue: "",
  };

  subTaskToggle = () => {
    this.setState({
      subTaskToggleVisi: true,
    });
  };

  subTaskInupChange = (e) => {
    this.setState({
      subTaskInputValue: e.target.value,
    });
  };

  addSubTaskFunc = () => {
    const copyOfListTasks = this.props.listOfAllTasksList;
    const matchedList = copyOfListTasks.filter(
      (ele) =>
        ele.id === this.props.taskId && ele.listName === this.props.listName
    );

    const subTaskAlreadyExist = matchedList[0].subTasksList.filter(
      (ele) => ele.name === this.state.subTaskInputValue
    );
    if (subTaskAlreadyExist.length !== 0) {
      this.setState({
        subTaskToggleVisi: false,
        subTaskInputValue: "",
      });
      return;
    }

    matchedList[0].subTasksList.push({
      id: `${this.props.taskId}${this.state.subTaskInputValue}`,
      name: this.state.subTaskInputValue,
      active: true,
    });

    matchedList[0].activeSubtasks += 1;
    matchedList[0].totalOfSubTasks += 1;

    this.setState({
      subTaskToggleVisi: false,
      subTaskInputValue: "",
    });
  };

  makeThisTaskDone = (subTaskId, subTaskActive) => {
    const copyOfTasksList = this.props.listOfAllTasksList;
    const matchedTasksList = copyOfTasksList.filter(
      (ele) =>
        ele.id === this.props.taskId && ele.listName === this.props.listName
    );

    const matchedSubTaskList = matchedTasksList[0].subTasksList.filter(
      (ele) => ele.id === subTaskId
    );

    matchedSubTaskList[0].active = !subTaskActive;

    if (subTaskActive) {
      matchedTasksList[0].activeSubtasks -= 1;
      matchedTasksList[0].unActiveSubtasks += 1;
    } else {
      matchedTasksList[0].activeSubtasks += 1;
      matchedTasksList[0].unActiveSubtasks -= 1;
    }

    this.setState({
      subTaskToggleVisi: false,
      subTaskInputValue: "",
    });
  };

  render() {
    const {
      listOfAllTasksList,
      listName,
      progressbar,
      subTasksList,
      activeSubtasks,
      unActiveSubtasks,
      totalOfSubTasks,
    } = this.props;

    const { subTaskToggleVisi, subTaskInputValue } = this.state;
    return (
      <TasksListInDetailCoverView
        listOfAllTasksList={listOfAllTasksList}
        listName={listName}
        progressbar={progressbar}
        subTasksList={subTasksList}
        subTaskToggleVisi={subTaskToggleVisi}
        subTaskInputValue={subTaskInputValue}
        subTaskToggle={this.subTaskToggle}
        subTaskInupChange={this.subTaskInupChange}
        addSubTaskFunc={this.addSubTaskFunc}
        makeThisTaskDone={this.makeThisTaskDone}
        activeSubtasks={activeSubtasks}
        unActiveSubtasks={unActiveSubtasks}
        totalOfSubTasks={totalOfSubTasks}
      />
    );
  }
}

export default TasksListInDetailCover;
