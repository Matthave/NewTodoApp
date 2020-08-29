import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../../Style/MediaQuery/mq";

const StyledList = styled.li`
  position: relative;
  width: ${(props) => (props.bgc ? "55px" : "35px")};
  height: 100%;
  text-align: center;
  background-color: rgba(118, 206, 142, 0.65);
  border-radius: 4px;
  transition: 0.1s linear;
  margin-right: 4px;
  margin-left: ${(props) => (props.lastEle ? "auto" : "initial")};
  padding: ${(props) => (props.bgc ? "0 5px" : "none")};
  line-height: 35px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  z-index: 1;

  @media ${device.tablet} {
    &:hover {
      background-color: ${(props) =>
        props.hoverBGC ? `${props.lighThisColor} !important` : null};
    }
  }
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 7px 0px;
  color: #fff;
  font-size: 1.5rem;
`;

function NavListView({ lighThisColor }) {
  const colorBgcHSL = `hsl(${lighThisColor.color[0]},${lighThisColor.color[1]}%,${lighThisColor.color[2]}%)`;
  return (
    <>
      <StyledList
        className="list transparent"
        hoverBGC
        lighThisColor={colorBgcHSL}
      >
        <NavLink exact to="/" className="navLink">
          <StyledIcon className="fas fa-home" />
        </NavLink>
      </StyledList>
      <StyledList
        className="list transparent labels"
        hoverBGC
        lighThisColor={colorBgcHSL}
      >
        <StyledIcon className="fas fa-tag labels" />
      </StyledList>
      <StyledList
        className="list transparent archive"
        hoverBGC
        lighThisColor={colorBgcHSL}
      >
        <StyledIcon className="fas fa-archive" />
      </StyledList>
      <StyledList
        className="list theme transparent"
        hoverBGC
        bgc
        lighThisColor={colorBgcHSL}
      >
        Theme
      </StyledList>
    </>
  );
}

export default NavListView;
