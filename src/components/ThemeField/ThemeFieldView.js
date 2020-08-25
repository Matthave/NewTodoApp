import React from "react";
import styled from "styled-components";

const StyledColorDiv = styled.div`
  width: 45%;
  height: 85px;
  border-radius: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    opacity: 0.75;
  }
`;

const StyledThemeDiv = styled.div`
  position: fixed;
  top: calc(0% + 40px);
  bottom: 17.5px;
  right: 0;
  width: 320px;
  align-content: flex-start;
  transform: ${(props) =>
    props.showTheme ? "translateX(0px)" : "translateX(100vw)"};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f4f5f7;
  padding: 10px;
  transition: 0.3s linear;
  z-index: 999;
`;

const StyledLabelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  font-size: 17px;
  color: #42516e;
`;

const StyledX = styled.span`
  margin-left: 10px;
  font-size: 17px;
  color: #42516e;
  cursor: pointer;
  opacity: 0;
`;

const StyledBack = styled.span`
  font-size: 19px;
  cursor: pointer;
  color: #42516e;
`;

const StyledTitle = styled.h4``;

function ThemeFieldView({ themeOption, changeColor, blockOfColors }) {
  return (
    <StyledThemeDiv showTheme={themeOption} className="theme">
      <StyledLabelTitle className="theme">
        <StyledBack className="fas fa-angle-left" />
        <StyledTitle className="theme">Colors</StyledTitle>
        <StyledX className="fas fa-times theme" />
      </StyledLabelTitle>
      {blockOfColors.map((block) => (
        <StyledColorDiv
          className="theme"
          onClick={() =>
            changeColor(
              block.mainColor,
              block.navColor,
              block.listColor,
              block.inputColor,
              block.addListInput
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
