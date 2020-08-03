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
  const [taskId, setTaskId] = useState("");
  const [idUpdatedList, setIdUpdatedList] = useState();
  const [visibilityChangeListInDetails, setChangeListInDetails] = useState(
    false
  );
  const [toggleDetailMove, setToggleDetailMove] = useState(false);
  const [labelsVisibility, setLabelsVisibility] = useState(false);
  const [
    labelsVisibilityDetailsComp,
    setLabelsVisibilityDetailsComp,
  ] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [listOfAllTasksId, setListOfAllTasksId] = useState([]);
  const [listOfAllBadges, setListOfAllBadges] = useState([]);
  const [listOfAllPriorityTasks, setListOfPriority] = useState([]);
  const [listOfAllComments, setListOfAllComments] = useState([]);
  const [listOfAllTerms, setListOfallTerms] = useState([]);
  const [hideFontSizeLabel, setHideFontSizeLabel] = useState(false);
  const [toggleCommentVisibility, setToggleCommentVisibility] = useState(false);
  const [copyVisibility, setCopyVisibility] = useState(false);
  const [dateVisibility, setDateVisibility] = useState(false);
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

  const [labelColors, setLabelColors] = useState([
    { color: "#61BD4F", colorName: "green", value: "", id: 0 },
    { color: "#F2D600", colorName: "yellow", value: "", id: 1 },
    { color: "#FF9F1A", colorName: "orange", value: "", id: 2 },
    { color: "#EB5A46", colorName: "red", value: "", id: 3 },
    { color: "#C377E0", colorName: "purple", value: "", id: 4 },
    { color: "#0079BF", colorName: "blue", id: 5 },
    { color: "#00C2E0", colorName: "light blue ocean", value: "", id: 6 },
    { color: "#51E898", colorName: "light green", value: "", id: 7 },
    { color: "#FF78CB", colorName: "pink", value: "", id: 8 },
    { color: "#344563", colorName: "dark blue", value: "", id: 9 },
    { color: "#B3BAC5", colorName: "grey", value: "", id: 10 },
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
      setToggleDetailMove(false);
      setCopyVisibility(false);
    }

    if (
      searchingClass.includes("coverOption") ||
      searchingClass.includes("cover_box")
    ) {
      setVisibilityOptionCover(false);
      setLabelsVisibility(false);
    }

    if (searchingClass.includes("textArea_Option")) {
      setLabelsVisibility(false);
    }

    if (!searchingClass.includes("label")) {
      setLabelsVisibilityDetailsComp(false);
    }
    if (!searchingClass.includes("textArea")) {
      setToggleCommentVisibility(false);
    }
  };

  const listOption = (listId) => {
    const copyWholeList = [...wholeList];
    const filterWholeList = copyWholeList.filter((list) => list.id !== listId);
    const deletedList = copyWholeList.filter((list) => list.id === listId);
    deletedList[0].tasks.forEach((ele) => {
      deleteCard(listId, ele.id, "byButton");
    });

    setWholeList(filterWholeList);
  };

  const addNewCard = (listId, newTask, taskId) => {
    const correctList = wholeList.filter((list) => list.id === listId);
    if (newTask.length === 0) return;

    const matchedBadges = listOfAllBadges.filter((ele) => ele.id === taskId);
    const matchedPriority = listOfAllPriorityTasks.filter(
      (ele) => ele === taskId
    );
    const matchedComment = listOfAllComments.filter((ele) => ele.id === taskId);
    const theBiggestId = Math.max(...listOfAllTasksId);

    const matchedList = wholeList.filter((ele) => ele.id === listId);

    //"Add card" by move already existing card
    if (taskId) {
      correctList[0].tasks.push({
        id: taskId,
        taskName: newTask,
        currentList: listId,
        currentListName: matchedList[0].title,
        comment: matchedComment,
        badges: matchedBadges,
        priority: `${matchedPriority.length === 0 ? null : "priority"}`,
        date: "",
        cover: "",
      });
    } else {
      //Add new card by button 'Add Card'
      correctList[0].tasks.push({
        id: `${listOfAllTasksId.length === 0 ? 0 : theBiggestId + 1}`,
        taskName: newTask,
        currentList: listId,
        currentListName: matchedList[0].title,
        comment: "",
        badges: [],
        priority: false,
        date: "",
        cover: "",
      });
      if (listOfAllTasksId.length === 0) {
        setListOfAllTasksId([0]);
      } else {
        setListOfAllTasksId([...listOfAllTasksId, theBiggestId + 1]);
      }
    }
    numberOfTaskFunction(numberOfTask + 1);
  };

  const deleteCard = (listId, taskId, byButton) => {
    //Delete Card from list( by every way )
    const correctList = wholeList.filter((list) => list.id === listId);

    const taskIndex = correctList[0].tasks.findIndex(
      (element) => element.id === taskId
    );

    if (byButton === "byButton") {
      //Delete Card Badges from array if matched exist
      const matchedBadges = listOfAllBadges.filter((ele) => ele.id === taskId);
      const matchedPriorityIndex = listOfAllPriorityTasks.findIndex(
        (ele) => ele === taskId
      );
      const matchedCommentIndex = listOfAllComments.findIndex(
        (ele) => ele.id === taskId
      );
      listOfAllPriorityTasks.splice(matchedPriorityIndex, 1);
      listOfAllComments.splice(matchedCommentIndex, 1);
      if (matchedBadges.length !== 0) {
        matchedBadges.forEach((element) => {
          const indexOfBadgedToDelete = listOfAllBadges.findIndex(
            (ele) => ele.id === taskId && ele.color === element.color
          );
          listOfAllBadges.splice(indexOfBadgedToDelete, 1);
        });
      }

      //Delete Card Id from array
      const matchedIdList = listOfAllTasksId.findIndex((ele) => ele == taskId);
      listOfAllTasksId.splice(matchedIdList, 1);
    }

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

  const visibilityOptionFunction = (
    e,
    toggle,
    taskName,
    listId,
    currentListName,
    cardId
  ) => {
    //Dates sending from Card to OptionFunction Comp (by clicked Edit Icon)
    setVisibilityOptionCover(toggle);
    setIdUpdatedList(listId);
    setTaskName(taskName);
    setOptionCoverData([
      {
        listId: listId,
        currentListName: currentListName,
        top: e.target.parentNode.offsetTop,
        left: e.target.parentNode.offsetLeft,
        taskTitle: taskName,
        clickedCard: e.target.parentNode,
        clickedCardWrapLabel: e.target.parentNode.children[0],
        clickedCardId: cardId,
        wholeList: wholeList,
      },
    ]);
  };

  const taskDetailsFunction = (
    //Dates sending from Card to DetailsComponenet (by doubleClick Card)
    nameUpdatedTask,
    nameUpdatedList,
    listId,
    cardId
  ) => {
    setIdUpdatedList(listId);
    setTaskTitleList(nameUpdatedList);
    setTaskName(nameUpdatedTask);
    setTaskId(cardId);
    setVisibilityTaskDetails(true);
  };

  const updateCard = (e, updatedTitle, listId, taskId) => {
    // For changing taskName by detailCover component and optionCover
    if (
      e.target.className.includes("cover") ||
      e.target.className.includes("cover_saveBtn") ||
      e.which === 13
    ) {
      const correctList = wholeList.filter((list) => list.id === listId);
      if (updatedTitle.length === 0) return setVisibilityTaskDetails(false);
      const index = correctList[0].tasks.findIndex((ele) => ele.id === taskId);
      correctList[0].tasks[index].taskName = updatedTitle;
      setVisibilityTaskDetails(false);
      setVisibilityOptionCover(false);
      setLabelsVisibility(false);
    }

    // For changing taskName by detailCover component without closing this componentView
    if (
      !e.target.className.includes("input") &&
      !e.target.className.includes("suggested") &&
      !e.target.className.includes("close") &&
      !e.target.className.includes("delete") &&
      !e.target.className.includes("cover_textArea")
    ) {
      const correctList = wholeList.filter((list) => list.id === listId);
      if (updatedTitle.length === 0) return setVisibilityTaskDetails(false);
      if (correctList[0]) {
        const index = correctList[0].tasks.findIndex(
          (ele) => ele.id === taskId
        );
        correctList[0].tasks[index].taskName = updatedTitle;
        setTaskName(updatedTitle);
      }
    }

    if (e.target.className.includes("close")) {
      setVisibilityTaskDetails(false);
      setVisibilityOptionCover(false);
      setLabelsVisibility(false);
    }
  };

  const changeListInDetails = (byElement) => {
    if (byElement === "byListName") {
      setChangeListInDetails(!visibilityChangeListInDetails);
    } else if (
      byElement === "byNavMove" ||
      byElement === "byOptionMove" ||
      byElement === "byNavCopy"
    ) {
      setToggleDetailMove(!toggleDetailMove);
      if (byElement === "byNavCopy") {
        setCopyVisibility(true);
      }
    }
  };

  const moveCardToAnotherList = (
    taskTitle,
    currentList,
    taskId,
    clickedListId,
    byOptionCover,
    copy,
    canCopyLabels
  ) => {
    //FindListWhereDelete
    const deleteFromList = wholeList.filter(
      (list) => list.title === currentList
    );

    //AddToAnotherList
    const addToList = wholeList.filter((list) => list.id === clickedListId);
    if (addToList[0].id === deleteFromList[0].id) return;
    if (!copy) {
      deleteCard(deleteFromList[0].id, taskId);
      addNewCard(addToList[0].id, taskTitle, taskId);
    } else {
      if (taskTitle.length === 0) return;
      const theBiggestId = Math.max(...listOfAllTasksId);
      const unicalIdForCopy = `${theBiggestId + 1}`;
      listOfAllTasksId.push(unicalIdForCopy);
      copyCard(
        addToList[0].id,
        taskTitle,
        unicalIdForCopy,
        taskId,
        canCopyLabels
      );
    }
    setChangeListInDetails(false);
    setToggleDetailMove(false);

    taskDetailsFunction(taskTitle, addToList[0].title, addToList[0].id, taskId);
    if (byOptionCover || copy) {
      setVisibilityTaskDetails(false);
    }
  };

  const copyCard = (
    listId,
    taskTitle,
    copyId,
    preventCardId,
    canCopyLabels
  ) => {
    const lablesToCopy = listOfAllBadges.filter(
      (ele) => ele.id === preventCardId
    );
    const commentToCopy = listOfAllComments.filter(
      (ele) => ele.id === preventCardId
    );

    if (lablesToCopy.length !== 0 && canCopyLabels) {
      lablesToCopy.forEach((ele) => {
        listOfAllBadges.push({
          id: copyId,
          color: ele.color,
          labelId: `${ele.color}${copyId}`,
          name: ele.name,
        });
      });
    }

    if (commentToCopy.length !== 0) {
      listOfAllComments.push({ id: copyId, comment: commentToCopy[0].comment });
    }
    addNewCard(listId, taskTitle, copyId);
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

  //LABLES FEATURES
  const handleLabelsVisibility = (toggle) => {
    setLabelsVisibility(toggle);
  };

  const handleLabelsVisibilityDetailsComp = (toggle) => {
    setLabelsVisibilityDetailsComp(toggle);
  };

  const toggleLabelColorToCard = (color, taskId) => {
    const alreadyExistedBadges = listOfAllBadges.filter(
      (ele) => ele.id === taskId
    );

    const matchedBages = [];
    alreadyExistedBadges.forEach((ele) => {
      if (ele.color === color) {
        matchedBages.push(color);
      }
    });

    if (matchedBages.length === 0) {
      //Add only if this color and Id don't exist already
      const nameBadge = labelColors.filter((ele) => ele.color === color);
      // const dataForClasses = color.slice(1, -1);

      listOfAllBadges.push({
        id: taskId,
        color: color,
        name: nameBadge[0].value,
        labelId: `${color}${taskId}`,
      });

      createLabelsElement(color, taskId, nameBadge[0].value);

      //CheckIcon Visible
      const checkIcon = document.getElementById(`${color}Check`);
      checkIcon.style.display = "block";
      setToggle(!toggle);
    } else {
      const indexToDelete = listOfAllBadges.findIndex(
        (ele) => ele.id === taskId && ele.color === color
      );

      //Delete from list of badges when exist and from DOM
      listOfAllBadges.splice(indexToDelete, 1);
      const matchedColor = document.getElementById(`${color}${taskId}`);
      matchedColor.remove();

      //CheckIcon Visible
      const checkIcon = document.getElementById(`${color}Check`);
      checkIcon.style.display = "none";
      setToggle(!toggle);
    }
  };

  const createLabelsElement = (color, taskId, nameLabel) => {
    const currentTask = document.getElementById(taskId);

    const newLabel = document.createElement("div");
    newLabel.classList.add(`labelElement`);
    newLabel.setAttribute("id", `${color}${taskId}`);
    newLabel.style.backgroundColor = `${color}`;
    newLabel.textContent = nameLabel;
    currentTask.children[0].appendChild(newLabel);
  };

  const addPriorityForCards = (e, cardId, byElement) => {
    if (!listOfAllPriorityTasks.includes(cardId)) {
      setListOfPriority([...listOfAllPriorityTasks, cardId]);
      const clickedCardDOM = document.getElementById(cardId);
      clickedCardDOM.style.border = "1px solid #db4a36";
      e.target.style.color = "#db4a36";
      e.target.children[0].style.color = "#db4a36";
    } else if (listOfAllPriorityTasks.includes(cardId)) {
      const indexToDelete = listOfAllPriorityTasks.findIndex(
        (ele) => ele === cardId
      );
      listOfAllPriorityTasks.splice(indexToDelete, 1);
      const clickedCardDOM = document.getElementById(cardId);
      clickedCardDOM.style.border = null;
      if (byElement === "detailCover") {
        e.target.style.color = "#42516e";
        e.target.children[0].style.color = "#42516e";
      } else {
        e.target.style.color = "#fff";
        e.target.children[0].style.color = "#fff";
      }
    }
  };

  const toggleCommentFeature = (toggle) => {
    setToggleCommentVisibility(toggle);
  };

  const toggleDateVisibility = () => {
    setDateVisibility(!dateVisibility);
  };

  const toggleTermToCard = (taskId, date) => {
    const termExistAlready = listOfAllTerms.filter((ele) => ele.id === taskId);
    if (termExistAlready.length !== 0) {
      const existingTermIndex = listOfAllTerms.findIndex(
        (ele) => ele.id === taskId
      );
      listOfAllTerms.splice(existingTermIndex, 1);
    }
    setListOfallTerms([...listOfAllTerms, { id: taskId, term: date }]);
    setDateVisibility(!dateVisibility);
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
        hideFontSizeLabel={hideFontSizeLabel}
        setHideFontSizeLabel={setHideFontSizeLabel}
      />
      {visibilityOptionsCover ? (
        <OptionCover
          optionCoverData={optionCoverData}
          taskName={taskName}
          updateCard={updateCard}
          deleteCard={deleteCard}
          handleLabelsVisibility={handleLabelsVisibility}
          labelsVisibility={labelsVisibility}
          toggleLabelColorToCard={toggleLabelColorToCard}
          listOfAllBadges={listOfAllBadges}
          listOfAllTasksId={listOfAllTasksId}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          addPriorityForCards={addPriorityForCards}
          toggleDetailMove={toggleDetailMove}
          changeListInDetails={changeListInDetails}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          listOfAllPriorityTasks={listOfAllPriorityTasks}
          copyVisibility={copyVisibility}
          dateVisibility={dateVisibility}
          toggleDateVisibility={toggleDateVisibility}
          toggleTermToCard={toggleTermToCard}
          listOfAllTerms={listOfAllTerms}
        />
      ) : null}
      {visibilityTaskDetails ? (
        <DetailCover
          taskName={taskName}
          taskId={taskId}
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
          toggleLabelColorToCard={toggleLabelColorToCard}
          listOfAllBadges={listOfAllBadges}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          listOfAllTasksId={listOfAllTasksId}
          addPriorityForCards={addPriorityForCards}
          toggleCommentFeature={toggleCommentFeature}
          toggleCommentVisibility={toggleCommentVisibility}
          listOfAllComments={listOfAllComments}
          setListOfAllComments={setListOfAllComments}
          toggleDetailMove={toggleDetailMove}
          listOfAllPriorityTasks={listOfAllPriorityTasks}
          copyVisibility={copyVisibility}
          toggleDateVisibility={toggleDateVisibility}
          dateVisibility={dateVisibility}
        />
      ) : null}
    </main>
  );
};

export default Main;
