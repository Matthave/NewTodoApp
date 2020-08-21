import React from "react";
import TasksListInDetailCover from "../../../../Containers/TasksList/TasksListInDetailCover/TasksListInDetailCover";
import styled from "styled-components";

const StyledDetailMarks = styled.div`
  flex-grow: 1;
`;

const StyledDetailDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledTitle = styled.h2`
  width: 100%;
  color: #42516e;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  background-color: #eaecf0;
  margin: 0px auto 10px auto;
  padding: 7.5px 5px;
  border-radius: 3px;
  min-height: 75px;
  resize: none;
  cursor: pointer;
  transition: 0.1s linear;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  margin-left: ${(props) => (props.marginLeft ? "6" : "none")};
  font-size: ${(props) => (props.biggerSize ? "23px" : "17px")};
  color: #42516e;
  cursor: ${(props) => (props.pointer ? "pointer" : "initial")};
  vertical-align: middle;
`;

const StyledLabelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledPlaceholder = styled.h3`
  text-align: center;
  color: #172b4d;
  font-size: 14px;
  font-weight: 400;
`;

const StyledButton = styled.button`
  width: 75px;
  height: 32.5px;
  background-color: ${(props) => (props.greyBgc ? "#EAECF0" : "#5aac44")};
  border-radius: 4px;
  margin-right: 6px;
  color: ${(props) => (props.marginLeft ? "#42516e" : "#fff")};
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: ${(props) => (props.hoverBgc ? "#dadce0 " : "#6abc54")};
  }
`;

const StyledCommentOptionWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const StyledComment = styled.h3`
  width: 300px;
  font-size: 15px;
  font-weight: 500;
  margin-right: 10px;
  word-break: break-all;
  color: #42516e;
  cursor: pointer;
`;

const StyledTermWrap = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTerm = styled.h3`
  background-color: #eaecf0;
  border-radius: 4px;
  padding: 7.5px 10px;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;

  &:hover {
    background-color: #dadce0;
  }
`;

const StyledStatus = styled.span`
  padding: 2.5px 5px;
  margin: 0 3px;
  border-radius: 3px;
  color: #fff;
`;

const StyledCheckedBox = styled.span`
  position: relative;
  width: 17px;
  height: 17px;
  border-radius: 2px;
  margin-right: 7px;
  color: white;
  cursor: pointer;
  transition: 0.1s linear;
`;

const StyledCheckIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 8px;
`;

function DetailCoverMarks({
  matchedColorsToThisCard,
  toggleCommentFeature,
  toggleCommentVisibility,
  commentChange,
  commentValue,
  addCommentToCard,
  taskId,
  listOfAllComments,
  editCommentToCard,
  matchedTerms,
  termDoneCheckbox,
  matchedListTasks,
  listOfAllTasksList,
  addNewCard,
  currentListId,
  toggleCurrentListVisiFunc,
  closeAllListsWindowsFunc,
  tasksListVisi,
}) {
  return (
    <StyledDetailMarks className="detailCoverClose">
      <div>
        <StyledTitle marginTop className="detailCoverClose">
          <StyledIcon className="fas fa-tag detailCoverClose" />
          Labels
        </StyledTitle>
        {matchedColorsToThisCard.length === 0 ? (
          <StyledPlaceholder className="detailCoverClose">
            This card have no labels yet
          </StyledPlaceholder>
        ) : (
          <StyledLabelsWrap className="detailCover_labelsWrap detailCoverClose">
            {matchedColorsToThisCard.map((ele) => (
              <div
                key={ele.color}
                id={`${ele.labelId}DetailCover`}
                className={`labelElement_DetailCover`}
                style={{
                  backgroundColor: ele.color,
                  margin: "0px 5px 5px 0px",
                }}
                onClick={() => toggleCurrentListVisiFunc("labelVisi")}
              >
                {ele.name}
              </div>
            ))}
          </StyledLabelsWrap>
        )}
      </div>
      <StyledTitle marginTop className="detailCoverClose">
        <StyledIcon className="far fa-clock detailCoverClose" />
        Terms
      </StyledTitle>
      {matchedTerms.length === 0 ? (
        <StyledPlaceholder className="detailCoverClose">
          This card has no deadline yet
        </StyledPlaceholder>
      ) : (
        <>
          {matchedTerms.map((ele) => (
            <StyledTermWrap key={ele.term}>
              <StyledCheckedBox
                className="detailCoverClose"
                onClick={() => termDoneCheckbox(taskId)}
                style={{
                  backgroundColor: `${
                    ele.status === "Done" ? "#0079BF" : "white"
                  }`,
                  border: `${
                    ele.status === "Done"
                      ? "2px solid #0079BF"
                      : "2px solid #aaa"
                  }`,
                }}
              >
                <StyledCheckIcon className="fas fa-check detailCoverClose" />
              </StyledCheckedBox>
              <StyledTerm
                onClick={() => toggleCurrentListVisiFunc("datePickerVisi")}
              >
                {`${ele.day} ${ele.monthName} ${ele.year}`} at{" "}
                {`${ele.hour}:${ele.minutes}`}
                <StyledStatus
                  style={{
                    backgroundColor: ele.statusColor,
                    opacity: `${ele.statusColor === "#888" ? 0 : 1}`,
                  }}
                >{`${ele.status}`}</StyledStatus>
                <StyledIcon
                  className="fas fa-chevron-down"
                  pointer
                  marginLeft
                />
              </StyledTerm>
            </StyledTermWrap>
          ))}
        </>
      )}
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
            toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
            closeAllListsWindowsFunc={closeAllListsWindowsFunc}
            tasksListVisi={tasksListVisi}
            addNewCard={addNewCard}
            currentListId={currentListId}
          />
        ))
      )}
      <StyledDetailDescription className="detailCoverClose">
        <StyledTitle className="detailCoverClose">
          <StyledIcon className="fas fa-stream" />
          Description
          <StyledButton
            greyBgc
            marginLeft
            hoverBgc
            className="detailCoverClose"
            style={{
              color: `${
                listOfAllComments.length !== 0 ? "#42516e" : "rgba(0,0,0,0)"
              }`,
              backgroundColor: `${
                listOfAllComments.length !== 0 ? "#EAECF0" : "rgba(0,0,0,0)"
              }`,
              cursor: `${
                listOfAllComments.length !== 0 ? "pointer" : "initial"
              }`,
              marginLeft: `${listOfAllComments.length !== 0 ? "6px" : "50px"}`,
            }}
            onClick={(e) => editCommentToCard(toggleCommentVisibility)}
          >
            Edit
          </StyledButton>
        </StyledTitle>
        {listOfAllComments.length !== 0 ? null : (
          <StyledTextArea
            placeholder="Click to add more detailed comment..."
            className="input textArea detailCoverClose"
            onClick={() => toggleCommentFeature(true)}
            onChange={(e) => commentChange(e)}
            onKeyPress={(e) => addCommentToCard(e, taskId, commentValue)}
            value={commentValue}
          />
        )}
        {toggleCommentVisibility ? (
          <StyledCommentOptionWrap className="detailCoverClose">
            <StyledButton
              className="commentBtn detailCoverClose"
              onClick={(e) => addCommentToCard(e, taskId, commentValue)}
            >
              SAVE
            </StyledButton>
            <StyledIcon
              biggerSize
              pointer
              className="far fa-times-circle detailCoverClose"
            />
          </StyledCommentOptionWrap>
        ) : null}
        {listOfAllComments.map((ele) => (
          <StyledComment
            className="detailCoverClose"
            key={ele.id}
            onClick={(e) => editCommentToCard(toggleCommentVisibility)}
          >
            {ele.comment}
          </StyledComment>
        ))}
      </StyledDetailDescription>
    </StyledDetailMarks>
  );
}

export default DetailCoverMarks;
