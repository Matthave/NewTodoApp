import React, { useState, useEffect } from "react";
import Navigation from "./Navigation/navigation";
import MainField from "./Main/mainField";
import ThemeField from "./ThemeField/themeField";

const Main = () => {
  const [showThemeOption, showThemeOptionFunction] = useState(false);
  useEffect(() => {
    document.addEventListener("click", hideTheme);
  });

  const hideTheme = (e) => {
    const searchingClass = e.target.className;
    if (
      searchingClass.includes("main") ||
      searchingClass.includes("input") ||
      searchingClass.includes("item")
    ) {
      showThemeOptionFunction(false);
    }
  };

  return (
    <main>
      <Navigation
        themeToggle={showThemeOptionFunction}
        themeOption={showThemeOption}
      />
      <ThemeField themeOption={showThemeOption} />
      <MainField />
    </main>
  );
};

export default Main;
