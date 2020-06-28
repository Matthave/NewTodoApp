import React, { Component } from "react";

class Card extends Component {
  state = {
    selected: false,
  };

  mouseDownFeature = (e) => {
    this.setState({
      selected: true,
    });
    e.target.style.cursor = "grabbing";
    e.target.style.background = "#fff";
  };

  mouseUpFeature = (e) => {
    this.setState({
      selected: false,
    });
    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";
  };

  mouseMoveFeature = (e) => {
    if (this.state.selected) {
      e.target.style.left = `${e.clientX - 130}px`;
      e.target.style.top = `${e.clientY - 26}px`;
      e.target.style.position = "fixed";
      e.target.style.transform = "rotate(5deg)";
    }
  };

  mouseLeaveFeature = (e) => {
    e.target.style.cursor = "pointer";
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
