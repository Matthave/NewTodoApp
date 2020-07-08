import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/navigation";
import CoreField from "./CoreField/CoreField";
import ThemeField from "./ThemeField/themeField";
import OptionCover from "./OptionCover/OptionCover";
import DetailCover from "./DetailCover/DetailCover";
import Color from "color";

const Main = () => {
  const [showThemeOption, showThemeOptionFunction] = useState(false);
  const [numberOfTask, numberOfTaskFunction] = useState(0);
  const [whichColor, setWhichColor] = useState(["#76ce8e"]);
  const [visibilityOptionsCover, setVisibilityOptionCover] = useState(false);
  const [visibilityTaskDetails, setVisibilityTaskDetails] = useState(false);
  const [taskTitleList, setTaskTitleList] = useState();
  const [taskName, setTaskName] = useState("");
  const [idUpdatedList, setIdUpdatedList] = useState();
  const [visibilityChangeListInDetails, setChangeListInDetails] = useState(
    false
  );
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

    if (
      searchingClass.includes("cover") ||
      searchingClass.includes("detail") ||
      searchingClass.includes("input") ||
      searchingClass.includes("close")
    ) {
      setChangeListInDetails(false);
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

  const deleteCard = (e, listId) => {
    const correctList = wholeList.filter((list) => list.id === listId);

    const taskValue = `${
      e.target.classList[0] === "card"
        ? e.target.textContent
        : e.target.parentNode.textContent
    }`;

    const taskIndex = correctList[0].tasks.findIndex(
      (element) => element === taskValue
    );

    correctList[0].tasks.splice(taskIndex, 1);
    numberOfTaskFunction(numberOfTask - 1);
  };

  const addNewList = (listInputValue, showListHandle, setListInput) => {
    showListHandle(false);
    setListInput("");
    if (listInputValue === "") return;
    if (listInputValue.length < 2) return;
    setWholeList([
      ...wholeList,
      {
        title: listInputValue,
        id: `${
          wholeList.length !== 0 ? wholeList[wholeList.length - 1].id + 1 : 0
        }`,
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

  const visibilityOptionFunction = (swap) => {
    setVisibilityOptionCover(swap);
  };

  const taskDetailsFunction = (e, inputTitle, id) => {
    setIdUpdatedList(id);
    setTaskTitleList(inputTitle);
    setTaskName(e.target.textContent);
    setVisibilityTaskDetails(true);
  };

  const updateCard = (e, updatedTitle) => {
    if (
      e.target.className.includes("cover") ||
      e.target.className.includes("close")
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
      }
    }

    if (e.target.className.includes("detail")) {
      const correctList = wholeList.filter((list) => list.id === idUpdatedList);
      if (correctList[0].tasks.includes(updatedTitle)) return;
      if (updatedTitle.length < 2) return;
      if (correctList[0]) {
        const index = correctList[0].tasks.indexOf(taskName);
        correctList[0].tasks[index] = updatedTitle;
        setTaskName(updatedTitle);
      }
    }
  };

  const changeListInDetails = () => {
    setChangeListInDetails(!visibilityChangeListInDetails);
  };

  const moveCardToAnotherList = (
    e,
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
    const taskToRemoveId = deleteFromList[0].tasks.indexOf(taskTitleToMove);
    deleteFromList[0].tasks.splice(taskToRemoveId, 1);

    setVisibilityTaskDetails(false);
    setChangeListInDetails(false);
  };

  return (
    <main>
      <Navigation
        themeToggle={showThemeOptionFunction}
        themeOption={showThemeOption}
        whichColor={whichColor}
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
      />
      {visibilityOptionsCover ? <OptionCover /> : null}
      {visibilityTaskDetails ? (
        <DetailCover
          taskName={taskName}
          taskTitleList={taskTitleList}
          updateCard={updateCard}
          changeListInDetails={changeListInDetails}
          visibilityChangeListInDetails={visibilityChangeListInDetails}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
        />
      ) : null}
    </main>
  );
};

export default Main;
