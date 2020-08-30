import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: "center";
  width: 100%;
  min-width: 320px;
  height: 40px;
  background-color: #4bbf6b;
  padding: 0 7.5px;
  transition: 0.1s linear;
  color: #fff;
`;

const StyledInputTitle = styled.input`
  width: 175px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  margin: auto 5px 0px 5px;
  font-size: 18px;
  font-weight: 600;
  padding: 0 10px;
  transition: 0.1s linear;
  cursor: pointer;
  color: inherit;

  &:hover {
    background-color: ${(props) =>
      props.hoverBGC ? `${props.lighThisColor}` : null};
  }

  &:focus {
    background-color: #fff;
    color: #000 !important;
  }

  &::placeholder {
    color: #000;
  }
`;

const StyledShowMenu = styled.button`
  height: 30px;
  background-color: #76ce8e;
  border-radius: 4px;
  margin: auto 0 0 auto;
  font-size: 15px;
  font-weight: 400;
  color: inherit;
  padding: 0 10px;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.hoverBGC ? `${props.lighThisColor} !important` : null};
  }
`;

const StyledIcon = styled.span`
  font-size: 15px;
  margin-right: 5px;
  color: inherit;
`;

function MenuBarView({
  boardNameValue,
  boardNameChangeFunc,
  lighThisColor,
  slideMenuFunc,
}) {
  const colorOfBgc = `hsla(${lighThisColor.color[0]},${lighThisColor.color[1]}%,${lighThisColor.color[2]}%, 0.85)`;
  return (
    <StyledNav className="menuBar">
      <StyledInputTitle
        className="menuBarInput"
        onChange={(e) => boardNameChangeFunc(e)}
        value={boardNameValue}
        placeholder="Name your board..."
        hoverBGC
        lighThisColor={colorOfBgc} // Send this color to styledComp as a props
      />
      <StyledShowMenu
        hoverBGC
        lighThisColor={colorOfBgc}
        className="menu transparent"
        onClick={() => slideMenuFunc()}
      >
        <StyledIcon className="fas fa-ellipsis-v menu" /> Show Menu
      </StyledShowMenu>
    </StyledNav>
  );
}

export default MenuBarView;
