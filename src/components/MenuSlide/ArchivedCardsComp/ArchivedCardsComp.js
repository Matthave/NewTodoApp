import React from "react";
// import TasksPreviewCard from "../../TasksList/TasksPreviewInCard/TaskPreviewInCard";
import DeleteLastWarning from "./DeleteLastWarning/DeleteLastWarning";
import MoveToAnotherList from "../../MoveToAnotherList/MoveToAnotherListBox";
import styled from "styled-components";
import ArchivedCard from "./ArchivedCard/ArchivedCard";

const StyledWrapArchivedCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.heightAuto ? "50vh" : "0px")};
  overflow-y: ${(props) => (props.overflowScroll ? "scroll" : "hidden")};
  transition: 0.2s linear;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const StyledBlankTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #172b4d;
  margin: auto 0;
`;

const StyledWrapArchivedOptions = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  padding: 5px 35px;
`;

const StyledOption = styled.h3`
  text-align: center;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
  color: #777;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    color: #172b4d;
  }
`;

const StyledInput = styled.input`
  width: 85%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 5px auto;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

function ArchivedCardsComp({
  archivedElementVisi,
  listOfAllArchivedCard,
  archivedSearchFunc,
  archivedSearchValue,
  taskDetailsFunction,
  warningBeforeDeleteFunc,
  moveToActiveFunc,
  moveToActiveVisi,
  warningBeforeDeleteVisi,
  deleteCard,
  taskIdToDelete,
  moveTaskData,
  wholeList,
  moveCardToAnotherList,
  toggleCurrentListVisiFunc,
  listOfAllCover,
}) {
  return (
    <StyledWrapArchivedCards
      className="menu"
      heightAuto={archivedElementVisi}
      overflowScroll={archivedElementVisi}
    >
      <StyledInput
        className="menu"
        placeholder="Search the archive..."
        onChange={(e) => archivedSearchFunc(e)}
        value={archivedSearchValue}
      />
      {listOfAllArchivedCard.length !== 0 ? (
        listOfAllArchivedCard.map((archivedCard) => (
          <div key={archivedCard.id} className="menu">
            <ArchivedCard
              archivedCard={archivedCard}
              taskDetailsFunction={taskDetailsFunction}
              listOfAllCover={listOfAllCover}
            />
            <StyledWrapArchivedOptions>
              <StyledOption
                className="menu"
                onClick={() =>
                  moveToActiveFunc(
                    archivedCard.id,
                    archivedCard.taskName,
                    archivedCard.currentList,
                    archivedCard.currentListName
                  )
                }
              >
                Move to list
              </StyledOption>
              <StyledOption
                className="menu"
                onClick={() => warningBeforeDeleteFunc(archivedCard.id)}
              >
                Delete
              </StyledOption>
            </StyledWrapArchivedOptions>
          </div>
        ))
      ) : (
        <StyledBlankTitle className="menu">
          There is no archived elements
        </StyledBlankTitle>
      )}
      {warningBeforeDeleteVisi ? (
        <DeleteLastWarning
          taskIdToDelete={taskIdToDelete}
          deleteCard={deleteCard}
        />
      ) : null}
      {moveToActiveVisi ? (
        <MoveToAnotherList
          taskTitle={moveTaskData.taskTitle}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          taskId={moveTaskData.taskId}
          taskTitleList={moveTaskData.currentListName}
          toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
          currentListId={moveTaskData.currentListId}
          closeInThisState={"moveToActiveVisi"}
        />
      ) : null}
    </StyledWrapArchivedCards>
  );
}

export default ArchivedCardsComp;
