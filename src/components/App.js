import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Main from "../Containers/Main/main";
import IntroPage from "../Containers/IntroPage/IntroPage";
import GlobalStyle from "../Style/GlobalStyle/globalStyle";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={() => <IntroPage />} />
        <Route path="/todolist" render={() => <Main />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
