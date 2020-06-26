import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
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

const Link = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
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

//FEATURES

const Navigation = ({
  themeToggle,
  themeOption,
  elementHoverEnter,
  elementHoverLeave,
}) => {
  const themeFunction = () => {
    themeToggle(!themeOption);
  };

  return (
    <StyledNav className="nav">
      <StyledUl>
        <StyledList
          className={"list"}
          onMouseEnter={(e) => elementHoverEnter(e)}
          onMouseLeave={(e) => elementHoverLeave(e)}
        >
          <Link>Your List</Link>
        </StyledList>
        <StyledList
          className={"list"}
          onClick={themeFunction}
          onMouseEnter={(e) => elementHoverEnter(e)}
          onMouseLeave={(e) => elementHoverLeave(e)}
        >
          <Link>Theme</Link>
        </StyledList>
        <StyledList
          className={"list"}
          onMouseEnter={(e) => elementHoverEnter(e)}
          onMouseLeave={(e) => elementHoverLeave(e)}
        >
          <Link>Help</Link>
        </StyledList>
        <StyledList className={"list"} lastEle>
          <StyledInput className={"item"} placeholder="Search..." />
        </StyledList>
      </StyledUl>
    </StyledNav>
  );
};

export default Navigation;
