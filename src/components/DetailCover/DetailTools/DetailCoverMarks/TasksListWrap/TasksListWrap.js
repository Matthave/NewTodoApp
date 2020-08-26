import React from "react";
import TasksListInDetailCover from "../../../../../Containers/TasksList/TasksListInDetailCover/TasksListInDetailCover";
import styled from "styled-components";

const StyledTaskisListWrap = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledPlaceholder = styled.h3`
  text-align: center;
  color: #172b4d;
  font-size: 14px;
  font-weight: 400;
`;

const StyledTitle = styled.h2`
  width: 100%;
  color: #42516e;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  margin-left: ${(props) => (props.marginLeft ? "6" : "none")};
  font-size: ${(props) => (props.biggerSize ? "23px" : "17px")};
  color: #42516e;
  cursor: ${(props) => (props.pointer ? "pointer" : "initial")};
  vertical-align: middle;
`;

function TasksListWrap({
  matchedListTasks,
  listOfAllTasksList,
  taskId,
  closeAllListsWindowsFunc,
  tasksListVisi,
  addNewCard,
  currentListId,
}) {
  return (
    <StyledTaskisListWrap>
      <StyledTitle marginTop className="detailCoverClose">
        <StyledIcon className="fas fa-check-double detailCoverClose" />
        Tasks List
      </StyledTitle>
      {matchedListTasks.length === 0 ? (
        <StyledPlaceholder className="detailCoverClose">
          This card has no tasks list yet
        </StyledPlaceholder>
      ) : (
        matchedListTasks.map((ele) => (
          <TasksListInDetailCover
            key={ele.listName}
            listOfAllTasksList={listOfAllTasksList}
            listName={ele.listName}
            subTasksList={ele.subTasksList}
            taskId={taskId}
            unActiveSubtasks={ele.unActiveSubtasks}
            totalOfSubTasks={ele.totalOfSubTasks}
            closeAllListsWindowsFunc={closeAllListsWindowsFunc}
            tasksListVisi={tasksListVisi}
            addNewCard={addNewCard}
            currentListId={currentListId}
          />
        ))
      )}
    </StyledTaskisListWrap>
  );
}

export default TasksListWrap;
