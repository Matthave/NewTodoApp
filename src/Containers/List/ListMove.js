import React, { Component } from "react";
import ListMoveView from "../../components/List/ListOptions/ListMove/ListMoveView";

class ListMove extends Component {
  setThisPlaceToDiv = (e) => {
    const availableDiv = document.querySelector(".available");
    availableDiv.textContent = e.target.textContent;
  };

  moveThisList = () => {
    const availableDiv = document.querySelector(".available").textContent;
    if (availableDiv !== "Select list place") {
      const copyWholeList = [...this.props.wholeList];
      const currentListIndex = copyWholeList.findIndex(
        (ele) => ele.id === this.props.listId
      );

      const currentList = copyWholeList.find(
        (ele) => ele.id === this.props.listId
      );

      copyWholeList.splice(currentListIndex, 1); //Delete list from current place
      copyWholeList.splice(availableDiv - 1, 0, currentList); //Delete nothing from according place, but put there preview deleted list

      this.props.setWholeList(copyWholeList);
      this.props.moveListVisibilityFunc();
    }
  };

  render() {
    const {
      togglePossibleMoveForList,
      possibleMoveListVisi,
      wholeList,
      listId,
    } = this.props;

    const availableLists = wholeList.map((ele, index) => {
      return {
        list: index + 1,
        currentList: `${ele.id === this.props.listId}`,
      };
    });

    return (
      <ListMoveView
        togglePossibleMoveForList={togglePossibleMoveForList}
        possibleMoveListVisi={possibleMoveListVisi}
        availableLists={availableLists}
        setThisPlaceToDiv={this.setThisPlaceToDiv}
        moveThisList={this.moveThisList}
        listId={listId}
      />
    );
  }
}

export default ListMove;
