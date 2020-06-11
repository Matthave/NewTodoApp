import React, { useState } from "react";
import styled from "styled-components";
import TaskStatus from "../TaskStatus/taskStatus";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  min-height: calc(100vh - 40px);
  background-color: #4bbf6b;
  padding: 40px 15px 0px 15px;
`;

const StyledWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: auto;
  background-color: ${(props) => (props.bgc ? "#ebecf0" : "#4bbf6b")};
  margin: 0 auto;
  padding: 3px 5px;
  border-radius: 5px;
  transition: 0.1s linear;
`;

const StyledListInput = styled.input`
  width: 265px;
  background-color: #76ce8e;
  border-radius: 4px;
  padding: 12px 7.5px;
  text-align: left;
  cursor: pointer;
  transition: 0.1s linear;
  box-shadow: 0px 0px 1px 0px #888;

  &:hover {
    background-color: #86c497;
  }

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

const StyledSpan = styled.span`
  margin-right: 10px;
`;

// COMPONENT //

const MainField = () => {
  const [addList, showAddList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [newListItem, setAllList] = useState([
    {
      title: "To Do",
      id: 0,
      tasks: ["work", "home"],
    },
    {
      title: "In Progress",
      id: 1,
      tasks: ["co"],
    },
    {
      title: "Finished",
      id: 2,
      tasks: ["Finished"],
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

  const addNewCard = (newTask, id) => {
    const copyListItem = newListItem.filter((list) => list.id === id);
    copyListItem[0].tasks.push(newTask);
  };

  return (
    <StyledMain className="main">
      <div className="co" style={{ margin: "0 auto" }}>
        {newListItem.map((list) => (
          <TaskStatus
            key={list.id}
            title={list.title}
            tasks={list.tasks}
            addListFeature={showAddList}
            addNewCard={addNewCard}
            id={list.id}
          />
        ))}
      </div>
      <StyledWrapDiv bgc={addList ? true : false}>
        <StyledListInput
          onClick={showAddListHandle}
          onChange={(e) => handleInputValue(e)}
          value={inputValue}
          placeholder="+ Add another list"
        />
        {addList ? (
          <StyledButton onClick={addNewList}>Enter title of list</StyledButton>
        ) : null}
      </StyledWrapDiv>
    </StyledMain>
  );
};

export default MainField;
