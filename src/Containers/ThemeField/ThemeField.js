import React from "react";
import ThemeFieldView from "../../components/ThemeField/ThemeFieldView";

function ThemeField({ themeOption, setWhichColor }) {
  const changeColor = (
    mainColor,
    navColor,
    listColor,
    inputColor,
    addListInput
  ) => {
    const main = document.querySelector(".main");
    main.style.backgroundColor = mainColor;

    const menuBar = document.querySelector(".menuBar");
    menuBar.style.backgroundColor = mainColor;

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

    const addList = document.querySelectorAll(".addList");
    addList.forEach((input) => {
      input.style.backgroundColor = addListInput;
    });

    setWhichColor([listColor]);
  };

  const blockOfColors = [
    {
      mainColor: "#0079BF",
      navColor: "#0067A3",
      listColor: "rgba(61, 153, 206,0.65)",
      inputColor: "#4D95BE",
      addListInput: "#3D99CE",
    },
    {
      mainColor: "#D29034",
      navColor: "#B37B2C",
      listColor: "rgba(221, 171, 101,0.65)",
      inputColor: "#C9A26C",
      addListInput: "#DDAB65",
    },
    {
      mainColor: "#519839",
      navColor: "#458131",
      listColor: "rgba(123, 177, 104,0.65)",
      inputColor: "#7DA76F",
      addListInput: "#7BB168",
    },
    {
      mainColor: "#B04632",
      navColor: "#963C2B",
      listColor: "rgba(195, 114, 99,0.65)",
      inputColor: "#B5766B",
      addListInput: "#C37263",
    },
    {
      mainColor: "#89609E",
      navColor: "#755286",
      listColor: "rgba(165, 134, 181,0.65)",
      inputColor: "#9E86AB",
      addListInput: "#A586B5",
    },
    {
      mainColor: "#CD5A91",
      navColor: "#AE4D7B",
      listColor: "rgba(217, 129, 171, 0.65)",
      inputColor: "#C682A3",
      addListInput: "#D981AB",
    },
    {
      mainColor: "#4BBF6B",
      navColor: "#40A35B",
      listColor: "rgba(118, 206, 142, 0.65)",
      inputColor: "#79BE8C",
      addListInput: "#76ce8e",
    },
    {
      mainColor: "#00AECC",
      navColor: "#0094AE",
      listColor: "rgba(61, 193, 216, 0.65)",
      inputColor: "#4DB4C6",
      addListInput: "#3dc1d8",
    },
    {
      mainColor: "#838C91",
      navColor: "#6F777B",
      listColor: "rgba(161, 168, 171,0.65)",
      inputColor: "#9BA0A3",
      addListInput: "#A1A8AB",
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
