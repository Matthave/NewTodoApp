import React from "react";
import Card from "../../components/Card/Card";
import ListButtons from "./ListButtons/ListButtons";
import ListInput from "./ListInput/ListInput";
import ListOptions from "./ListOptions/ListOptions";
import ListMove from "../../Containers/List/ListMove";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  height: ${(props) => (props.showStyle ? "60px" : "31px")};
  background-color: ${(props) => (props.showStyle ? "#fff" : "#ebecf0")};
  border-radius: 5px;
  padding: 7.5px;
  color: #779;
  resize: none;
  cursor: pointer;
  transition: 0.1s linear;
  box-shadow: ${(props) =>
    props.showStyle ? "0px 0.5px 0px 0.5px #aaa" : "none"};

  &:hover {
    background-color: ${(props) => (props.showStyle ? null : "#dddfe5")};
  }
`;

function ListView({
  mouseDownFeature,
  selectedList,
  listOptionToggle,
  wholeList,
  setWholeList,
  id,
  tasks,
  scrollPosition,
  isDragAndDropTrue,
  visibilityOptionFunction,
  taskDetailsFunction,
  inputTitle,
  clearAllBlankSpan,
  showAddField,
  textAreaValue,
  setTextAreaValue,
  swapAddFieldFeature,
  setListTitle,
  addNewCardFeature,
  deleteCardFeatureByMove,
  hideFontSizeLabel,
  setHideFontSizeLabel,
  listOfAllTasksList,
  listVisiOptions,
  deleteList,
  addNewCardFromList,
  moveListVisibilityFunc,
  moveListVisibility,
  possibleMoveListVisi,
  togglePossibleMoveForList,
  deleteCardsFromListFunc,
}) {
  return (
    <div
      className="lists"
      id={`list${id}`}
      onMouseDown={(e) => mouseDownFeature(e)}
    >
      <ListInput
        selectedList={selectedList}
        id={id}
        inputTitle={inputTitle}
        listOptionToggle={listOptionToggle}
        setListTitle={setListTitle}
      />

      {tasks.map((task) => (
        <Card
          wholeList={wholeList}
          key={task.id}
          task={task}
          listId={id}
          addNewCardFeature={addNewCardFeature}
          deleteCardFeatureByMove={deleteCardFeatureByMove}
          scrollPosition={scrollPosition}
          isDragAndDropTrue={isDragAndDropTrue}
          visibilityOptionFunction={visibilityOptionFunction}
          taskDetailsFunction={taskDetailsFunction}
          inputTitle={inputTitle}
          clearAllBlankSpan={clearAllBlankSpan}
          hideFontSizeLabel={hideFontSizeLabel}
          setHideFontSizeLabel={setHideFontSizeLabel}
          listOfAllTasksList={listOfAllTasksList}
        />
      ))}
      <div className="blank" />
      <StyledTextArea
        value={showAddField ? textAreaValue : "Add Another Card"}
        onChange={(e) => setTextAreaValue(e)}
        onClick={() => swapAddFieldFeature("textArea")}
        showStyle={showAddField}
        placeholder="Add title for this card..."
      />
      <ListButtons
        showAddField={showAddField}
        id={id}
        textAreaValue={textAreaValue}
        addNewCardFeature={addNewCardFeature}
        swapAddFieldFeature={swapAddFieldFeature}
      />
      {listVisiOptions ? (
        <ListOptions
          deleteList={deleteList}
          listId={id}
          addNewCardFromList={addNewCardFromList}
          moveListVisibilityFunc={moveListVisibilityFunc}
          deleteCardsFromListFunc={deleteCardsFromListFunc}
        />
      ) : null}
      {moveListVisibility ? (
        <ListMove
          togglePossibleMoveForList={togglePossibleMoveForList}
          possibleMoveListVisi={possibleMoveListVisi}
          moveListVisibilityFunc={moveListVisibilityFunc}
          wholeList={wholeList}
          listId={id}
          setWholeList={setWholeList}
        />
      ) : null}
    </div>
  );
}
export default ListView;
