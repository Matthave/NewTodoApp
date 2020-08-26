import React from "react";
import SubtasksOption from "../../../Containers/TasksList/SubtasksOption/SubtasksOption";
import styled from "styled-components";

const StyledWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 2.5px;
`;

const StyledListTitle = styled.h3`
  flex-grow: 1;
  align-self: center;
  font-size: 14px;
  margin-bottom: 10px;
  color: #42516e;
`;

const StyledBarWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const StyledTasksList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledGreyButton = styled.button`
  width: 150px;
  height: 32.5px;
  padding: 5px;
  margin-top: ${(props) => (props.marginTop0 ? "0px" : "15px")};
  margin-bottom: 10px;
  margin-right: ${(props) => (props.marginRight12 ? "12.5px" : "0px")};
  background-color: #eaecf0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #dadce0;
  }
`;

const StyledPerecntage = styled.h3`
  width: 35px;
  color: #42516e;
`;

const StyledBarContainer = styled.span`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border: 0.5px solid #bbb;
  border-radius: 5px;
  margin: 0 10px;
`;

const StyledBarInner = styled.span`
  position: absolute;
  border-radius: 5px;
  transition: 0.2s linear;
  height: 100%;
`;

const StyledInput = styled.input`
  width: 90%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 15px 0px 10px;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledButton = styled.button`
  width: 120px;
  height: 32.5px;
  background-color: #5aac44;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: #6abc54;
  }
`;

const StyledSubTaskWrap = styled.div`
  position: relative;
  display: flex;
  width: 95%;
  padding: 7.5px;
  margin: 5px auto;
  color: #42516e;
  &:hover {
    background-color: #eaecf0;
  }
`;

const StyledCheckedBox = styled.span`
  position: relative;
  align-self: center;
  width: 17px;
  height: 17px;
  border-radius: 2px;
  margin-right: 10px;
  color: white;
  cursor: pointer;
  transition: 0.1s linear;
  background-color: red;
`;

const StyledCheckIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
`;

const StyledSubTaskName = styled.h3`
  width: 250px;
  word-break: break-all;
  flex-grow: 1;
  align-self: center;
  font-size: 13px;
`;

const StyledWarnningSpan = styled.span`
  width: 100%;
  opacity: 0;
  color: red;
  font-size: 10px;
  margin-top: 10px;
`;

const StyledEllipsis = styled.span`
  align-self: center;
`;

function TasksListInDetailCoverView({
  listName,
  taskId,
  subTasksList,
  subTaskToggle,
  subTaskToggleVisi,
  subTaskInupChange,
  subTaskInputValue,
  addSubTaskFunc,
  makeThisTaskDone,
  unActiveSubtasks,
  totalOfSubTasks,
  deleteTasksList,
  subTaskOptionsVisiToggle,
  subTaskOptionsVisi,
  addNewCard,
  currentListId,
  listOfAllTasksList,
  subTaskNameOptionClicked,
}) {
  return (
    <StyledWrap className={"detailCoverClose"}>
      <StyledListTitle className={"detailCoverClose"}>
        {listName}
      </StyledListTitle>
      <StyledGreyButton
        className={"detailCoverClose"}
        marginTop0
        marginRight12
        onClick={() => deleteTasksList(listName, taskId)}
      >
        Delete
      </StyledGreyButton>
      <StyledBarWrap className={"detailCoverClose"}>
        <StyledPerecntage className={"detailCoverClose"}>
          {totalOfSubTasks === 0
            ? "0%"
            : `${Math.floor(
                (unActiveSubtasks /
                  `${totalOfSubTasks === 0 ? 1 : totalOfSubTasks}`) *
                  100
              )}%`}
        </StyledPerecntage>
        <StyledBarContainer className={"detailCoverClose"}>
          <StyledBarInner
            className={"detailCoverClose"}
            style={{
              width: `${
                (unActiveSubtasks /
                  `${totalOfSubTasks === 0 ? 1 : totalOfSubTasks}`) *
                100
              }%`,
              backgroundColor: `${
                unActiveSubtasks === totalOfSubTasks ? "#5aac44" : "#5ba4cf"
              }`,
            }}
          />
        </StyledBarContainer>
      </StyledBarWrap>
      <StyledTasksList className={"detailCoverClose"}>
        {subTasksList.map((ele) => (
          <StyledSubTaskWrap key={ele.id} className={"detailCoverClose"}>
            <StyledCheckedBox
              className={"detailCoverClose"}
              style={{
                backgroundColor: `${ele.active ? "#fff" : "#0079bf"}`,
                border: `${
                  ele.active ? "2px solid #ccc" : "2px solid #0079bf"
                }`,
              }}
              onClick={() => makeThisTaskDone(ele.id, ele.active)}
            >
              <StyledCheckIcon className="fas fa-check" />
            </StyledCheckedBox>
            <StyledSubTaskName
              className={"detailCoverClose"}
              style={{
                textDecoration: `${ele.active ? "initial" : "line-through"}`,
              }}
            >
              {ele.name}
            </StyledSubTaskName>
            <StyledEllipsis
              className="fas fa-ellipsis-h"
              onClick={() => subTaskOptionsVisiToggle(ele.name)}
            />
          </StyledSubTaskWrap>
        ))}
        {subTaskOptionsVisi ? (
          <SubtasksOption
            subTaskNameOptionClicked={subTaskNameOptionClicked}
            subTaskOptionsVisiToggle={subTaskOptionsVisiToggle}
            listOfAllTasksList={listOfAllTasksList}
            listName={listName}
            taskId={taskId}
            addNewCard={addNewCard}
            currentListId={currentListId}
          />
        ) : null}
      </StyledTasksList>
      {subTaskToggleVisi ? (
        <>
          <StyledInput
            className={"detailCoverClose"}
            onChange={(e) => subTaskInupChange(e)}
            value={subTaskInputValue}
          />
          <StyledButton
            onClick={() => addSubTaskFunc()}
            className={"detailCoverClose"}
          >
            Add SubTask
          </StyledButton>
          <StyledWarnningSpan className="subTaskWarnSpan">
            You can't add the same or blank subTasks
          </StyledWarnningSpan>
        </>
      ) : (
        <StyledGreyButton
          onClick={() => subTaskToggle()}
          className={"detailCoverClose"}
        >
          Add Element
        </StyledGreyButton>
      )}
    </StyledWrap>
  );
}

export default TasksListInDetailCoverView;
