import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  height: 40px;
  background-color: #40a35b;
  padding: 0px 4px;
`;

const StyledUl = styled.ul`
  display: flex;
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
  background-color: ${(props) => (props.lastEle ? "none" : "#79be8c")};
  border-radius: 4px;
  transition: 0.1s linear;
  margin-right: 4px;
  margin-left: ${(props) => (props.lastEle ? "auto" : "initial")};
  padding: ${(props) => (props.lastEle ? "initial" : "8px 0px")};

  &:hover {
    background-color: ${(props) => (props.lastEle ? "none" : "#64b37a")};
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
`;

const StyledInput = styled.input`
  width: 150px;
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
        <StyledList lastEle>
          <StyledInput placeholder="Search..." />
        </StyledList>
      </StyledUl>
    </StyledNav>
  );
};

export default navigation;
