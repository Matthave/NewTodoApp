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
    if (taskAlreadyExist.length !== 0) return;
    this.props.setListOfTasksList([
      ...this.props.listOfAllTasksList,
      {
        id: this.props.taskId,
        listName: this.state.tasksListTitle,
        progressBar: "",
        subTasksList: [],
        activeSubtasks: 0,
        unActiveSubtasks: 0,
        totalOfSubTasks: 0,
      },
    ]);
  };

  render() {
    const { tasksListTitle } = this.state;
    return (
      <TasksListView
        changeTasksListTitle={this.changeTasksListTitle}
        tasksListTitle={tasksListTitle}
        addTasksList={this.addTasksList}
      />
    );
  }
}

export default TasksList;
