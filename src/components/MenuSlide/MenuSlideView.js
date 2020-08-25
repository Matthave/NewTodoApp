import React from "react";
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
`;

const StyledLabelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  font-size: 17px;
  color: #42516e;
`;

const StyledX = styled.span`
  margin-left: 10px;
  font-size: 17px;
  color: #42516e;
  cursor: pointer;
`;

const StyledBack = styled.span`
  font-size: 19px;
  cursor: pointer;
  color: #42516e;
  opacity: 0;
`;

const StyledTitle = styled.h4``;

const StyledWrapList = styled.div`
  display: flex;
  width: 100%;
  height: 42.5px;
  line-height: 42.5px;
  padding: 0px 15px;
  margin-bottom: 10px;
  transition: 0.1s linear;

  &:hover {
    background-color: #e6e8ed;
  }
`;

const StyledList = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  color: #172b4d;
`;

const StyledSquarBGC = styled.span`
  width: 22.5px;
  height: 22.5px;
  background-color: #4bbf6b;
  border-radius: 4px;
  margin: auto 11px auto 0px;
`;

const StyledIcon = styled.span`
  font-size: 17.5px;
  margin: auto 15px auto 0px;
  color: #172b4d;
`;

function MenuSlideView({ slideMenuState }) {
  return (
    <StyledMenu showMenu={slideMenuState} className="menu">
      <StyledLabelTitle className="menu">
        <StyledBack className="fas fa-angle-left menu" />
        <StyledTitle className="menu">Menu</StyledTitle>
        <StyledX className="fas fa-times" />
      </StyledLabelTitle>
      <StyledWrapList>
        <StyledSquarBGC className="squarMenuBGC menu" />
        <StyledList className="menu">Change background</StyledList>
      </StyledWrapList>

      <StyledWrapList>
        <StyledIcon className="fas fa-tag menu" />
        <StyledList className="menu">Labels</StyledList>
      </StyledWrapList>

      <StyledWrapList>
        <StyledIcon className="fas fa-archive menu" />
        <StyledList className="menu">Archived elements</StyledList>
      </StyledWrapList>
    </StyledMenu>
  );
}

export default MenuSlideView;
