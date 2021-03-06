import React from "react";
import styled from "styled-components";
import NavListView from "./NavListView/NavListView";
import myLogo from "../../img/myLogo.png";

const StyledNav = styled.nav`
  width: 100%;
  min-width: 320px;
  height: 40px;
  background-color: #40a35b;
  padding: 0px 4px;
  transition: 0.1s linear;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-shrink: 1;
  width: 100%;
  height: 40px;
  list-style: none;
  cursor: pointer;
  padding: 4px 0px;
`;

const StyledList = styled.li`
  width: ${(props) => (props.lastEle ? "auto" : "75px")};
  height: 100%;
  text-align: center;
  background-color: #76ce8e;
  border-radius: 4px;
  transition: 0.1s linear;
  margin-right: 4px;
  margin-left: ${(props) => (props.lastEle ? "auto" : "initial")};
  padding: ${(props) => (props.lastEle ? "initial" : "8px 0px")};
`;

const StyledInput = styled.input`
  width: 120px;
  height: 100%;
  border-radius: 4px;
  padding: 7.5px;
  background-color: #79be8c;
  font-size: 1.6rem;
  color: #fff;
  transition: 0.1s linear;

  &:hover {
    background-color: #64b37a;
  }

  &::placeholder {
    color: #fff;
  }
`;

const Styledlogo = styled.img`
  width: 30px;
  height: 30px;
`;

const StyledHiperLink = styled.a`
  position: absolute;
  top: 5px;
  left: calc(50% - 15px);
  z-index: 0;
`;

const Navigation = ({ lighThisColor, navSearchValue, navInputsChangeFunc }) => {
  return (
    <StyledNav className="nav">
      <StyledUl>
        <NavListView lighThisColor={lighThisColor} />
        <StyledHiperLink
          href="http://matthave.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Styledlogo src={myLogo}></Styledlogo>
        </StyledHiperLink>
        <StyledList lastEle className="transparent">
          <StyledInput
            className="item transparent"
            placeholder="Search..."
            value={navSearchValue}
            onChange={(e) => navInputsChangeFunc(e)}
          />
        </StyledList>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
