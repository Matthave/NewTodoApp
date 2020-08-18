import React, { Component } from "react";
import ListDeleteCardsWindowView from "../../components/List/ListOptions/ListDeleteCardsWindow/ListDeleteCardsWindowView";

class ListDeleteCardsWindow extends Component {
  render() {
    const { deleteCardsFromListFunc, listId } = this.props;
    return (
      <ListDeleteCardsWindowView
        deleteCardsFromListFunc={deleteCardsFromListFunc}
        listId={listId}
      ></ListDeleteCardsWindowView>
    );
  }
}

export default ListDeleteCardsWindow;
