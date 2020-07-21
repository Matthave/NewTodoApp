import React, { useState, useEffect } from "react";
import Navigations from "../Naviagtion/Navigations";
import CoreField from "../CoreField/CoreField";
import ThemeField from "../ThemeField/ThemeField";
import OptionCover from "../OptionCover/OptionCover";
import DetailCover from "../DetailCover/DetailCover";
import Color from "color";

const Main = () => {
  const [showThemeOption, showThemeOptionFunction] = useState(false);
  const [numberOfTask, numberOfTaskFunction] = useState(0);
  const [whichColor, setWhichColor] = useState(["#76ce8e"]);
  const [visibilityOptionsCover, setVisibilityOptionCover] = useState(false);
  const [optionCoverData, setOptionCoverData] = useState("");
  const [visibilityTaskDetails, setVisibilityTaskDetails] = useState(false);
  const [taskTitleList, setTaskTitleList] = useState();
  const [taskName, setTaskName] = useState("");
  const [idUpdatedList, setIdUpdatedList] = useState();
  const [visibilityChangeListInDetails, setChangeListInDetails] = useState(
    false
  );
  const [labelsVisibility, setLabelsVisibility] = useState(false);
  const [
    labelsVisibilityDetailsComp,
    setLabelsVisibilityDetailsComp,
  ] = useState(false);

  useEffect(() => {
    document.addEventListener("click", hideTheme);
  });

  const [wholeList, setWholeList] = useState([
    {
      id: 0,
      title: "To Do",
      tasks: [],
      activeList: false,
    },
    {
      id: 1,
      title: "In Progress",
      tasks: [],
      activeList: false,
    },
    {
      id: 2,
      title: "Finished",
      tasks: [],
      activeList: false,
    },
  ]);

  const hideTheme = (e) => {
    const searchingClass = e.target.className;
    if (
      searchingClass.includes("main") ||
      searchingClass.includes("input") ||
      searchingClass.includes("item")
    ) {
      showThemeOptionFunction(false);
    }

    if (!searchingClass.includes("suggested")) {
      setChangeListInDetails(false);
    }

    if (
      searchingClass.includes("coverOption") ||
      searchingClass.includes("cover_box")
    ) {
      setVisibilityOptionCover(false);
      setLabelsVisibility(false);
    }

    if (searchingClass.includes("cover_textArea")) {
      setLabelsVisibility(false);
    }

    if (!searchingClass.includes("label")) {
      setLabelsVisibilityDetailsComp(false);
    }
  };

  const listOption = (listId) => {
    const copyWholeList = [...wholeList];
    const filterWholeList = copyWholeList.filter((list) => list.id !== listId);

    filterWholeList.sort(function (a, b) {
      return a.id - b.id;
    });

    setWholeList(filterWholeList);
  };

  const addNewCard = (listId, newTask) => {
    const correctList = wholeList.filter((list) => list.id === listId);

    if (correctList[0].tasks.includes(newTask)) return;
    if (newTask.length < 2) return;
    correctList[0].tasks.push(newTask);
    numberOfTaskFunction(numberOfTask + 1);
  };

  const deleteCard = (title, listId) => {
    const correctList = wholeList.filter((list) => list.id === listId);

    const taskIndex = correctList[0].tasks.findIndex(
      (element) => element === title
    );

    correctList[0].tasks.splice(taskIndex, 1);
    numberOfTaskFunction(numberOfTask - 1);
    setVisibilityOptionCover(false);
    setVisibilityTaskDetails(false);
  };

  const addNewList = (listInputValue, showListHandle, setListInput) => {
    showListHandle(false);
    setListInput("");
    if (listInputValue === "") return;
    if (listInputValue.length < 2) return;

    let biggerThanLast = [];
    wholeList.forEach((list) => biggerThanLast.push(list.id));
    const theBiggest = Math.max(...biggerThanLast);
    setWholeList([
      ...wholeList,
      {
        title: listInputValue,
        id: `${wholeList.length === 0 ? 0 : theBiggest + 1}`,
        tasks: [],
        activeInput: false,
      },
    ]);
  };

  const updateListTitle = (newTitle, listId) => {
    const updatedList = wholeList.filter((list) => list.id === listId);
    updatedList[0].title = newTitle;
  };

  const elementHoverEnter = (e) => {
    const arrayClassList = [];
    e.target.classList.forEach((item) => {
      arrayClassList.push(item);
    });

    if (arrayClassList.includes("list")) {
      const currentLiColor = Color(
        `${
          e.target.style.backgroundColor
            ? e.target.style.backgroundColor
            : "#76ce8e"
        }`
      );
      return (e.target.style.backgroundColor = currentLiColor.lighten(0.1));
    }
  };

  const elementHoverLeave = (e) => {
    const arrayClassList = [];
    e.target.classList.forEach((item) => {
      arrayClassList.push(item);
    });

    if (arrayClassList.includes("list")) {
      return (e.target.style.backgroundColor = whichColor);
    }
  };

  const visibilityOptionFunction = (e, swap, inputTitle, listId) => {
    setVisibilityOptionCover(swap);
    setIdUpdatedList(listId);
    setTaskName(inputTitle);
    setOptionCoverData([
      {
        id: listId,
        top: e.target.parentNode.offsetTop,
        left: e.target.parentNode.offsetLeft,
        taskTitle: inputTitle,
        wholeList: wholeList,
      },
    ]);
  };

  const taskDetailsFunction = (taskName, inputTitle, id) => {
    setIdUpdatedList(id);
    setTaskTitleList(inputTitle);
    setTaskName(taskName);
    setVisibilityTaskDetails(true);
  };

  const updateCard = (e, updatedTitle) => {
    if (
      e.target.className.includes("cover") ||
      e.target.className.includes("close") ||
      e.target.className.includes("cover_saveBtn")
    ) {
      const correctList = wholeList.filter((list) => list.id === idUpdatedList);

      if (correctList[0].tasks.includes(updatedTitle)) {
        return setVisibilityTaskDetails(false);
      }

      if (updatedTitle.length < 2) return setVisibilityTaskDetails(false);
      if (correctList[0]) {
        const index = correctList[0].tasks.indexOf(taskName);
        correctList[0].tasks[index] = updatedTitle;
        setVisibilityTaskDetails(false);
        setVisibilityOptionCover(false);
      }
    }

    if (!e.target.className.includes("input")) {
      const correctList = wholeList.filter((list) => list.id === idUpdatedList);
      if (correctList[0].tasks.includes(updatedTitle)) return;
      if (updatedTitle.length < 2) return;
      if (correctList[0]) {
        const index = correctList[0].tasks.indexOf(taskName);
        correctList[0].tasks[index] = updatedTitle;
        setTaskName(updatedTitle);
      }
    }
    setLabelsVisibility(false);
  };

  const changeListInDetails = () => {
    setChangeListInDetails(!visibilityChangeListInDetails);
  };

  const moveCardToAnotherList = (
    taskTitle,
    currentList,
    taskTitleToMove,
    clickedListId
  ) => {
    //FindListWhereDelete
    const deleteFromList = wholeList.filter(
      (list) => list.title === currentList
    );

    //AddToAnotherList
    const addToList = wholeList.filter((list) => list.id === clickedListId);
    if (addToList[0].tasks.includes(taskTitleToMove)) return;

    addToList[0].tasks.push(taskTitleToMove);

    //DeleteFromCurrentList
    // const taskToRemoveId = deleteFromList[0].tasks.indexOf(taskTitleToMove);
    // deleteFromList[0].tasks.splice(taskToRemoveId, 1);

    deleteCard(taskTitle, deleteFromList[0].id);

    setVisibilityTaskDetails(false);
    setChangeListInDetails(false);
    taskDetailsFunction(taskTitle, addToList[0].title, addToList[0].id);
  };

  const moveListToAnotherPlace = (draggedListIndex, addToThisIndex) => {
    const copy = [...wholeList];
    const splicedElement = copy.splice(draggedListIndex, 1);
    copy.splice(addToThisIndex, 0, ...splicedElement);
    setWholeList(copy);
  };

  const clearAllBlankSpan = (e) => {
    const allBlank = document.querySelectorAll(".blank");

    allBlank.forEach((blank) => {
      blank.style.width = "0";
      blank.style.height = "0";
      blank.style.backgroundColor = "transparent";
      blank.style.borderRadius = "0";
    });
  };

  const handleLabelsVisibility = (toggle) => {
    setLabelsVisibility(toggle);
  };

  const handleLabelsVisibilityDetailsComp = (toggle) => {
    setLabelsVisibilityDetailsComp(toggle);
  };

  return (
    <main>
      <Navigations
        themeToggle={showThemeOptionFunction}
        themeOption={showThemeOption}
        elementHoverEnter={elementHoverEnter}
        elementHoverLeave={elementHoverLeave}
      />
      <ThemeField themeOption={showThemeOption} setWhichColor={setWhichColor} />
      <CoreField
        wholeList={wholeList}
        setWholeList={setWholeList}
        listOption={listOption}
        addNewCard={addNewCard}
        deleteCard={deleteCard}
        addNewList={addNewList}
        elementHoverEnter={elementHoverEnter}
        elementHoverLeave={elementHoverLeave}
        visibilityOptionFunction={visibilityOptionFunction}
        taskDetailsFunction={taskDetailsFunction}
        updateListTitle={updateListTitle}
        moveListToAnotherPlace={moveListToAnotherPlace}
        clearAllBlankSpan={clearAllBlankSpan}
      />
      {visibilityOptionsCover ? (
        <OptionCover
          optionCoverData={optionCoverData}
          taskName={taskName}
          updateCard={updateCard}
          deleteCard={deleteCard}
          handleLabelsVisibility={handleLabelsVisibility}
          labelsVisibility={labelsVisibility}
        />
      ) : null}
      {visibilityTaskDetails ? (
        <DetailCover
          taskName={taskName}
          taskTitleList={taskTitleList}
          updateCard={updateCard}
          deleteCard={deleteCard}
          idUpdatedList={idUpdatedList}
          changeListInDetails={changeListInDetails}
          visibilityChangeListInDetails={visibilityChangeListInDetails}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          handleLabelsVisibility={handleLabelsVisibilityDetailsComp}
          labelsVisibility={labelsVisibilityDetailsComp}
        />
      ) : null}
    </main>
  );
};

export default Main;
