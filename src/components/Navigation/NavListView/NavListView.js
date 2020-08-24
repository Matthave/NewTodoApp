import React from "react";
import styled from "styled-components";

const StyledList = styled.li`
  width: ${(props) => (props.lastEle ? "auto" : "75px")};
  height: 100%;
  text-align: center;
  background-color: rgba(118, 206, 142, 0.65);
  border-radius: 4px;
  transition: 0.1s linear;
  margin-right: 4px;
  margin-left: ${(props) => (props.lastEle ? "auto" : "initial")};
  padding: ${(props) => (props.lastEle ? "initial" : "8px 0px")};
  z-index: ${(props) => (props.zIndex ? 1 : "initial")};
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
      className="list theme"
      onMouseEnter={(e) => elementHoverEnter(e)}
      onMouseLeave={(e) => elementHoverLeave(e)}
      onClick={themeFunction}
      zIndex={`${linkTitle === "Theme" ? true : false}`}
    >
      <Link className={`${linkTitle === "Theme" ? "theme" : null}`}>
        {linkTitle}
      </Link>
    </StyledList>
  );
}

export default NavListView;
