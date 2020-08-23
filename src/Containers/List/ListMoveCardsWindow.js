import React, { Component } from "react";
import ListMoveCardsWindowView from "../../components/List/ListOptions/ListMoveCardsWindow/ListMoveCardsWindowView";

class ListMoveCardsWindow extends Component {
  moveCardsFromListFunc = (moveToListIndex) => {
    const moveFromListIndex = this.props.listId;

    const containerForTasks = [];
    this.props.tasks.forEach((task) => {
      containerForTasks.push({
        id: task.id,
        taskName: task.taskName,
        moveTo: moveToListIndex,
        moveFrom: moveFromListIndex,
      });
    });

    containerForTasks.forEach((task) => {
      this.props.moveCardToAnotherList(
        task.id,
        task.taskName,
        task.moveTo,
        task.moveFrom
      );
    });
  };

  render() {
    const { wholeList, listId } = this.props;

    const availableLists = wholeList.map((ele, index) => {
      return {
        id: ele.id,
        list: index + 1,
        title: ele.title,
        currentList: `${ele.id === listId}`,
      };
    });
    return (
      <ListMoveCardsWindowView
        availableLists={availableLists}
        moveCardsFromListFunc={this.moveCardsFromListFunc}
      ></ListMoveCardsWindowView>
    );
  }
}

export default ListMoveCardsWindow;
