import React, { useState, useEffect } from "react";
import CoreFieldView from "../../components/CoreField/CoreFieldView";

const MainField = ({
  wholeList,
  listOption,
  addNewCard,
  replaceCard,
  archiveCard,
  addNewList,
  copyNewList,
  moveCardToAnotherList,
  updateListTitle,
  visibilityOptionFunction,
  taskDetailsFunction,
  moveListToAnotherPlace,
  clearAllBlankSpan,
  hideFontSizeLabel,
  setHideFontSizeLabel,
  listOfAllTasksList,
  setWholeList,
  listOfAllCover,
  listOfAllComments,
  listOfAllTerms,
  listOfAllPriorityTasks,
  listOfAllBadges,
  listOfAllTasksId,
  slideMenuState,
  refresh,
  setRefresh,
}) => {
  const [showList, showListHandle] = useState(false);
  const [scrollPosition, updatedScrollPosition] = useState(0);
  const [isDragDropTrue, isDragDropTrueFeature] = useState("");

  useEffect(() => {
    document.addEventListener("click", function (e) {
      const searchingClass = e.target.className;
      if (!searchingClass.includes("addList")) {
        showListHandle(false);
      }
    });
  });

  const showAddListHandle = () => {
    showListHandle(true);
  };

  const [listInputValue, setListInput] = useState("");

  const listInputHandle = (e) => {
    setListInput(e.target.value);
  };

  const addNewListByKey = (e) => {
    if (e.which === 13 && showList) {
      addNewList(listInputValue);
      showListHandle(true);
      setListInput("");
    }
  };

  const addNewListByButton = () => {
    addNewList(listInputValue);
    showListHandle(false);
    setListInput("");
  };

  const scroll = (e) => {
    if (!e.target.className.includes("lists")) {
      const scrollPosition = e.target.scrollLeft;
      updatedScrollPosition(scrollPosition);
    }
  };

  const mousePositionX = (e) => {
    const main = document.querySelector(".main");
    const mainWidth = main.offsetWidth;
    const mousePositionX = e.clientX;
    if (mousePositionX <= 75 && isDragDropTrue) {
      main.scroll({
        left: 0,
        behavior: "smooth",
      });
    }

    if (mousePositionX >= mainWidth - 75 && isDragDropTrue) {
      main.scroll({
        left: mainWidth + 285 * (wholeList.length + 1),
        behavior: "smooth",
      });
    }
  };

  const isDragAndDropTrue = (isTrue) => {
    isDragDropTrueFeature(isTrue);
  };

  return (
    <CoreFieldView
      scroll={scroll}
      mousePositionX={mousePositionX}
      wholeList={wholeList}
      listOption={listOption}
      addNewCard={addNewCard}
      replaceCard={replaceCard}
      archiveCard={archiveCard}
      showListHandle={showListHandle}
      setListInput={setListInput}
      scrollPosition={scrollPosition}
      isDragAndDropTrue={isDragAndDropTrue}
      visibilityOptionFunction={visibilityOptionFunction}
      taskDetailsFunction={taskDetailsFunction}
      updateListTitle={updateListTitle}
      moveListToAnotherPlace={moveListToAnotherPlace}
      clearAllBlankSpan={clearAllBlankSpan}
      showList={showList}
      showAddListHandle={showAddListHandle}
      listInputHandle={listInputHandle}
      listInputValue={listInputValue}
      addNewList={addNewList}
      addNewListByButton={addNewListByButton}
      addNewListByKey={addNewListByKey}
      hideFontSizeLabel={hideFontSizeLabel}
      setHideFontSizeLabel={setHideFontSizeLabel}
      listOfAllTasksList={listOfAllTasksList}
      setWholeList={setWholeList}
      moveCardToAnotherList={moveCardToAnotherList}
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
  );
};

export default MainField;
