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
      this.props.addNewCard(0, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    }
    if (e.pageX > 285 && e.pageX < 570) {
      this.props.addNewCard(1, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    } else if (e.pageX > 570 && e.pageX < 855) {
      this.props.addNewCard(2, e.target.textContent);
      this.props.deleteCardFeatureByMove(e, this.props.id);
    } else if (e.pageX > 855) {
      this.props.addNewCard(3, e.target.textContent);
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
