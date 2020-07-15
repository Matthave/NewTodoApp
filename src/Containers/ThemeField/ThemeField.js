import React from "react";
import ThemeFieldView from "../../components/ThemeField/ThemeFieldView";

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

  const blockOfColors = [
    {
      mainColor: "#0079BF",
      navColor: "#0067A3",
      listColor: "#3D99CE",
      inputColor: "#4D95BE",
    },
    {
      mainColor: "#D29034",
      navColor: "#B37B2C",
      listColor: "#DDAB65",
      inputColor: "#C9A26C",
    },
    {
      mainColor: "#519839",
      navColor: "#458131",
      listColor: "#7BB168",
      inputColor: "#7DA76F",
    },
    {
      mainColor: "#B04632",
      navColor: "#963C2B",
      listColor: "#C37263",
      inputColor: "#B5766B",
    },
    {
      mainColor: "#89609E",
      navColor: "#755286",
      listColor: "#A586B5",
      inputColor: "#9E86AB",
    },
    {
      mainColor: "#CD5A91",
      navColor: "#AE4D7B",
      listColor: "#D981AB",
      inputColor: "#C682A3",
    },
    {
      mainColor: "#4BBF6B",
      navColor: "#40A35B",
      listColor: "#76CE8E",
      inputColor: "#79BE8C",
    },
    {
      mainColor: "#00AECC",
      navColor: "#0094AE",
      listColor: "#3DC1D8",
      inputColor: "#4DB4C6",
    },
    {
      mainColor: "#838C91",
      navColor: "#6F777B",
      listColor: "#A1A8AB",
      inputColor: "#9BA0A3",
    },
  ];
  return (
    <ThemeFieldView
      changeColor={changeColor}
      themeOption={themeOption}
      blockOfColors={blockOfColors}
    />
  );
}

export default ThemeField;
