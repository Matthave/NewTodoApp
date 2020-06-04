import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #40a35b;
  padding: 0px 10px;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  list-style: none;
  cursor: pointer;
`;

const StyledList = styled.li`
  width: 75px;
  height: 35px;
  text-align: center;
  padding: 8px 0px;
  background-color: #79be8c;
  border-radius: 5px;
  margin-right: 2.5px;
  transition: 0.1s linear;

  &:hover {
    background-color: #64b37a;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;

const navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledList>
          <Link>Home</Link>
        </StyledList>
        <StyledList>
          <Link>Your List</Link>
        </StyledList>
        <StyledList>
          <Link>Add List</Link>
        </StyledList>
        <StyledList>
          <Link>Help</Link>
        </StyledList>
        <StyledList>
          <input />
        </StyledList>
      </StyledUl>
    </StyledNav>
  );
};

export default navigation;
