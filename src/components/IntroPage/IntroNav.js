import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../Style/MediaQuery/mq";

const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: transparent;
  padding: 10px 10px;
  transition: 0.75s linear;
  font-size: 20px;
  z-index: 999;

  @media ${device.tablet} {
    font-size: 25px;
    padding: 10px 25px;
  }
`;

const StyledTitle = styled.a`
  width: 50%;
  font-size: 25px;
  font-weight: 600;
  font-family: "Pacifico", cursive;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  @media ${device.tablet} {
    font-size: 30px;
  }
`;

function IntroNav() {
  return (
    <StyledNav className="introNav">
      <StyledTitle
        href="https://trello.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trello Clone
      </StyledTitle>
      <NavLink exact to="/todoList" className="navLinkIntro">
        Go To Board
      </NavLink>
    </StyledNav>
  );
}

export default IntroNav;
