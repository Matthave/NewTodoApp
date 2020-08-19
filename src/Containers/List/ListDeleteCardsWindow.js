import React, { Component } from "react";
import ListDeleteCardsWindowView from "../../components/List/ListOptions/ListDeleteCardsWindow/ListDeleteCardsWindowView";

class ListDeleteCardsWindow extends Component {
  deleteCardsFromListFunc = (listId) => {
    const copyWholeList = [...this.props.wholeList];
    const currentList = copyWholeList.filter((list) => list.id === listId); //Finding currentList
    const everyCardId = []; //All card id container
    currentList[0].tasks.forEach((ele) => {
      everyCardId.push(ele.id);
    }); // Add card id to container
    everyCardId.forEach((ele) => {
      //Use deleteCard function to every card which id is in container
      this.props.deleteCard(listId, ele, "byButton");
    });
  };

  render() {
    const { listId } = this.props;
    return (
      <ListDeleteCardsWindowView
        deleteCardsFromListFunc={this.deleteCardsFromListFunc}
        listId={listId}
      ></ListDeleteCardsWindowView>
    );
  }
}

export default ListDeleteCardsWindow;
