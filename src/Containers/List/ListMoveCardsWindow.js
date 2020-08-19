import React, { Component } from "react";
import ListMoveCardsWindowView from "../../components/List/ListOptions/ListMoveCardsWindow/ListMoveCardsWindowView";

class ListMoveCardsWindow extends Component {
  moveCardsFromListFunc = (moveToListIndex) => {
    const { wholeList, listId, moveCardToAnotherList } = this.props;
    const moveFromList = wholeList.filter((ele) => ele.id === listId);
    const moveToListId = wholeList[moveToListIndex].id;

    const tasksToMove = [];

    moveFromList[0].tasks.forEach((ele) => {
      tasksToMove.push({ id: ele.id, taskName: ele.taskName });
    });

    tasksToMove.forEach((ele) => {
      moveCardToAnotherList(
        ele.taskName,
        moveFromList[0].id,
        ele.id,
        moveToListId,
        true
      );
    });
  };

  render() {
    const { wholeList, listId } = this.props;

    const availableLists = wholeList.map((ele, index) => {
      return {
        id: index,
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
