import React from "react";
import styled from "styled-components";
import { device } from "../mq";

const StyledThemeDiv = styled.div`
  position: fixed;
  bottom: 0;
  right: calc(50% - (375px / 2));
  width: 375px;
  transform: ${(props) =>
    props.showTheme ? "translateX(0px)" : "translateX(100vw)"};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f4f5f7;
  padding: 10px;
  transition: 0.3s linear;

  @media ${device.laptop} {
    top: calc(0% + 40px);
    right: 0;
    bottom: 0;
    width: 375px;
    align-content: flex-start;
  }
`;

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

function ThemeField({ themeOption, setWhichColor }) {
  const changeColor = (mainColor, navColor, listColor, inputColor) => {
    const main = document.querySelector(".main");
    main.style.backgroundColor = mainColor;

    const nav = document.querySelector(".nav");
    nav.style.backgroundColor = navColor;

    const lists = document.querySelectorAll(".list");
    lists.forEach((list) => {
      list.style.backgroundColor = listColor;
    });

    const inputs = document.querySelectorAll(".item");
    inputs.forEach((input) => {
      input.style.backgroundColor = inputColor;
    });

    setWhichColor([listColor]);
  };
  return (
    <StyledThemeDiv showTheme={themeOption}>
      <StyledThemeDivTitle>Colors</StyledThemeDivTitle>
      <StyledColorDiv
        onClick={() =>
          changeColor("#0079BF", "#0067A3", "#3D99CE", "#4D95BE", 1)
        }
        style={{ backgroundColor: "#0079BF" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#D29034", "#B37B2C", "#DDAB65", "#C9A26C", 2)
        }
        style={{ backgroundColor: "#D29034" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#519839", "#458131", "#7BB168", "#7DA76F", 3)
        }
        style={{ backgroundColor: "#519839" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#B04632", "#963C2B", "#C37263", "#B5766B", 4)
        }
        style={{ backgroundColor: "#B04632" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#89609E", "#755286", "#A586B5", "#9E86AB", 5)
        }
        style={{ backgroundColor: "#89609E" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#CD5A91", "#AE4D7B", "#D981AB", "#C682A3", 6)
        }
        style={{ backgroundColor: "#CD5A91" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#4BBF6B", "#40A35B", "#76CE8E", "#79BE8C", 7)
        }
        style={{ backgroundColor: "#4BBF6B" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#00AECC", "#0094AE", "#3DC1D8", "#4DB4C6", 8)
        }
        style={{ backgroundColor: "#00AECC" }}
      />
      <StyledColorDiv
        onClick={() =>
          changeColor("#838C91", "#6F777B", "#A1A8AB", "#9BA0A3", 9)
        }
        style={{ backgroundColor: "#838C91" }}
      />
    </StyledThemeDiv>
  );
}

export default ThemeField;
