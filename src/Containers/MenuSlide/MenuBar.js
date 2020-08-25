import React, { Component } from "react";
import MenuBarView from "../../components/MenuSlide/MenuBarView";
import MenuSlideView from "../../components/MenuSlide/MenuSlideView";
import Color from "color";

export class MenuBar extends Component {
  state = {
    boardNameValue: "Your Todo List",
    slideMenuState: false,
  };

  componentDidMount() {
    document.addEventListener("click", (e) => this.hideMenuFunc(e));
  }

  boardNameChangeFunc = (e) => {
    this.setState({ boardNameValue: e.target.value.substr(0, 17) });
  };

  slideMenuFunc = () => {
    this.setState({ slideMenuState: true });
  };

  hideMenuFunc = (e) => {
    const searchingClass = e.target.className;
    if (!searchingClass.includes("menu"))
      this.setState({ slideMenuState: false });
  };

  render() {
    //Import current color of mainElement and by Color set it lighten
    const currentLiColor = Color(this.props.whichColor[0]);
    const lighThisColor = currentLiColor.lighten(0.05);

    const { boardNameValue, slideMenuState } = this.state;
    return (
      <>
        <MenuBarView
          boardNameValue={boardNameValue}
          boardNameChangeFunc={this.boardNameChangeFunc}
          slideMenuFunc={this.slideMenuFunc}
          lighThisColor={lighThisColor}
        />
        <MenuSlideView slideMenuState={slideMenuState} />
      </>
    );
  }
}

export default MenuBar;
