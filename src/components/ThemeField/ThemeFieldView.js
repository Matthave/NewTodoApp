import React from "react";
import styled from "styled-components";
import { device } from "../../Style/MediaQuery/mq";

const StyledColorDiv = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    opacity: 0.75;
  }

  @media ${device.laptop} {
    width: 45%;
    height: 85px;
  }
`;

const StyledThemeDivTitle = styled.h3`
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  font-size: 2rem;
`;

const StyledThemeDiv = styled.div`
  position: fixed;
  bottom: 17.5px;
  right: 0;
  width: 100%;
  transform: ${(props) =>
    props.showTheme ? "translateX(0px)" : "translateX(100vw)"};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f4f5f7;
  padding: 10px;
  transition: 0.3s linear;
  z-index: 999;

  @media ${device.laptop} {
    top: calc(0% + 40px);
    right: 0;
    width: 375px;
    align-content: flex-start;
  }
`;

function ThemeFieldView({ themeOption, changeColor, blockOfColors }) {
  return (
    <StyledThemeDiv showTheme={themeOption}>
      <StyledThemeDivTitle>Colors</StyledThemeDivTitle>
      {blockOfColors.map((block) => (
        <StyledColorDiv
          onClick={() =>
            changeColor(
              block.mainColor,
              block.navColor,
              block.listColor,
              block.inputColor
            )
          }
          style={{ backgroundColor: block.mainColor }}
          key={block.mainColor}
        />
      ))}
    </StyledThemeDiv>
  );
}

export default ThemeFieldView;
