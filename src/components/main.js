import React, { useState } from "react";
import Navigation from "./Navigation/navigation";
import MainField from "./Main/mainField";
import ThemeField from "./ThemeField/themeField";

const Main = () => {
  const [showThemeOption, showThemeOptionFunction] = useState(false);

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
