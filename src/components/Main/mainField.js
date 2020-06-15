import React, { useState } from "react";
import styled from "styled-components";
import TaskStatus from "../TaskStatus/taskStatus";
import { device } from "../mq";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  min-height: calc(100vh - 40px);
  background-color: #4bbf6b;
  padding: 40px 15px 0px 15px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const StyledWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: auto;
  background-color: ${(props) => (props.bgc ? "#ebecf0" : "#79be8c")};
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  transition: 0.1s linear;

  @media ${device.laptop} {
    margin: 0 auto 0 0;
  }
`;

const StyledListInput = styled.input`
  width: 265px;
  background-color: #79be8c;
  border-radius: 4px;
  padding: 12px 7.5px;
  text-align: left;
  cursor: pointer;
  transition: 0.1s linear;
  box-shadow: 0px 0px 1px 0px #888;

  &::placeholder {
    color: white;
  }

  &:focus {
    background-color: #fff;
    ::placeholder {
      color: black;
    }
  }
`;

const StyledButton = styled.button`
  width: 50%;
  background-color: #5aac44;
  border-radius: 5px;
  color: white;
  padding: 8px 20px;
  margin: 5px 0px;
  cursor: pointer;

  &:hover {
    background-color: #67ba50;
  }
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.laptop} {
    flex-direction: row;
    margin: 0 0 0 0 !important;
  }
`;

// COMPONENT //

const MainField = () => {
  const [addList, showAddList] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [newListItem, setAllList] = useState([
    {
      title: "To Do",
      id: 0,
      tasks: [],
      activeInput: false,
    },
    {
      title: "In Progress",
      id: 1,
      tasks: [],
      activeInput: false,
    },
    {
      title: "Finished",
      id: 2,
      tasks: [],
      activeInput: false,
    },
  ]);

  const showAddListHandle = () => {
    showAddList(true);
  };

  const addNewList = () => {
    showAddList(false);
    setInputValue("");
    if (inputValue === "") return;
    setAllList([
      ...newListItem,
      {
        title: inputValue,
        id: newListItem.length,
        tasks: [],
      },
    ]);
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addNewCard = (newTask, id, closeAddInput, clearTextArea) => {
    if (newTask === "") return closeAddInput(false);
    if (newListItem[id].tasks.includes(newTask)) {
      const returnCloseFunc = closeAddInput(false);
      const returnClearFunc = clearTextArea("");
      return returnCloseFunc && returnClearFunc;
    }

    const copyListItem = newListItem.filter((list) => list.id === id);
    copyListItem[0].tasks.push(newTask);
    closeAddInput(false);
    clearTextArea("");
  };

  const taskEditCard = (id, currentTask) => {
    const copyListForDelete = newListItem.filter((list) => list.id === id);
    const tasksAfterDelete = copyListForDelete[0].tasks.filter(
      (task) => task !== currentTask
    );

    const copyStayElement = newListItem.filter((list) => list.id !== id);
    const newList = {
      title: newListItem[id].title,
      id: id,
      tasks: tasksAfterDelete,
      activeInput: false,
    };

    copyStayElement.push(newList);
    copyStayElement.sort(function (a, b) {
      return a.id - b.id;
    });

    setAllList(copyStayElement);
  };

  return (
    <StyledMain className="main">
      <StyledListContainer style={{ margin: "0 auto" }}>
        {newListItem.map((list) => (
          <TaskStatus
            key={list.id}
            title={list.title}
            tasks={list.tasks}
            addListFeature={showAddList}
            addNewCard={addNewCard}
            id={list.id}
            taskEditCard={taskEditCard}
            list={list}
          />
        ))}
      </StyledListContainer>
      <StyledWrapDiv bgc={addList ? true : false} className={"item"}>
        <StyledListInput
          onClick={showAddListHandle}
          onChange={(e) => handleInputValue(e)}
          value={inputValue}
          placeholder="+ Add another list"
          className={"item"}
        />
        {addList ? (
          <StyledButton onClick={addNewList}>Enter title of list</StyledButton>
        ) : null}
      </StyledWrapDiv>
    </StyledMain>
  );
};

export default MainField;
