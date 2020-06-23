import React, { useState } from "react";
import styled from "styled-components";
import List from "../List/List";
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

const StyledWrapList = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: auto;
  background-color: transparent;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 3px 5px;
  border-radius: 5px;
  transition: 0.1s linear;
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

const StyledWrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 275px;
  height: auto;
  background-color: ${(props) => (props.bgc ? "#ebecf0" : "transparent")};
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  transition: 0.1s linear;

  @media ${device.laptop} {
    margin: 0 auto 0 0;
  }
`;

// COMPONENT //

const MainField = ({
  wholeList,
  listOption,
  addNewCard,
  deleteCard,
  addNewList,
}) => {
  const [showList, showListHandle] = useState(false);

  const showAddListHandle = () => {
    showListHandle(true);
  };

  const [listInputValue, setListInput] = useState("");

  const listInputHandle = (e) => {
    setListInput(e.target.value);
  };

  return (
    <StyledMain className="main">
      <StyledWrapList>
        {wholeList.map((list) => (
          <List
            key={list.id}
            id={list.id}
            title={list.title}
            tasks={list.tasks}
            listOption={listOption}
            addNewCard={addNewCard}
            deleteCard={deleteCard}
            showListHandle={showListHandle}
            setListInput={setListInput}
          />
        ))}
      </StyledWrapList>
      <StyledWrapDiv bgc={showList ? true : false}>
        <StyledListInput
          placeholder="Add another list"
          onClick={showAddListHandle}
          onChange={(e) => listInputHandle(e)}
          className="list"
          value={listInputValue}
        />
        {showList ? (
          <StyledButton
            onClick={() =>
              addNewList(listInputValue, showListHandle, setListInput)
            }
          >
            Add List
          </StyledButton>
        ) : null}
      </StyledWrapDiv>
    </StyledMain>
  );
};

export default MainField;
