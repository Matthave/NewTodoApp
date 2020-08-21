import React, { Component } from "react";
import TasksListView from "../../components/TasksList/TasksListView";

class TasksList extends Component {
  state = {
    tasksListTitle: "Tasks List",
  };

  changeTasksListTitle = (e) => {
    this.setState({
      tasksListTitle: e.target.value,
    });
  };

  addTasksList = () => {
    const copyOfListTasks = this.props.listOfAllTasksList;
    const taskAlreadyExist = copyOfListTasks.filter(
      (ele) =>
        ele.id === this.props.taskId &&
        ele.listName === this.state.tasksListTitle
    );
    if (taskAlreadyExist.length !== 0 || this.state.tasksListTitle === "")
      return;
    this.props.setListOfTasksList([
      ...this.props.listOfAllTasksList,
      {
        id: this.props.taskId,
        listName: this.state.tasksListTitle,
        subTasksList: [],
        activeSubtasks: 0,
        unActiveSubtasks: 0,
        totalOfSubTasks: 0,
      },
    ]);
    this.props.toggleCurrentListVisiFunc("tasksListVisi"); // Close this tasksList window
  };

  render() {
    const { tasksListTitle } = this.state;
    const { toggleCurrentListVisiFunc } = this.props;
    return (
      <TasksListView
        changeTasksListTitle={this.changeTasksListTitle}
        tasksListTitle={tasksListTitle}
        addTasksList={this.addTasksList}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
      />
    );
  }
}

export default TasksList;
