import React from "react";
import MenuSlideNavView from "./MenuSlideNavView/MenuSlideNavView";
import ArchivedCardsComp from "./ArchivedCardsComp/ArchivedCardsComp";
import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  top: calc(0% + 40px);
  bottom: 17.5px;
  right: 0;
  width: 320px;
  display: flex;
  align-content: flex-start;
  transform: ${(props) =>
    props.showMenu ? "translateX(0px)" : "translateX(100vw)"};
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f4f5f7;
  transition: 0.3s linear;
  z-index: 999;
  padding: 5px 0px;
`;

const StyledLabelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  font-size: 15px;
  color: #42516e;
`;

const StyledX = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

const StyledBack = styled.span`
  font-size: 15px;
  cursor: pointer;
  color: #42516e;
  opacity: 0;
`;

const StyledTitle = styled.h4``;

function MenuSlideView({
  slideMenuState,
  archivedElementVisi,
  toggleCurrentListVisiFunc,
  showArchivedCardFunc,
  archivedSearchFunc,
  listOfAllArchivedCard,
  archivedSearchValue,
  taskDetailsFunction,
  moveToActiveFunc,
  moveToActiveVisi,
  warningBeforeDeleteFunc,
  warningBeforeDeleteVisi,
  deleteCard,
  taskIdToDelete,
  moveTaskData,
  wholeList,
  moveCardToAnotherList,
}) {
  return (
    <StyledMenu showMenu={slideMenuState} className="menu">
      <StyledLabelTitle className="menu">
        <StyledBack className="fas fa-angle-left menu" />
        <StyledTitle className="menu">Menu</StyledTitle>
        <StyledX className="fas fa-times closeMenu" />
      </StyledLabelTitle>
      <MenuSlideNavView
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        showArchivedCardFunc={showArchivedCardFunc}
      />
      <ArchivedCardsComp
        archivedElementVisi={archivedElementVisi}
        listOfAllArchivedCard={listOfAllArchivedCard}
        archivedSearchFunc={archivedSearchFunc}
        archivedSearchValue={archivedSearchValue}
        taskDetailsFunction={taskDetailsFunction}
        moveToActiveFunc={moveToActiveFunc}
        moveToActiveVisi={moveToActiveVisi}
        warningBeforeDeleteFunc={warningBeforeDeleteFunc}
        warningBeforeDeleteVisi={warningBeforeDeleteVisi}
        deleteCard={deleteCard}
        taskIdToDelete={taskIdToDelete}
        moveTaskData={moveTaskData}
        wholeList={wholeList}
        moveCardToAnotherList={moveCardToAnotherList}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
      />
    </StyledMenu>
  );
}

export default MenuSlideView;
