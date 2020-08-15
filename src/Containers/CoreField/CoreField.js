import React, { useState } from "react";
import CoreFieldView from "../../components/CoreField/CoreFieldView";

const MainField = ({
  wholeList,
  listOption,
  addNewCard,
  deleteCard,
  addNewList,
  updateListTitle,
  elementHoverEnter,
  elementHoverLeave,
  visibilityOptionFunction,
  taskDetailsFunction,
  moveListToAnotherPlace,
  clearAllBlankSpan,
  hideFontSizeLabel,
  setHideFontSizeLabel,
  listOfAllTasksList,
  setWholeList,
}) => {
  const [showList, showListHandle] = useState(false);
  const [scrollPosition, updatedScrollPosition] = useState(0);
  const [isDragDropTrue, isDragDropTrueFeature] = useState("");

  const showAddListHandle = () => {
    showListHandle(true);
  };

  const [listInputValue, setListInput] = useState("");

  const listInputHandle = (e) => {
    setListInput(e.target.value);
  };

  const addNewListByKey = (e) => {
    if (e.which === 13 && showList) {
      addNewList(listInputValue, showListHandle, setListInput);
      showListHandle(true);
    }
  };

  const scroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    updatedScrollPosition(scrollPosition);
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
      deleteCard={deleteCard}
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
      addNewListByKey={addNewListByKey}
      elementHoverEnter={elementHoverEnter}
      elementHoverLeave={elementHoverLeave}
      hideFontSizeLabel={hideFontSizeLabel}
      setHideFontSizeLabel={setHideFontSizeLabel}
      listOfAllTasksList={listOfAllTasksList}
      setWholeList={setWholeList}
    />
  );
};

export default MainField;
