import React, { Component } from "react";
import NavigationView from "../../components/Navigation/NavigationView";

class Navigations extends Component {
  themeFunction = () => {
    this.props.themeToggle(!this.props.themeOption);
  };

  render() {
    const { elementHoverEnter, elementHoverLeave } = this.props;
    return (
      <>
        <NavigationView
          elementHoverEnter={elementHoverEnter}
          elementHoverLeave={elementHoverLeave}
          themeFunction={this.themeFunction}
        />
      </>
    );
  }
}

export default Navigations;
