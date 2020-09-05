import React, { useState, useEffect } from "react";
import Navigations from "../Naviagtion/Navigations";
import MenuBar from "../MenuSlide/MenuBar";
import CoreField from "../CoreField/CoreField";
import ThemeField from "../ThemeField/ThemeField";
import OptionCover from "../OptionCover/OptionCover";
import DetailCover from "../DetailCover/DetailCover";

const Main = () => {
  const [navSearchValue, setNavSearchValue] = useState("");
  const [showThemeOption, showThemeOptionFunction] = useState(false);
  const [whichColor, setWhichColor] = useState(["#76ce8e"]);
  const [visibilityOptionsCover, setVisibilityOptionCover] = useState(false);
  const [optionCoverData, setOptionCoverData] = useState("");
  const [visibilityTaskDetails, setVisibilityTaskDetails] = useState(false);
  const [slideMenuState, setSlideMenuState] = useState(false);
  const [taskTitleList, setTaskTitleList] = useState();
  const [taskName, setTaskName] = useState("");
  const [taskId, setTaskId] = useState("");
  const [idUpdatedList, setIdUpdatedList] = useState();
  const [listOfAllArchivedCard, setListOfAllArchivedCard] = useState([]);
  const [listOfAllTasksId, setListOfAllTasksId] = useState([]);
  const [listOfAllBadges, setListOfAllBadges] = useState([]);
  const [listOfAllPriorityTasks, setListOfPriority] = useState([]);
  const [listOfAllComments, setListOfAllComments] = useState([]);
  const [listOfAllTerms, setListOfallTerms] = useState([]);
  const [listOfAllTasksList, setListOfTasksList] = useState([]);
  const [listOfAllCover, setListOfAllCover] = useState([]);
  const [hideFontSizeLabel, setHideFontSizeLabel] = useState(false);
  const [tasksListVisibility, setTasksListVisibility] = useState(false);
  const [refresh, setRefresh] = useState(false);

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
    { color: "#0079BF", colorName: "blue", id: 1 },
    { color: "#00C2E0", colorName: "light blue ocean", value: "", id: 2 },
    { color: "#51E898", colorName: "light green", value: "", id: 3 },
    { color: "#61BD4F", colorName: "green", value: "", id: 4 },
    { color: "#C377E0", colorName: "purple", value: "", id: 5 },
    { color: "#FF78CB", colorName: "pink", value: "", id: 6 },
    { color: "#EB5A46", colorName: "red", value: "", id: 7 },
    { color: "#FF9F1A", colorName: "orange", value: "", id: 8 },
    { color: "#F2D600", colorName: "yellow", value: "", id: 9 },
    { color: "#B3BAC5", colorName: "grey", value: "", id: 10 },
    { color: "#344563", colorName: "dark blue", value: "", id: 11 },
  ]);

  const hideTheme = (e) => {
    const searchingClass = e.target.className;
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
    const matchedCover = listOfAllCover.filter((ele) => ele.id === taskId);

    const matchedTasksList = listOfAllTasksList.filter(
      (ele) => ele.id === taskId
    );

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
        tasksLists: matchedTasksList,
        cover: matchedCover,
        archived: false,
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
        tasksLists: [],
        cover: [],
        archived: false,
      });
      if (listOfAllTasksId.length === 0) {
        setListOfAllTasksId([0]);
      } else {
        setListOfAllTasksId([...listOfAllTasksId, theBiggestId + 1]);
      }
    }
    setListOfAllBadges(listOfAllBadges);
  };

  const archiveCard = (listId, taskId) => {
    const correctList = wholeList.filter((list) => list.id === listId);
    const taskIndex = correctList[0].tasks.findIndex(
      (element) => element.id === taskId
    );
    const badgesToThisCard = listOfAllBadges.filter(
      (badge) => badge.id === taskId
    );
    const commentsToThisCard = listOfAllComments.filter(
      (comment) => comment.id === taskId
    );
    const priorityToThisCard = listOfAllPriorityTasks.filter(
      (priority) => priority === taskId
    );
    const coverToThisCard = listOfAllCover.filter(
      (cover) => cover.id === taskId
    );
    const termsToThisCard = listOfAllTerms.filter((term) => term.id === taskId);
    const archivedCard = correctList[0].tasks.splice(taskIndex, 1);
    console.log(correctList);

    archivedCard[0].archived = true;
    archivedCard[0].badges = badgesToThisCard;
    archivedCard[0].date = termsToThisCard;
    archivedCard[0].comment = commentsToThisCard;
    archivedCard[0].cover = coverToThisCard;
    archivedCard[0].priority = `${
      priorityToThisCard.length !== 0 ? "priority" : false
    }`;

    listOfAllArchivedCard.push(...archivedCard);
    setVisibilityOptionCover(false);
    setVisibilityTaskDetails(false);
  };

  const replaceCard = (listId, taskId) => {
    const correctList = wholeList.filter((list) => list.id === listId);
    const taskIndex = correctList[0].tasks.findIndex(
      (element) => element.id === taskId
    );
    correctList[0].tasks.splice(taskIndex, 1);
  };

  const deleteCard = (taskId) => {
    // Delete Card Badges from array if matched exist also other matched lists
    const matchedBadges = listOfAllBadges.filter((ele) => ele.id === taskId);
    const matchedPriority = listOfAllPriorityTasks.filter(
      (ele) => ele === taskId
    );
    const matchedComment = listOfAllComments.filter((ele) => ele.id === taskId);
    const matchedTerms = listOfAllTerms.filter((ele) => ele.id === taskId);
    const matchedTasksList = listOfAllTasksList.filter(
      (ele) => ele.id === taskId
    );
    const matchedCoverList = listOfAllCover.filter((ele) => ele.id === taskId);

    if (matchedPriority.length !== 0) {
      matchedPriority.forEach((element) => {
        const indexOfPriorityToDelete = listOfAllPriorityTasks.findIndex(
          (ele) => ele === taskId
        );
        listOfAllPriorityTasks.splice(indexOfPriorityToDelete, 1);
      });
    }
    if (matchedComment.length !== 0) {
      matchedComment.forEach((element) => {
        const indexOfCommentToDelete = listOfAllComments.findIndex(
          (ele) => ele.id === taskId
        );
        listOfAllComments.splice(indexOfCommentToDelete, 1);
      });
    }
    if (matchedTerms.length !== 0) {
      matchedTerms.forEach((element) => {
        const indexOfTermToDelete = listOfAllTerms.findIndex(
          (ele) => ele.id === taskId
        );
        listOfAllTerms.splice(indexOfTermToDelete, 1);
      });
    }
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
    if (matchedCoverList.length !== 0) {
      matchedCoverList.forEach((element) => {
        const indexOfCoverToDelete = listOfAllCover.findIndex(
          (ele) => ele.id === taskId
        );
        listOfAllCover.splice(indexOfCoverToDelete, 1);
      });
    }
    // Delete Card Id from array
    const indexMatchedIdList = listOfAllTasksId.findIndex(
      (ele) => ele === taskId * 1
    );
    listOfAllTasksId.splice(indexMatchedIdList, 1);
    // Delete card from archived list
    const indexMatchedArchivedCard = listOfAllArchivedCard.findIndex(
      (ele) => ele.id === taskId
    );
    listOfAllArchivedCard.splice(indexMatchedArchivedCard, 1);
  };

  const addNewList = (listInputValue) => {
    if (listInputValue === "") return;
    if (listInputValue.length < 1) return;
    if (wholeList.length === 10) return;

    let biggerThanLast = [];
    wholeList.forEach((list) => biggerThanLast.push(list.id));
    const theBiggest = Math.max(...biggerThanLast);
    setWholeList([
      ...wholeList,
      {
        title: listInputValue,
        id: Number(`${wholeList.length === 0 ? 0 : theBiggest + 1}`),
        tasks: [],
      },
    ]);
  };

  const updateListTitle = (newTitle, listId) => {
    const updatedList = wholeList.filter((list) => list.id === listId);
    updatedList[0].title = newTitle;
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
    const correctList = wholeList.filter((list) => list.id === listId);
    const ifTaskIdArchived = listOfAllArchivedCard.filter(
      (archived) => archived.id === taskId
    );

    if (ifTaskIdArchived.length !== 0) {
      updateArchivedCard(e, updatedTitle, taskId);
      return;
    } // Check if this updateCard call is from active card or archived

    // For changing taskName by detailCover component and optionCover
    if (
      e.target.className.includes("cover") ||
      e.target.className.includes("cover_saveBtn") ||
      e.which === 13
    ) {
      if (updatedTitle.length === 0) return setVisibilityTaskDetails(false);
      const index = correctList[0].tasks.findIndex((ele) => ele.id === taskId);
      correctList[0].tasks[index].taskName = updatedTitle;
      setVisibilityTaskDetails(false);
      setVisibilityOptionCover(false);
      return;
    }
    if (
      // For changing taskName by detailCover component without closing this componentView
      !e.target.className.includes("close") &&
      !e.target.className.includes("suggestedListToMove") &&
      !e.target.className.includes("ultimateDelete") &&
      !e.which
    ) {
      if (updatedTitle.length === 0) return setVisibilityTaskDetails(false);
      if (correctList[0]) {
        const foundIndex = correctList[0].tasks.findIndex(
          (ele) => ele.id === taskId
        );
        correctList[0].tasks[foundIndex].taskName = updatedTitle;
        setTaskName(updatedTitle);
        return;
      }
    }
    if (
      e.target.className.includes("close") ||
      e.target.className.includes("ultimateDelete")
    ) {
      setVisibilityTaskDetails(false);
      setVisibilityOptionCover(false);
    }
  };

  const updateArchivedCard = (e, updatedTitle, taskId) => {
    const archivedList = listOfAllArchivedCard.filter(
      (ele) => ele.id === taskId
    );

    if (archivedList.length === 0) return setVisibilityTaskDetails(false);
    archivedList[0].taskName = updatedTitle;
    setTaskName(updatedTitle);
    if (
      e.target.className.includes("close") ||
      e.target.className.includes("cover")
    ) {
      return setVisibilityTaskDetails(false);
    }
  };

  const moveCardToAnotherList = (
    taskId,
    taskTitle,
    listIdToMove,
    listIdToDelte
  ) => {
    const isThisCardArchivedIndex = listOfAllArchivedCard.findIndex(
      // Is that archived or active card?
      (ele) => ele.id === taskId
    );
    if (isThisCardArchivedIndex !== -1) {
      //Add to choosed list and delete from archived list
      addNewCard(listIdToMove, taskTitle, taskId);
      listOfAllArchivedCard.splice(isThisCardArchivedIndex, 1);
      setVisibilityTaskDetails(false);
      setVisibilityOptionCover(false);
    } else {
      //Add to new list and delete from preview
      addNewCard(listIdToMove, taskTitle, taskId);
      replaceCard(listIdToDelte, taskId);
      setVisibilityTaskDetails(false);
      setVisibilityOptionCover(false);
    }
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

  const toggleTasksListVisibility = (toggle) => {
    setTasksListVisibility(toggle);
  };

  return (
    <main className="app">
      <Navigations
        themeToggle={showThemeOptionFunction}
        themeOption={showThemeOption}
        whichColor={whichColor}
        navSearchValu={navSearchValue}
        setNavSearchValue={setNavSearchValue}
      />
      <ThemeField themeOption={showThemeOption} setWhichColor={setWhichColor} />
      <MenuBar
        wholeList={wholeList}
        moveCardToAnotherList={moveCardToAnotherList}
        whichColor={whichColor}
        listOfAllBadges={listOfAllBadges}
        listOfAllTasksId={listOfAllTasksId}
        labelColors={labelColors}
        setLabelColors={setLabelColors}
        listOfAllArchivedCard={listOfAllArchivedCard}
        taskDetailsFunction={taskDetailsFunction}
        deleteCard={deleteCard}
        showThemeOptionFunction={showThemeOptionFunction}
        setWhichColor={setWhichColor}
        setSlideMenuState={setSlideMenuState}
        slideMenuState={slideMenuState}
        listOfAllCover={listOfAllCover}
      />
      <CoreField
        wholeList={wholeList}
        setWholeList={setWholeList}
        addNewCard={addNewCard}
        replaceCard={replaceCard}
        archiveCard={archiveCard}
        addNewList={addNewList}
        visibilityOptionFunction={visibilityOptionFunction}
        taskDetailsFunction={taskDetailsFunction}
        updateListTitle={updateListTitle}
        moveListToAnotherPlace={moveListToAnotherPlace}
        clearAllBlankSpan={clearAllBlankSpan}
        hideFontSizeLabel={hideFontSizeLabel}
        setHideFontSizeLabel={setHideFontSizeLabel}
        listOfAllTasksList={listOfAllTasksList}
        moveCardToAnotherList={moveCardToAnotherList}
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
      {visibilityOptionsCover ? (
        <OptionCover
          optionCoverData={optionCoverData}
          taskName={taskName}
          updateCard={updateCard}
          archiveCard={archiveCard}
          listOfAllBadges={listOfAllBadges}
          listOfAllTasksId={listOfAllTasksId}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          setListOfPriority={setListOfPriority}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          listOfAllPriorityTasks={listOfAllPriorityTasks}
          listOfAllTerms={listOfAllTerms}
          listOfAllTasksList={listOfAllTasksList}
          listOfAllComments={listOfAllComments}
          setListOfallTerms={setListOfallTerms}
          addNewCard={addNewCard}
          listOfAllCover={listOfAllCover}
        />
      ) : null}
      {visibilityTaskDetails ? (
        <DetailCover
          taskName={taskName}
          taskId={taskId}
          taskTitleList={taskTitleList}
          updateCard={updateCard}
          addNewCard={addNewCard}
          archiveCard={archiveCard}
          currentListId={idUpdatedList}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          listOfAllBadges={listOfAllBadges}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          listOfAllTasksId={listOfAllTasksId}
          listOfAllComments={listOfAllComments}
          setListOfAllComments={setListOfAllComments}
          listOfAllPriorityTasks={listOfAllPriorityTasks}
          listOfAllTerms={listOfAllTerms}
          setListOfPriority={setListOfPriority}
          setTasksListVisibility={toggleTasksListVisibility}
          tasksListVisibility={tasksListVisibility}
          setListOfTasksList={setListOfTasksList}
          listOfAllTasksList={listOfAllTasksList}
          setListOfallTerms={setListOfallTerms}
          listOfAllArchivedCard={listOfAllArchivedCard}
          listOfAllCover={listOfAllCover}
          deleteCard={deleteCard}
        />
      ) : null}
    </main>
  );
};

export default Main;
