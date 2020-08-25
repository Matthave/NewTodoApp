import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  align-items: "center";
  width: 100%;
  height: 40px;
  background-color: #4bbf6b;
  padding: 0 7.5px;
  transition: 0.1s linear;
`;

const StyledInputTitle = styled.input`
  width: auto;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  margin: auto 5px 0px 5px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 0 10px;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.hoverBGC ? `${props.lighThisColor}` : null};
  }

  &:focus {
    background-color: #fff;
    color: #000;
  }

  &::placeholder {
    color: #fff;
  }
`;

const StyledShowMenu = styled.button`
  height: 30px;
  background-color: ${(props) =>
    props.hoverBGC ? `${props.lighThisColor}` : null};
  border-radius: 4px;
  margin: auto 0 0 auto;
  font-size: 15px;
  font-weight: 400;
  color: white;
  padding: 0 10px;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 5px 1px rgba(50, 50, 50, 0.1);
  }
`;

const StyledIcon = styled.span`
  font-size: 15px;
  margin-right: 5px;
`;

function MenuBarView({
  boardNameValue,
  boardNameChangeFunc,
  lighThisColor,
  slideMenuFunc,
}) {
  const colorOfBgc = `hsl(${lighThisColor.color[0]},${lighThisColor.color[1]}%,${lighThisColor.color[2]}%)`;
  return (
    <StyledNav className="menuBar">
      <StyledInputTitle
        onChange={(e) => boardNameChangeFunc(e)}
        value={boardNameValue}
        placeholder="Name your board..."
        hoverBGC
        lighThisColor={colorOfBgc} // Send this color to styledComp as a props
      />
      <StyledShowMenu
        hoverBGC
        lighThisColor={colorOfBgc}
        className="menu"
        onClick={() => slideMenuFunc()}
      >
        <StyledIcon className="fas fa-ellipsis-v menu" /> Show Menu
      </StyledShowMenu>
    </StyledNav>
  );
}

export default MenuBarView;
