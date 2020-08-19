import React from "react";
import styled from "styled-components";
import OptionCoverListView from "./OptionCoverListView/OptionCoverListView";
import MoveToAnotherListBox from "../MoveToAnotherList/MoveToAnotherListBox";
import Labels from "../../Containers/Labels/Labels";
import DatePicker from "../../Containers/DatePicker/DatePicker";
import TaskPreviewCard from "../TasksList/TasksPreviewInCard/TaskPreviewInCard";

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 0;
  overflow-x: scroll;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.6);

  &::-webkit-scrollbar {
    height: 20px;
    position: relative;
    z-index: 999;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 1);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(45, 45, 45, 1);
    border-radius: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(55, 55, 55, 1);
  }
`;

const StyledOptionBox = styled.div`
  position: relative;
  transform: translate(0, -50%);
  height: 400px;
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  z-index: 999;
`;

const StyledTextArea = styled.textarea`
  width: 260px;
  min-height: 70px;
  padding: 0px 7.5px;
  font-size: 14px;
  color: #172b4d;
  resize: none;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const StyledSaveButton = styled.button`
  width: 75px;
  height: 32.5px;
  background-color: #5aac44;
  border-radius: 4px;
  margin-top: 6px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: #6abc54;
  }
`;

const StyledWrapLabels = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  min-height: 10px;
  padding: 5px 5px 0px 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #fff;
`;

const StyledWrapTextAndLabels = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  align-self: flex-start;
  margin-right: 10px;
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  font-size: 13px;
  transition: 0.1s linear;
`;

const StyledDate = styled.span`
  text-align: center;
  align-self: flex-start;
  padding: 5px 7.5px;
  background-color: rgba(255, 255, 255, 0.85);
  border-bottom-left-radius: 5px;
  font-size: 14px;
`;

const StyledWrapTerms = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  min-height: 25px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fff;
  color: #777;
`;

const OptionCover = ({
  optionCoverData,
  taskTitleFeature,
  taskTitle,
  updateCard,
  deleteCard,
  handleLabelsVisibility,
  labelsVisibility,
  toggleLabelColorToCard,
  listOfAllBadges,
  matchedColorsToThisCard,
  listOfAllTasksId,
  labelColors,
  setLabelColors,
  addPriorityForCards,
  toggleDetailMove,
  changeListInDetails,
  wholeList,
  moveCardToAnotherList,
  matchedPriority,
  copyVisibility,
  dateVisibility,
  toggleDateVisibility,
  toggleTermToCard,
  matchedTerms,
  unActiveTasks,
  totalTasks,
}) => {
  return (
    <StyledCover className="coverOption">
      <StyledOptionBox className="cover_box">
        <StyledWrapTextAndLabels>
          <StyledWrapLabels className="coverOption_wrapLabel">
            {matchedColorsToThisCard.map((ele) => (
              <div
                key={ele.color}
                id={`${ele.labelId}OptionCover`}
                className={`labelElement`}
                style={{ backgroundColor: ele.color }}
              >
                {ele.name}
              </div>
            ))}
          </StyledWrapLabels>
          <StyledTextArea
            className="textArea_Option"
            onChange={(e) => taskTitleFeature(e)}
            onKeyPress={(e) =>
              updateCard(
                e,
                taskTitle,
                optionCoverData[0].listId,
                optionCoverData[0].clickedCardId
              )
            }
            value={taskTitle}
          />
          <StyledWrapTerms>
            {matchedTerms.map((ele) => (
              <StyledDate
                key={ele.id}
                className={ele.classN}
                style={{
                  backgroundColor: ele.statusColor,
                  color: ele.fontColor,
                }}
              >
                <StyledIcon className="far fa-clock" />
                {`${ele.day} ${ele.monthName} ${ele.status}`}
              </StyledDate>
            ))}
            <TaskPreviewCard
              unActiveTasks={unActiveTasks}
              totalTasks={totalTasks}
            />
          </StyledWrapTerms>
          <StyledSaveButton
            className="cover_saveBtn"
            onClick={(e) =>
              updateCard(
                e,
                taskTitle,
                optionCoverData[0].listId,
                optionCoverData[0].clickedCardId
              )
            }
          >
            Save
          </StyledSaveButton>
        </StyledWrapTextAndLabels>
        <OptionCoverListView
          deleteCard={deleteCard}
          taskTitle={taskTitle}
          listId={optionCoverData[0].listId}
          handleLabelsVisibility={handleLabelsVisibility}
          optionCoverData={optionCoverData}
          addPriorityForCards={addPriorityForCards}
          changeListInDetails={changeListInDetails}
          matchedPriority={matchedPriority}
          dateVisibility={dateVisibility}
          toggleDateVisibility={toggleDateVisibility}
        />

        {labelsVisibility ? (
          <Labels
            handleLabelsVisibility={handleLabelsVisibility}
            optionCoverData={optionCoverData}
            toggleLabelColorToCard={toggleLabelColorToCard}
            taskId={optionCoverData[0].clickedCardId}
            listOfAllBadges={listOfAllBadges}
            listOfAllTasksId={listOfAllTasksId}
            labelColors={labelColors}
            setLabelColors={setLabelColors}
            optionCover={true}
          />
        ) : null}
        {toggleDetailMove ? (
          <MoveToAnotherListBox
            taskTitle={taskTitle}
            wholeList={wholeList}
            moveCardToAnotherList={moveCardToAnotherList}
            taskId={optionCoverData[0].clickedCardId}
            currentListId={optionCoverData[0].listId}
            changeListInDetails={changeListInDetails}
            taskTitleList={optionCoverData[0].currentListName}
            byElement={"byOptionMove"}
            optionCover={true}
            copyVisibility={copyVisibility}
            matchedColorsToThisCard={matchedColorsToThisCard}
          />
        ) : null}
        {dateVisibility ? (
          <DatePicker
            toggleDateVisibility={toggleDateVisibility}
            taskId={optionCoverData[0].clickedCardId}
            toggleTermToCard={toggleTermToCard}
            optionCover={true}
          />
        ) : null}
      </StyledOptionBox>
    </StyledCover>
  );
};

export default OptionCover;
