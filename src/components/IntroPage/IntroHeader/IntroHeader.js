import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 95vh;
  background: linear-gradient(135deg, #0079bf, #5067c5);
`;

const StyledTextWrap = styled.div`
  display: flex;
  width: 100%;
  min-width: 320px;
  flex-direction: column;
  padding: 20px 0 0;
  margin: 70px auto auto;
`;

const StyledText = styled.h3`
  width: 45%;
  min-width: 320px;
  text-align: center;
  font-size: ${(props) => (props.smallerText ? "25px" : "45px")};
  font-weight: ${(props) => (props.smallerText ? "400" : "600")};
  margin: 10px auto 20px;
  color: #fff;
`;

function IntroHeader() {
  return (
    <StyledHeader>
      <StyledTextWrap>
        <StyledText>
          Trello helps teams work more collaboratively and get more done.
        </StyledText>
        <StyledText smallerText>
          Trello’s boards, lists, and cards enable teams to organize and
          prioritize projects in a fun, flexible, and rewarding way.
        </StyledText>
      </StyledTextWrap>
      <NavLink exact to="/todoList" className="headerLinkIntro">
        Make your Todo List
      </NavLink>
    </StyledHeader>
  );
}

export default IntroHeader;
