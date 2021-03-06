import React, { Component } from "react";
import ListView from "../../components/List/ListView";

class List extends Component {
  state = {
    inputTitle: "",
    showAddField: false,
    textAreaValue: "",
    selectedList: false,
    listVisiOptions: false,
    moveListVisibility: false,
    possibleMoveListVisi: false,
    copyListVisibilityState: false,
    moveCardsVisibilityState: false,
    deleteCardsVisibilityState: false,
  };

  componentDidMount() {
    document.addEventListener("click", this.hideAll);
    document.addEventListener("keypress", (e) =>
      this.addNewCardFeatureByKey(e, this.props.id, this.state.textAreaValue)
    );
    const main = document.querySelector(".main");
    const mainWidth = main.offsetWidth;
    main.scroll({
      left: mainWidth + 285 * (this.props.wholeList.length + 1),
      behavior: "smooth",
    });

    this.setState({
      inputTitle: this.props.title,
    });
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hideAll);
    document.removeEventListener("keypress", (e) =>
      this.addNewCardFeatureByKey(e, this.props.id, this.state.textAreaValue)
    );
    document.removeEventListener("mousemove", this.mouseMoveFeature, true);
    document.removeEventListener("mouseup", this.mouseUpFeature, true);
  }

  hideAll = (e) => {
    const searchingClass = e.target.className;
    if (
      searchingClass.includes("main") ||
      searchingClass.includes("input") ||
      searchingClass.includes("nav") ||
      searchingClass.includes("wrapList") ||
      searchingClass.includes("singleListWrap")
    ) {
      this.setState({
        showAddField: false,
        listVisiOptions: false,
        moveListVisibility: false,
      });
      this.props.showListHandle(false);
      this.props.setListInput("");
    }

    if (!searchingClass.includes("listOptions")) {
      this.setState({
        listVisiOptions: false,
        moveListVisibility: false,
        deleteCardsVisibilityState: false,
        moveCardsVisibilityState: false,
        copyListVisibilityState: false,
      });
    }
  };

  setListTitle = (e, listId) => {
    this.setState({
      inputTitle: e.target.value,
    });
    this.props.updateListTitle(e.target.value, listId);
  };

  swapAddFieldFeature = (buttonId) => {
    if (buttonId === "textArea") {
      this.setState({
        showAddField: true,
      });
    } else {
      this.setState({
        showAddField: false,
      });
    }
  };

  setTextAreaValue = (e) => {
    this.setState({
      textAreaValue: e.target.value,
    });
  };

  addNewCardFeature = (listId, textAreaValue, taskId) => {
    this.props.addNewCard(listId, textAreaValue, taskId);
    this.setState({
      showAddField: false,
      textAreaValue: "",
    });
  };

  addNewCardFeatureByKey = (e, listId, textAreaValue, taskId) => {
    if (e.which === 13 && this.state.showAddField) {
      e.preventDefault();
      this.props.addNewCard(listId, textAreaValue, taskId);
      this.setState({
        textAreaValue: "",
      });
    }
  };

  deleteCardFeatureByMove = (listId, taskId) => {
    this.props.replaceCard(listId, taskId);
    this.setState({
      textAreaValue: "",
    });
  };

  mouseDownFeature = (e) => {
    if (e.target.classList[0] !== "lists") return;
    this.setState({
      selectedList: true,
    });
    e.target.style.zIndex = 999;
    e.target.style.cursor = "grabbing";
    e.target.style.boxShadow = "0px 10px 20px 0.6px rgba(0,0,0,0.25)";

    document.addEventListener("mousemove", this.mouseMoveFeature, true);
    document.addEventListener("mouseup", this.mouseUpFeature, true);
  };

  mouseMoveFeature = (e) => {
    const list = document.getElementById(`list${this.props.id}`);
    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    if (this.state.selectedList && list.classList[0] === "lists") {
      list.style.left = `${e.clientX - 135}px`;
      list.style.top = `${e.clientY - 45}px`;
      list.style.position = "fixed";
      list.style.transform = "rotate(5deg)";

      const allBlankSpan = document.querySelectorAll(".frontBlankList");
      allBlankSpan.forEach((all) => {
        all.style.display = "none";
      });

      for (let i = 1; i < 10; i++) {
        if (e.pageX < 285 - scrollHeighFromMain) {
          allBlankSpan[0].style.width = "275px";
          allBlankSpan[0].style.height = "10px";
          allBlankSpan[0].style.backgroundColor = "rgba(0,0,0,0.15)";
          allBlankSpan[0].style.marginRight = "10px";
          allBlankSpan[0].style.borderRadius = "4px";
          allBlankSpan[0].style.display = "initial";
          allBlankSpan[0].style.position = "absolute";
          allBlankSpan[0].style.top = "-17.5px";
        } else if (
          e.pageX > 285 * i - scrollHeighFromMain &&
          e.pageX < 285 * i + 285 - scrollHeighFromMain &&
          this.props.wholeList.length >= i + 1
        ) {
          allBlankSpan[i].style.width = "275px";
          allBlankSpan[i].style.height = "10px";
          allBlankSpan[i].style.backgroundColor = "rgba(0,0,0,0.15)";
          allBlankSpan[i].style.marginRight = "10px";
          allBlankSpan[i].style.borderRadius = "4px";
          allBlankSpan[i].style.display = "initial";
          allBlankSpan[i].style.position = "absolute";
          allBlankSpan[i].style.top = "-17.5px";
        }
      }
    }
  };

  mouseUpFeature = (e) => {
    const list = document.getElementById(`list${this.props.id}`);
    if (list.classList[0] !== "lists") return;
    list.style.position = "static";
    list.style.cursor = "pointer";
    list.style.zIndex = null;
    list.style.boxShadow = null;
    list.style.transform = null;

    const { scrollPosition, wholeList } = this.props;
    const scrollHeighFromMain = Math.floor(scrollPosition);

    const allBlankSpan = document.querySelectorAll(".frontBlankList");
    allBlankSpan.forEach((all) => {
      all.style.width = "0";
    });

    const draggedListIndex = this.props.wholeList.findIndex(
      (list) => list.id === this.props.id
    );

    if (e.pageX < 285 - scrollHeighFromMain) {
      this.props.moveListToAnotherPlace(draggedListIndex, 0);
    }

    for (let i = 1; i < 10; i++) {
      if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        wholeList.length >= i + 1
      ) {
        this.props.moveListToAnotherPlace(draggedListIndex, i);
      }
    }
    document.removeEventListener("mousemove", this.mouseMoveFeature, true);
    document.removeEventListener("mouseup", this.mouseUpFeature, true);
    this.setState({
      selectedList: false,
    });
  };

  listOptionToggle = (e) => {
    //Toggle for general listOptions visibility
    this.setState({
      listVisiOptions: !this.state.listVisiOptions,
      moveListVisibility: false,
      possibleMoveListVisi: false,
      deleteCardsVisibilityState: false,
      moveCardsVisibilityState: false,
      copyListVisibilityState: false,
      showAddField: false,
    });
  };

  deleteList = (listId) => {
    const copyWholeList = [...this.props.wholeList];
    const filterWholeList = copyWholeList.filter((list) => list.id !== listId); //Delete current list by id
    const deletedList = copyWholeList.filter((list) => list.id === listId);
    const everyCardId = []; //All card id container
    deletedList[0].tasks.forEach((ele) => {
      everyCardId.push(ele.id); // Add card id to container
    });
    everyCardId.forEach((ele) => {
      //Use deleteCard function to every card which id is in container
      this.props.archiveCard(listId, ele);
    });
    this.props.setWholeList(filterWholeList);
  };

  addNewCardFromList = () => [
    //Just redirect to addCard textArea
    this.setState({
      listVisiOptions: false,
      showAddField: true,
    }),
  ];

  moveListVisibilityFunc = () => {
    //Toggle for moveList visibility component
    this.setState({
      listVisiOptions: false,
      moveListVisibility: !this.state.moveListVisibility,
    });
  };

  togglePossibleMoveForList = () => {
    //Toggle for POSSIBLE postition to move
    this.setState({
      possibleMoveListVisi: !this.state.possibleMoveListVisi,
    });
  };

  deleteCardsVisibility = () => {
    //Visibility toggle deleteCardsWindow
    this.setState({
      listVisiOptions: false,
      deleteCardsVisibilityState: !this.state.deleteCardsVisibilityState,
    });
  };

  moveCardsVisibility = () => {
    //Visibility toggle moveCardsWindow
    this.setState({
      listVisiOptions: false,
      moveCardsVisibilityState: !this.state.moveCardsVisibilityState,
    });
  };

  copyListVisibility = () => {
    this.setState({
      listVisiOptions: false,
      copyListVisibilityState: !this.state.copyListVisibilityState,
    });
  };

  render() {
    const {
      id,
      tasks,
      wholeList,
      archiveCard,
      replaceCard,
      setWholeList,
      scrollPosition,
      isDragAndDropTrue,
      visibilityOptionFunction,
      taskDetailsFunction,
      clearAllBlankSpan,
      hideFontSizeLabel,
      setHideFontSizeLabel,
      listOfAllTasksList,
      moveCardToAnotherList,
      addNewList,
      copyNewList,
      listOfAllCover,
      listOfAllComments,
      listOfAllTerms,
      listOfAllPriorityTasks,
      listOfAllBadges,
      listOfAllTasksId,
      slideMenuState,
      refresh,
      setRefresh,
    } = this.props;
    const {
      showAddField,
      textAreaValue,
      inputTitle,
      selectedList,
      listVisiOptions,
      moveListVisibility,
      possibleMoveListVisi,
      deleteCardsVisibilityState,
      moveCardsVisibilityState,
      copyListVisibilityState,
    } = this.state;

    return (
      <div className="singleListWrap">
        <div className="frontBlankList"></div>
        <ListView
          selectedList={selectedList}
          listOptionToggle={this.listOptionToggle}
          wholeList={wholeList}
          replaceCard={replaceCard}
          archiveCard={archiveCard}
          setWholeList={setWholeList}
          id={id}
          tasks={tasks}
          moveCardToAnotherList={moveCardToAnotherList}
          scrollPosition={scrollPosition}
          isDragAndDropTrue={isDragAndDropTrue}
          visibilityOptionFunction={visibilityOptionFunction}
          taskDetailsFunction={taskDetailsFunction}
          inputTitle={inputTitle}
          clearAllBlankSpan={clearAllBlankSpan}
          showAddField={showAddField}
          textAreaValue={textAreaValue}
          mouseDownFeature={this.mouseDownFeature}
          setTextAreaValue={this.setTextAreaValue}
          swapAddFieldFeature={this.swapAddFieldFeature}
          setListTitle={this.setListTitle}
          addNewCardFeature={this.addNewCardFeature}
          deleteCardFeatureByMove={this.deleteCardFeatureByMove}
          hideFontSizeLabel={hideFontSizeLabel}
          setHideFontSizeLabel={setHideFontSizeLabel}
          listOfAllTasksList={listOfAllTasksList}
          listVisiOptions={listVisiOptions}
          deleteList={this.deleteList}
          addNewCardFromList={this.addNewCardFromList}
          moveList={this.moveList}
          moveListVisibilityFunc={this.moveListVisibilityFunc}
          moveListVisibility={moveListVisibility}
          possibleMoveListVisi={possibleMoveListVisi}
          togglePossibleMoveForList={this.togglePossibleMoveForList}
          deleteCardsVisibility={this.deleteCardsVisibility}
          deleteCardsVisibilityState={deleteCardsVisibilityState}
          moveCardsVisibility={this.moveCardsVisibility}
          moveCardsVisibilityState={moveCardsVisibilityState}
          copyListVisibility={this.copyListVisibility}
          copyListVisibilityState={copyListVisibilityState}
          addNewList={addNewList}
          copyNewList={copyNewList}
          listOfAllCover={listOfAllCover}
          listOfAllComments={listOfAllComments}
          listOfAllTerms={listOfAllTerms}
          listOfAllPriorityTasks={listOfAllPriorityTasks}
          listOfAllBadges={listOfAllBadges}
          listOfAllTasksId={listOfAllTasksId}
          slideMenuState={slideMenuState}
          refresh={refresh}
          setRefresh={setRefresh}
        />
      </div>
    );
  }
}

export default List;
