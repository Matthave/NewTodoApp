import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

const StyledListTitle = styled.h3`
  width: 100%;
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

const StyledAddTask = styled.button`
  width: 150px;
  padding: 10px;
  margin-top: 15px;
  background-color: #eaecf0;
  cursor: pointer;
`;

const StyledPerecntage = styled.h3`
  color: #42516e;
`;

const StyledBarContainer = styled.span`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border: 1px solid #888;
  border-radius: 5px;
  margin: 0 10px;
`;

const StyledBardInner = styled.span`
  position: absolute;
  background-color: #5aac44;
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
  margin: 15px 0 10px;

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
  flex-grow: 1;
  align-self: center;
  font-size: 13px;
`;

function TasksListInDetailCoverView({
  listOfAllTasksList,
  listName,
  progressbar,
  subTasksList,
  subTaskToggle,
  subTaskToggleVisi,
  subTaskInupChange,
  subTaskInputValue,
  addSubTaskFunc,
  makeThisTaskDone,
  activeSubtasks,
  unActiveSubtasks,
  totalOfSubTasks,
}) {
  return (
    <StyledWrap>
      <StyledListTitle>{listName}</StyledListTitle>
      <StyledBarWrap>
        <StyledPerecntage>
          {totalOfSubTasks === 0
            ? "0%"
            : `${Math.floor((unActiveSubtasks / totalOfSubTasks) * 100)}%`}
        </StyledPerecntage>
        <StyledBarContainer>
          <StyledBardInner
            style={{ width: `${(unActiveSubtasks / totalOfSubTasks) * 100}%` }}
          />
        </StyledBarContainer>
      </StyledBarWrap>
      <StyledTasksList>
        {subTasksList.map((ele) => (
          <StyledSubTaskWrap key={ele.id}>
            <StyledCheckedBox
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
              style={{
                textDecoration: `${ele.active ? "initial" : "line-through"}`,
              }}
            >
              {ele.name}
            </StyledSubTaskName>
          </StyledSubTaskWrap>
        ))}
      </StyledTasksList>
      {subTaskToggleVisi ? (
        <>
          <StyledInput
            onChange={(e) => subTaskInupChange(e)}
            value={subTaskInputValue}
          />
          <StyledButton onClick={() => addSubTaskFunc()}>
            Add SubTask
          </StyledButton>
        </>
      ) : (
        <StyledAddTask onClick={() => subTaskToggle()}>
          Add Element
        </StyledAddTask>
      )}
    </StyledWrap>
  );
}

export default TasksListInDetailCoverView;
