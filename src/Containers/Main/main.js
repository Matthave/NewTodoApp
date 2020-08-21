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
  const [listOfAllTasksId, setListOfAllTasksId] = useState([]);
  const [listOfAllBadges, setListOfAllBadges] = useState([]);
  const [listOfAllPriorityTasks, setListOfPriority] = useState([]);
  const [listOfAllComments, setListOfAllComments] = useState([]);
  const [listOfAllTerms, setListOfallTerms] = useState([]);
  const [listOfAllTasksList, setListOfTasksList] = useState([]);
  const [hideFontSizeLabel, setHideFontSizeLabel] = useState(false);
  const [tasksListVisibility, setTasksListVisibility] = useState(false);
  useEffect(() => {
    document.addEventListener("click", hideTheme);
  });

  const [wholeList, setWholeList] = useState([
    {
      id: 0,
      title: "To Do",
      tasks: [],
    },
    {
      id: 1,
      title: "In Progress",
      tasks: [],
    },
    {
      id: 2,
      title: "Finished",
      tasks: [],
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
    if (
      searchingClass.includes("coverOption") ||
      searchingClass.includes("cover_box")
    ) {
      setVisibilityOptionCover(false);
    }
    if (!searchingClass.includes("tasksList")) {
      setTasksListVisibility(false);
    }
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
    const matchedDate = listOfAllTerms.filter((ele) => ele.id === taskId);

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
        date: matchedDate,
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
        date: [],
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
    if (byButton === "byButton") {
      //Delete Card Badges from array if matched exist also other matched lists
      const matchedBadges = listOfAllBadges.filter((ele) => ele.id === taskId);
      const matchedPriorityIndex = listOfAllPriorityTasks.findIndex(
        (ele) => ele === taskId
      );
      const matchedCommentIndex = listOfAllComments.findIndex(
        (ele) => ele.id === taskId
      );
      const matchedTermIndex = listOfAllTerms.findIndex(
        (ele) => ele === taskId
      );
      const matchedTasksList = listOfAllTasksList.filter(
        (ele) => ele.id === taskId
      );

      listOfAllPriorityTasks.splice(matchedPriorityIndex, 1);
      listOfAllComments.splice(matchedCommentIndex, 1);
      listOfAllTerms.splice(matchedTermIndex, 1);
      if (matchedBadges.length !== 0) {
        matchedBadges.forEach((element) => {
          const indexOfBadgedToDelete = listOfAllBadges.findIndex(
            (ele) => ele.id === taskId && ele.color === element.color
          );
          listOfAllBadges.splice(indexOfBadgedToDelete, 1);
        });
      }

      if (matchedTasksList.length !== 0) {
        matchedTasksList.forEach((element) => {
          const indexOfTaskListToDelete = listOfAllTasksList.findIndex(
            (ele) => ele.id === element.id && ele.listName === element.listName
          );
          listOfAllTasksList.splice(indexOfTaskListToDelete, 1);
        });
      }

      //Delete Card Id from array
      const matchedIdList = listOfAllTasksId.findIndex(
        (ele) => ele === taskId * 1
      );
      listOfAllTasksId.splice(matchedIdList, 1);
    }

    //Delete Card from list( by every way )
    const correctList = wholeList.filter((list) => list.id === listId);
    const taskIndex = correctList[0].tasks.findIndex(
      (element) => element.id === taskId
    );
    correctList[0].tasks.splice(taskIndex, 1);

    numberOfTaskFunction(numberOfTask - 1);
    setVisibilityOptionCover(false);
    setVisibilityTaskDetails(false);
  };

  const addNewList = (listInputValue) => {
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
      },
    ]);
  };

  const copyNewList = (tasksToCopy, listId, listNewName) => {
    const tasksToCopyArr = [...tasksToCopy];
    //Copy pure List, without tasks
    let biggerThanLast = [];
    wholeList.forEach((list) => biggerThanLast.push(list.id));
    const theBiggest = Math.max(...biggerThanLast);
    const newId = Number(`${wholeList.length === 0 ? 0 : theBiggest + 1}`);
    wholeList.push({
      title: listNewName,
      id: newId,
      tasks: [],
    });

    //Add preview tasks to newList (tasks have wrong id now)
    tasksToCopyArr.forEach((ele) => {
      addNewCard(newId, ele.taskName, ele.id);
    });

    //Change tasks id to correct, also other parameters
    const theBiggestId = Math.max(...listOfAllTasksId);
    wholeList[newId].tasks.forEach((ele, index) => {
      const newIdForCard = String(theBiggestId + (index + 1)); //Calculate new unique id
      ele.id = newIdForCard;

      listOfAllTasksId.push(newIdForCard); // Add id to listOfId

      if (ele.badges.length !== 0) {
        ele.badges.forEach((badge) => {
          listOfAllBadges.push({
            color: badge.color,
            id: newIdForCard,
            labelId: `${badge.color}${newIdForCard}`,
            name: badge.name,
          }); // Add proper badges to list of Badges, with new uniqe Id
        });
      }

      if (ele.comment.length !== 0) {
        listOfAllComments.push({
          id: newIdForCard,
          comment: ele.comment[0].comment,
        }); // Add proper comment, with new uniqe Id
      }

      if (ele.date.length !== 0) {
        listOfAllTerms.push({
          id: newIdForCard,
          classN: "termSpan",
          term: ele.date[0].term,
          day: ele.date[0].day,
          month: ele.date[0].month,
          year: ele.date[0].year,
          monthName: ele.date[0].monthName,
          hour: ele.date[0].hour,
          minutes: ele.date[0].minutes,
          status: ele.date[0].status,
          statusColor: ele.date[0].statusColor,
          fontColor: ele.date[0].fontColor,
          beforeDoneState: ele.date[0].beforeDoneState,
        });
      } // Add proper term, with new uniqe Id
    });
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
        top: e.target.parentNode.parentNode.offsetTop,
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
    }
  };

  const moveCardToAnotherList = (
    taskId,
    taskTitle,
    listIdToMove,
    listIdToDelte
  ) => {
    //Add to new list, and delete from preview
    addNewCard(listIdToMove, taskTitle, taskId);
    deleteCard(listIdToDelte, taskId);
  };

  // const copyCard = (
  //   listId,
  //   taskTitle,
  //   copyId,
  //   preventCardId,
  //   canCopyLabels
  // ) => {
  //   const lablesToCopy = listOfAllBadges.filter(
  //     (ele) => ele.id === preventCardId
  //   );
  //   const commentToCopy = listOfAllComments.filter(
  //     (ele) => ele.id === preventCardId
  //   );

  //   const dateToCopy = listOfAllTerms.filter((ele) => ele.id === preventCardId);

  //   if (lablesToCopy.length !== 0 && canCopyLabels) {
  //     lablesToCopy.forEach((ele) => {
  //       listOfAllBadges.push({
  //         id: copyId,
  //         color: ele.color,
  //         labelId: `${ele.color}${copyId}`,
  //         name: ele.name,
  //       });
  //     });
  //   }

  //   if (commentToCopy.length !== 0) {
  //     listOfAllComments.push({ id: copyId, comment: commentToCopy[0].comment });
  //   }

  //   if (dateToCopy.length !== 0) {
  //     listOfAllTerms.push({
  //       id: copyId,
  //       term: dateToCopy[0].term,
  //       classN: "termSpan",
  //       day: dateToCopy[0].day,
  //       month: dateToCopy[0].month,
  //       year: dateToCopy[0].year,
  //       monthName: dateToCopy[0].monthName,
  //       hour: dateToCopy[0].hour,
  //       minutes: dateToCopy[0].minutes,
  //       status: dateToCopy[0].status,
  //       statusColor: dateToCopy[0].statusColor,
  //       fontColor: dateToCopy[0].fontColor,
  //       beforeDoneState: dateToCopy[0].beforeDoneState,
  //     });
  //   }

  //   addNewCard(listId, taskTitle, copyId);
  // };

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

  const toggleTasksListVisibility = (toggle) => {
    setTasksListVisibility(toggle);
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
        listOfAllTasksList={listOfAllTasksList}
        moveCardToAnotherList={moveCardToAnotherList}
        copyNewList={copyNewList}
      />
      {visibilityOptionsCover ? (
        <OptionCover
          optionCoverData={optionCoverData}
          taskName={taskName}
          updateCard={updateCard}
          deleteCard={deleteCard}
          listOfAllBadges={listOfAllBadges}
          listOfAllTasksId={listOfAllTasksId}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          addPriorityForCards={addPriorityForCards}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          listOfAllPriorityTasks={listOfAllPriorityTasks}
          listOfAllTerms={listOfAllTerms}
          listOfAllTasksList={listOfAllTasksList}
          setListOfallTerms={setListOfallTerms}
        />
      ) : null}
      {visibilityTaskDetails ? (
        <DetailCover
          taskName={taskName}
          taskId={taskId}
          taskTitleList={taskTitleList}
          updateCard={updateCard}
          addNewCard={addNewCard}
          deleteCard={deleteCard}
          currentListId={idUpdatedList}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          listOfAllBadges={listOfAllBadges}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          listOfAllTasksId={listOfAllTasksId}
          addPriorityForCards={addPriorityForCards}
          listOfAllComments={listOfAllComments}
          setListOfAllComments={setListOfAllComments}
          listOfAllPriorityTasks={listOfAllPriorityTasks}
          listOfAllTerms={listOfAllTerms}
          setTasksListVisibility={toggleTasksListVisibility}
          tasksListVisibility={tasksListVisibility}
          setListOfTasksList={setListOfTasksList}
          listOfAllTasksList={listOfAllTasksList}
          setListOfallTerms={setListOfallTerms}
        />
      ) : null}
    </main>
  );
};

export default Main;
