import React, { Component } from "react";
import NavigationView from "../../components/Navigation/NavigationView";
import Color from "color";

class Navigations extends Component {
  themeFunction = () => {
    this.props.themeToggle(!this.props.themeOption);
  };

  render() {
    const { whichColor } = this.props;

    const currentLiColor = Color(whichColor[0]);
    const lighThisColor = currentLiColor.lighten(0.1);
    return (
      <>
        <NavigationView
          themeFunction={this.themeFunction}
          lighThisColor={lighThisColor}
        />
      </>
    );
  }
}

export default Navigations;
