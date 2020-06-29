import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/navigation";
import CoreField from "./CoreField/CoreField";
import ThemeField from "./ThemeField/themeField";
import Color from "color";

const Main = () => {
  const [showThemeOption, showThemeOptionFunction] = useState(false);
  const [whichColor, setWhichColor] = useState(["#76ce8e"]);
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
    showThemeOptionFunction(false);
  };

  const deleteCard = (e, listId) => {
    const correctList = wholeList.filter((list) => list.id === listId);

    const taskValue = e.target.parentNode.textContent;

    const taskIndex = correctList[0].tasks.findIndex(
      (element) => element === taskValue
    );

    correctList[0].tasks.splice(taskIndex, 1);
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
      />
    </main>
  );
};

export default Main;
