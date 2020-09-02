import React, { Component } from "react";
import TasksListInDetailCoverView from "../../../components/TasksList/TasksListInDetailCoverView/TasksListInDetailCoverView";

class TasksListInDetailCover extends Component {
  state = {
    subTaskToggleVisi: false,
    subTaskNameOptionClicked: "",
    subTaskInputValue: "",
    toggleForUpdate: false,
    subTaskOptionsVisi: false,
  };

  componentDidMount() {
    document.addEventListener("click", (e) => this.subTaskOptionsHideFunc(e));
  }

  subTaskToggle = () => {
    //Handler for input and btn visibility
    this.setState({
      subTaskToggleVisi: true,
    });
  };

  subTaskInupChange = (e) => {
    //Handler for input onChange
    this.setState({
      subTaskInputValue: e.target.value,
    });
  };

  addSubTaskFunc = (e) => {
    if (e.target.className.includes("subTaskBtn") || e.which === 13) {
      const copyOfListTasks = this.props.listOfAllTasksList;
      const matchedList = copyOfListTasks.filter(
        (ele) =>
          ele.id === this.props.taskId && ele.listName === this.props.listName
      );

      const subTaskAlreadyExist = matchedList[0].subTasksList.filter(
        (ele) => ele.name === this.state.subTaskInputValue
      );

      //If subTask already exist or this is blank subTask
      if (
        subTaskAlreadyExist.length !== 0 ||
        this.state.subTaskInputValue === ""
      ) {
        const warnningSpan = document.querySelector(".subTaskWarnSpan");
        warnningSpan.style.opacity = 1;
        this.setState({
          subTaskInputValue: "",
        });
        return;
      }

      //If subTask is right composed just add it to the list of subtask in this card and correct tasksList
      matchedList[0].subTasksList.push({
        id: `${this.props.taskId}${this.state.subTaskInputValue}`,
        name: this.state.subTaskInputValue,
        active: true,
      });

      //Updated data about subtask on this card and current tasksList
      matchedList[0].activeSubtasks += 1;
      matchedList[0].totalOfSubTasks += 1;
      //This is for refresh page durring add or checking subTask
      this.props.closeAllListsWindowsFunc();
      this.setState({
        subTaskToggleVisi: false,
        subTaskInputValue: "",
      });
    }
  };

  deleteTasksList = (listName, taskId) => {
    //Find proper tasksList in array of all TasksList
    const copyOfTasksList = this.props.listOfAllTasksList;
    const matchedTasksListIndex = copyOfTasksList.findIndex(
      (ele) => ele.id === taskId && ele.listName === listName
    );
    //Delete it
    this.props.listOfAllTasksList.splice(matchedTasksListIndex, 1);
    //Refresh it
    this.props.closeAllListsWindowsFunc();
  };

  makeThisTaskDone = (subTaskId, subTaskActive) => {
    //Finding data about current tasksList and proper subTasks
    const copyOfTasksList = this.props.listOfAllTasksList;
    const matchedTasksList = copyOfTasksList.filter(
      (ele) =>
        ele.id === this.props.taskId && ele.listName === this.props.listName
    );

    const matchedSubTaskList = matchedTasksList[0].subTasksList.filter(
      (ele) => ele.id === subTaskId
    );

    matchedSubTaskList[0].active = !subTaskActive;

    //Updated data about active and unactive subtask
    if (subTaskActive) {
      matchedTasksList[0].activeSubtasks -= 1;
      matchedTasksList[0].unActiveSubtasks += 1;
    } else {
      matchedTasksList[0].activeSubtasks += 1;
      matchedTasksList[0].unActiveSubtasks -= 1;
    }
    //This is for refresh page durring add or checking subTask
    this.props.closeAllListsWindowsFunc();
    this.setState({
      subTaskToggleVisi: false,
      subTaskInputValue: "",
    });
  };

  subTaskOptionsVisiToggle = (subTaskName) => {
    this.props.closeAllListsWindowsFunc();
    this.setState({
      subTaskOptionsVisi: !this.state.subTaskOptionsVisi,
      subTaskNameOptionClicked: subTaskName,
    });
  };

  subTaskOptionsHideFunc = (e) => {
    if (e.target.className.includes("detailCoverClose"))
      this.setState({ subTaskOptionsVisi: false });
  };

  render() {
    const {
      listName,
      taskId,
      subTasksList,
      unActiveSubtasks,
      totalOfSubTasks,
      addNewCard,
      currentListId,
      listOfAllTasksList,
    } = this.props;

    const {
      subTaskToggleVisi,
      subTaskInputValue,
      subTaskOptionsVisi,
      subTaskNameOptionClicked,
    } = this.state;
    return (
      <TasksListInDetailCoverView
        listName={listName}
        taskId={taskId}
        subTasksList={subTasksList}
        subTaskToggleVisi={subTaskToggleVisi}
        subTaskInputValue={subTaskInputValue}
        subTaskToggle={this.subTaskToggle}
        subTaskInupChange={this.subTaskInupChange}
        addSubTaskFunc={this.addSubTaskFunc}
        makeThisTaskDone={this.makeThisTaskDone}
        unActiveSubtasks={unActiveSubtasks}
        totalOfSubTasks={totalOfSubTasks}
        deleteTasksList={this.deleteTasksList}
        subTaskOptionsVisiToggle={this.subTaskOptionsVisiToggle}
        subTaskOptionsVisi={subTaskOptionsVisi}
        addNewCard={addNewCard}
        currentListId={currentListId}
        listOfAllTasksList={listOfAllTasksList}
        subTaskNameOptionClicked={subTaskNameOptionClicked}
      />
    );
  }
}

export default TasksListInDetailCover;
