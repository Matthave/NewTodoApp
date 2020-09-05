import React from "react";
import List from "../../Containers/List/List";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: flex-start;
  width: auto;
  min-height: calc(100vh - 80px);
  background-color: #4bbf6b;
  padding: 0px 6px 0px 6px;
  overflow-x: scroll;
  overflow-y: hidden;
  transition: 0.1s linear;
  padding-top: 15px;
`;

const StyledListInput = styled.input`
  width: 265px;
  background-color: #76ce8e;
  border-radius: 4px;
  padding: 11px 7.5px;
  text-align: left;
  cursor: pointer;
  transition: 0.1s linear;
  box-shadow: 0px 0px 1px 0px #888;
  font-size: 15px;
  pointer-events: ${(props) => (props.disabled ? "none" : null)};

  &::placeholder {
    color: inherit;
  }

  &:focus {
    background-color: #fff !important;
    ::placeholder {
      color: #888;
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
  height: 30px;
  line-height: 30px;
  background-color: #5aac44;
  border-radius: 5px;
  color: white;
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
  max-height: 84.2px;
  border-radius: 4px;
  padding: 0px 5px 5px 5px;
  margin-right: 125px;
  padding-top: ${(props) => (props.bgc ? "5px" : "0px")};
  background-color: ${(props) => (props.bgc ? "#ebecf0" : "transparent")};
  transition: 0.1s linear;
`;

function CoreFieldView({
  scroll,
  mousePositionX,
  wholeList,
  listOption,
  addNewCard,
  replaceCard,
  archiveCard,
  showListHandle,
  setListInput,
  scrollPosition,
  isDragAndDropTrue,
  visibilityOptionFunction,
  taskDetailsFunction,
  updateListTitle,
  moveListToAnotherPlace,
  clearAllBlankSpan,
  showList,
  showAddListHandle,
  listInputHandle,
  listInputValue,
  addNewList,
  addNewListByKey,
  addNewListByButton,
  copyNewList,
  hideFontSizeLabel,
  setHideFontSizeLabel,
  listOfAllTasksList,
  setWholeList,
  moveCardToAnotherList,
  listOfAllCover,
  listOfAllComments,
  listOfAllTerms,
  listOfAllPriorityTasks,
  listOfAllBadges,
  listOfAllTasksId,
  slideMenuState,
  refresh,
  setRefresh,
}) {
  return (
    <StyledMain
      className="main"
      onScroll={(e) => scroll(e)}
      onMouseMove={(e) => mousePositionX(e)}
    >
      <StyledWrapList className="wrapList">
        {wholeList.map((list) => (
          <List
            wholeList={wholeList}
            key={list.id}
            id={list.id}
            title={list.title}
            tasks={list.tasks}
            listOption={listOption}
            addNewCard={addNewCard}
            replaceCard={replaceCard}
            archiveCard={archiveCard}
            showListHandle={showListHandle}
            setListInput={setListInput}
            scrollPosition={scrollPosition}
            isDragAndDropTrue={isDragAndDropTrue}
            visibilityOptionFunction={visibilityOptionFunction}
            taskDetailsFunction={taskDetailsFunction}
            updateListTitle={updateListTitle}
            moveListToAnotherPlace={moveListToAnotherPlace}
            clearAllBlankSpan={clearAllBlankSpan}
            hideFontSizeLabel={hideFontSizeLabel}
            setHideFontSizeLabel={setHideFontSizeLabel}
            listOfAllTasksList={listOfAllTasksList}
            setWholeList={setWholeList}
            moveCardToAnotherList={moveCardToAnotherList}
            addNewList={addNewList}
            copyNewList={copyNewList}
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
        ))}
        <StyledWrapAddListBtn bgc={showList ? true : false}>
          <StyledListInput
            disabled={wholeList.length === 10}
            bgc={showList ? true : false}
            placeholder=" + Add another list"
            onClick={showAddListHandle}
            onChange={(e) => listInputHandle(e)}
            className="addList transparent"
            value={listInputValue}
            onKeyPress={(e) => addNewListByKey(e)}
          />
          {showList ? (
            <StyledButton onClick={() => addNewListByButton(listInputValue)}>
              Add List
            </StyledButton>
          ) : null}
        </StyledWrapAddListBtn>
      </StyledWrapList>
    </StyledMain>
  );
}

export default CoreFieldView;
