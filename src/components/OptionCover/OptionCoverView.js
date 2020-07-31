import React from "react";
import styled from "styled-components";
import OptionCoverListView from "./OptionCoverListView/OptionCoverListView";
import MoveToAnotherListBox from "../MoveToAnotherList/MoveToAnotherListBox";
import Labels from "../../Containers/Labels/Labels";

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 0;
`;

const StyledOptionBox = styled.div`
  position: fixed;
  transform: translate(0, -50%);
  height: 400px;
  width: 450px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  z-index: 999;
`;

const StyledTextArea = styled.textarea`
  height: 100px;
  width: 260px;
  padding: 7.5px;
  padding-top: 0px;
  border-radius: 5px;
  resize: none;
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
  border-radius: 5px;
  background-color: #fff;
`;

const StyledWrapTextAndLabels = styled.div`
  width: 260px;
  height: 110px;
  align-self: flex-start;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #fff;
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
          />
        ) : null}
        {toggleDetailMove ? (
          <MoveToAnotherListBox
            taskTitle={taskTitle}
            wholeList={wholeList}
            moveCardToAnotherList={moveCardToAnotherList}
            taskId={optionCoverData[0].clickedCardId}
            changeListInDetails={changeListInDetails}
            taskTitleList={optionCoverData[0].currentListName}
            byElement={"byOptionMove"}
            optionCover={true}
            copyVisibility={copyVisibility}
            matchedColorsToThisCard={matchedColorsToThisCard}
          />
        ) : null}
      </StyledOptionBox>
    </StyledCover>
  );
};

export default OptionCover;
