import React from "react";
// import TasksPreviewCard from "../../TasksList/TasksPreviewInCard/TaskPreviewInCard";
import DeleteLastWarning from "./DeleteLastWarning/DeleteLastWarning";
import MoveToAnotherList from "../../MoveToAnotherList/MoveToAnotherListBox";
import styled from "styled-components";

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

const StyledCard = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 40px;
  max-width: 260px;
  word-break: break-all;
  margin: 20px auto 5px auto;
  padding: 9px 7.5px;
  font-size: 1.4rem;
  box-shadow: 0px 0.5px 0px 0.5px #aaa;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  color: black;
`;

const StyledContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  padding: 2px;
`;

const StyledContent = styled.h3`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 400;
  color: #172b4d;
`;

const StyledIcon = styled.span`
  margin-right: 5px;
  font-size: 12.5px;
  vertical-align: middle;
`;

const StyledTermInCard = styled.span`
  color: #888;
  font-size: 12.5px;
  letter-spacing: 0.5px;
  margin-left: 3px;
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
            <StyledCard
              className="menu"
              onDoubleClick={(e) =>
                taskDetailsFunction(
                  archivedCard.taskName,
                  archivedCard.currentListName,
                  archivedCard.currentList,
                  archivedCard.id
                )
              }
              id={archivedCard.id}
              style={{
                border:
                  archivedCard.priority === "priority"
                    ? "1px solid #db4a36"
                    : null,
              }}
            >
              <div
                className="card_wrapLabel"
                style={{
                  pointerEvents: "none",
                }}
              >
                {archivedCard.badges.map((ele) => (
                  <div
                    key={ele.color}
                    id={ele.labelId}
                    className="labelElement"
                    style={{
                      backgroundColor: ele.color,
                      pointerEvents: "none",
                    }}
                  >
                    {ele.name}
                  </div>
                ))}
              </div>
              <StyledContentWrap>
                <StyledContent>{archivedCard.taskName}</StyledContent>
              </StyledContentWrap>

              <div
                style={{ width: "100%", pointerEvents: "none" }}
                id={`${archivedCard.id}term`}
              >
                {archivedCard.date.map((ele) => (
                  <StyledTermInCard
                    key={ele.id}
                    className={ele.classN}
                    style={{
                      backgroundColor: ele.statusColor,
                      color: ele.fontColor,
                    }}
                  >
                    <StyledIcon className="far fa-clock" />
                    {`${ele.day} ${ele.monthName} ${ele.status}`}
                  </StyledTermInCard>
                ))}
              </div>
            </StyledCard>
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
