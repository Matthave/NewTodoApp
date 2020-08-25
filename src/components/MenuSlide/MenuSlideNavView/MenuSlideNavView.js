import React from "react";
import styled from "styled-components";

const StyledWrapList = styled.div`
  display: flex;
  width: 100%;
  height: 42.5px;
  line-height: 42.5px;
  padding: 0px 15px;
  margin-bottom: 10px;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: #e6e8ed;
  }
`;

const StyledList = styled.div`
  font-size: 1.4rem;
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

function MenuSlideNavView({ toggleCurrentListVisiFunc }) {
  return (
    <>
      <StyledWrapList className="menu">
        <StyledSquarBGC className="squarMenuBGC menu" />
        <StyledList className="menu">Change background</StyledList>
      </StyledWrapList>

      <StyledWrapList
        className="menu label"
        onClick={() => toggleCurrentListVisiFunc()}
      >
        <StyledIcon className="fas fa-tag menu label" />
        <StyledList className="menu label">Labels</StyledList>
      </StyledWrapList>

      <StyledWrapList className="menu">
        <StyledIcon className="fas fa-archive menu" />
        <StyledList className="menu">Archived elements</StyledList>
      </StyledWrapList>
    </>
  );
}

export default MenuSlideNavView;
