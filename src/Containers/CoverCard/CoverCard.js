import React, { Component } from "react";
import CoverCardView from "../../components/CoverCard/CoverCardView";

export class CoverCard extends Component {
  setCoverColorFunc = (chosedColor) => {
    const coverCardType = document.querySelectorAll(".coverCardType");
    coverCardType.forEach((ele) => {
      ele.style.backgroundColor = chosedColor;
    });
  };

  render() {
    const { toggleCurrentListVisiFunc, labelColors } = this.props;
    return (
      <CoverCardView
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        labelColors={labelColors}
        setCoverColorFunc={this.setCoverColorFunc}
      />
    );
  }
}

export default CoverCard;
