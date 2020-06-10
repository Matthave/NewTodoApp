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

const MainField = () => {
  const [addList, showAddList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [newListList, setAllList] = useState([]);

  const showAddListHandle = () => {
    showAddList(true);
  };

  const addNewList = () => {
    showAddList(false);
    setInputValue("");
    if (inputValue === "") return;
    setAllList([
      ...newListList,
      {
        title: inputValue,
        id: newListList.length + 1,
      },
    ]);
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <StyledMain className="main">
      <div className="co" style={{ margin: "0 auto" }}>
        <TaskStatus addListFeatue={showAddList} title="To do" />
        <TaskStatus addListFeatue={showAddList} title="In progress" />
        <TaskStatus addListFeatue={showAddList} title="Finished" />
        {newListList.map((list) => (
          <TaskStatus key={list.id} title={list.title} />
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
