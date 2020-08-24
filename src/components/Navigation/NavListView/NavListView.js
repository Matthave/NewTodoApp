import React from "react";
import styled from "styled-components";

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

function NavListView({
  elementHoverEnter,
  elementHoverLeave,
  themeFunction,
  linkTitle,
}) {
  return (
    <StyledList
      className="list"
      onMouseEnter={(e) => elementHoverEnter(e)}
      onMouseLeave={(e) => elementHoverLeave(e)}
      onClick={themeFunction}
    >
      <Link className={`${linkTitle === "Theme" ? "theme" : null}`}>
        {linkTitle}
      </Link>
    </StyledList>
  );
}

export default NavListView;
