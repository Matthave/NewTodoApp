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
  };

  mouseUpFeature = (e) => {
    this.setState({
      selected: false,
    });
    e.target.style.cursor = "pointer";
  };

  mouseMoveFeature = (e) => {
    if (this.state.selected) {
      e.target.style.left = `${e.clientX - 430}px`;
      e.target.style.top = `${e.clientY - 60}px`;
    }
  };

  render() {
    return (
      <div
        key={this.props.task}
        className="card"
        onMouseDown={(e) => this.mouseDownFeature(e)}
        onMouseUp={(e) => this.mouseUpFeature(e)}
        onMouseMove={(e) => this.mouseMoveFeature(e)}
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
