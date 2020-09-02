import React, { Component } from "react";
import NavigationView from "../../components/Navigation/NavigationView";
import Color from "color";

class Navigations extends Component {
  navInputsChangeFunc = (e) => {
    this.props.setNavSearchValue(e.target.value);
  };

  render() {
    const { whichColor, navSearchValue } = this.props;

    const currentLiColor = Color(whichColor[0]);
    const lighThisColor = currentLiColor.lighten(0.1);
    return (
      <>
        <NavigationView
          lighThisColor={lighThisColor}
          navSearchValue={navSearchValue}
          navInputsChangeFunc={this.navInputsChangeFunc}
        />
      </>
    );
  }
}

export default Navigations;
