import React, { Component } from "react";
import MenuBarView from "../../components/MenuBar/MenuBarView";
import Color from "color";

export class MenuBar extends Component {
  state = {
    boardNameValue: "Your Todo List",
  };

  boardNameChangeFunc = (e) => {
    this.setState({ boardNameValue: e.target.value.substr(0, 17) });
  };

  render() {
    //Import current color of mainElement and by Color set it lighten
    const currentLiColor = Color(this.props.whichColor[0]);
    const lighThisColor = currentLiColor.lighten(0.05);

    const { boardNameValue } = this.state;
    return (
      <MenuBarView
        boardNameValue={boardNameValue}
        boardNameChangeFunc={this.boardNameChangeFunc}
        lighThisColor={lighThisColor}
      />
    );
  }
}

export default MenuBar;
