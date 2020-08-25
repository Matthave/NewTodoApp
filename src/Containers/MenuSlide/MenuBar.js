import React, { Component } from "react";
import MenuBarView from "../../components/MenuSlide/MenuBarView";
import MenuSlideView from "../../components/MenuSlide/MenuSlideView";
import Labels from "../../Containers/Labels/Labels";
import Color from "color";

export class MenuBar extends Component {
  state = {
    boardNameValue: "Your Todo List",
    slideMenuState: false,
    labelVisi: false,
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

    if (!searchingClass.includes("label")) this.setState({ labelVisi: false });
  };

  //This one is for label
  toggleCurrentListVisiFunc = () => {
    this.setState({ labelVisi: true, slideMenuState: false });
  };

  render() {
    //Import current color of mainElement and by Color set it lighten
    const currentLiColor = Color(this.props.whichColor[0]);
    const lighThisColor = currentLiColor.lighten(0.05);

    const {
      listOfAllBadges,
      listOfAllTasksId,
      labelColors,
      setLabelColors,
    } = this.props;
    const { boardNameValue, slideMenuState, labelVisi } = this.state;
    return (
      <>
        <MenuBarView
          boardNameValue={boardNameValue}
          boardNameChangeFunc={this.boardNameChangeFunc}
          slideMenuFunc={this.slideMenuFunc}
          lighThisColor={lighThisColor}
        />
        <MenuSlideView
          slideMenuState={slideMenuState}
          toggleCurrentListVisiFunc={this.toggleCurrentListVisiFunc}
        />
        {labelVisi ? (
          <Labels
            toggleCurrentListVisiFunc={this.toggleCurrentListVisiFunc}
            listOfAllBadges={listOfAllBadges}
            listOfAllTasksId={listOfAllTasksId}
            labelColors={labelColors}
            setLabelColors={setLabelColors}
            menuSlideClasses={true}
          />
        ) : null}
      </>
    );
  }
}

export default MenuBar;
