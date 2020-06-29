import React, { Component } from "react";

class Card extends Component {
  state = {
    selected: false,
  };

  mouseDownFeature = (e) => {
    if (e.target.classList[0] !== "card") return;
    this.setState({
      selected: true,
    });
    e.target.style.cursor = "grabbing";
    e.target.style.background = "#fff";
  };

  mouseUpFeature = (e) => {
    if (e.target.classList[0] !== "card") return;

    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";

    if (e.pageX < 285) {
      this.props.addNewCard(this.props.wholeList[0].id, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    }
    if (e.pageX > 285 && e.pageX < 570 && this.props.wholeList.length >= 2) {
      this.props.addNewCard(this.props.wholeList[1].id, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    } else if (
      e.pageX > 570 &&
      e.pageX < 855 &&
      this.props.wholeList.length >= 3
    ) {
      this.props.addNewCard(this.props.wholeList[2].id, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    } else if (
      e.pageX > 855 &&
      e.pageX < 1140 &&
      this.props.wholeList.length >= 4
    ) {
      this.props.addNewCard(this.props.wholeList[3].id, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    } else if (
      e.pageX > 1140 &&
      e.pageX < 1425 &&
      this.props.wholeList.length >= 5
    ) {
      this.props.addNewCard(this.props.wholeList[4].id, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    } else if (e.pageX > 1425 && this.props.wholeList.length >= 6) {
      this.props.addNewCard(this.props.wholeList[5].id, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    }

    this.setState({
      selected: false,
    });
  };

  mouseMoveFeature = (e) => {
    if (this.state.selected && e.target.classList[0] === "card") {
      e.target.style.left = `${e.clientX - 130}px`;
      e.target.style.top = `${e.clientY - 26}px`;
      e.target.style.position = "fixed";
      e.target.style.transform = "rotate(5deg)";
      e.target.style.zIndex = 999;
    }
  };

  mouseLeaveFeature = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";
    this.setState({
      selected: false,
    });
  };

  render() {
    return (
      <div
        key={this.props.task}
        className="card"
        onMouseDown={(e) => this.mouseDownFeature(e)}
        onMouseUp={(e) => this.mouseUpFeature(e)}
        onMouseMove={(e) => this.mouseMoveFeature(e)}
        onMouseLeave={(e) => this.mouseLeaveFeature(e)}
      >
        {this.props.task}
        <span
          className="fas fa-highlighter"
          onClick={(e) => this.props.deleteCardFeature(e)}
        />
      </div>
    );
  }
}

export default Card;
