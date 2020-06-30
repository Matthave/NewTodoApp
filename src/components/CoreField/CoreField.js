import React, { useState } from "react";
import styled from "styled-components";
import List from "../List/List";

const StyledMain = styled.main`
  display: flex;
  align-items: flex-start;
  width: auto;
  min-height: calc(100vh - 40px);
  background-color: #4bbf6b;
  padding: 40px 6px 0px 6px;
  overflow-x: scroll;
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
  font-size: 15px;

  &::placeholder {
    color: white;
  }

  &:focus {
    background-color: #fff !important;
    ::placeholder {
      color: black;
    }
  }
`;

const StyledWrapList = styled.div`
  display: flex;
  width: auto;
  flex-direction: row;
  height: auto;
  background-color: transparent;
  margin-bottom: 10px;
  padding: 3px 5px;
  border-radius: 5px;
  transition: 0.1s linear;
`;

const StyledButton = styled.button`
  align-self: flex-start;
  width: 50%;
  background-color: #5aac44;
  border-radius: 5px;
  color: white;
  padding: 8px 20px;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    background-color: #67ba50;
  }
`;

const StyledWrapAddListBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  width: 275px;
  border-radius: 4px;
  padding: 0px 5px 5px 5px;
  padding-top: ${(props) => (props.bgc ? "5px" : "0px")};
  background-color: ${(props) => (props.bgc ? "#ebecf0" : "transparent")};
  transition: 0.1s linear;
`;

// COMPONENT //

const MainField = ({
  wholeList,
  listOption,
  addNewCard,
  deleteCard,
  addNewList,
  elementHoverEnter,
  elementHoverLeave,
}) => {
  const [showList, showListHandle] = useState(false);

  const showAddListHandle = () => {
    showListHandle(true);
  };

  const [listInputValue, setListInput] = useState("");

  const listInputHandle = (e) => {
    setListInput(e.target.value);
  };

  const addNewListByKey = (e) => {
    if (e.which === 13 && showList) {
      addNewList(listInputValue, showListHandle, setListInput);
    }
  };

  return (
    <StyledMain className="main">
      <StyledWrapList>
        {wholeList.map((list) => (
          <List
            wholeList={wholeList}
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
        <StyledWrapAddListBtn bgc={showList ? true : false}>
          <StyledListInput
            bgc={showList ? true : false}
            placeholder="Add another list"
            onClick={showAddListHandle}
            onChange={(e) => listInputHandle(e)}
            className="list"
            value={listInputValue}
            onKeyPress={(e) => addNewListByKey(e)}
            onMouseEnter={(e) => elementHoverEnter(e)}
            onMouseLeave={(e) => elementHoverLeave(e)}
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
        </StyledWrapAddListBtn>
      </StyledWrapList>
    </StyledMain>
  );
};

export default MainField;
