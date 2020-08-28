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
  padding: 10px 20px;
  transition: 1s linear;
  font-size: 20px;

  @media ${device.laptop} {
    font-size: 25px;
  }
`;

const StyledTitle = styled.a`
  font-size: 25px;
  font-weight: 600;
  font-family: "Pacifico", cursive;
  cursor: pointer;
  text-decoration: none;
  color: #fff;

  @media ${device.laptop} {
    font-size: 35px;
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
