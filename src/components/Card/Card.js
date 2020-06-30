import React, { Component } from "react";

class Card extends Component {
  state = {
    selected: false,
    scrollHeight: 0,
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
    } else if (
      e.pageX > 285 &&
      e.pageX < 570 &&
      this.props.wholeList.length >= 2
    ) {
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

    this.clearAllBlankSpan();

    this.setState({
      selected: false,
    });
  };

  clearAllBlankSpan = () => {
    const allBlank = document.querySelectorAll(".blank");

    allBlank.forEach((blank) => {
      blank.style.width = "0";
      blank.style.height = "0";
      blank.style.backgroundColor = "transparent";
      blank.style.borderRadius = "0";
    });
  };

  mouseMoveFeature = (e) => {
    if (this.state.selected && e.target.classList[0] === "card") {
      e.target.style.left = `${e.clientX - 130}px`;
      e.target.style.top = `${e.clientY - 26}px`;
      e.target.style.position = "fixed";
      e.target.style.transform = "rotate(5deg)";
      e.target.style.zIndex = 999;

      const allBlankSpan = document.querySelectorAll(".blank");
      allBlankSpan.forEach((all) => {
        all.style.width = "0";
        all.style.height = "0";
        all.style.backgroundColor = "transparent";
      });

      if (e.pageX < 285) {
        allBlankSpan[0].style.width = "100%";
        allBlankSpan[0].style.height = "35px";
        allBlankSpan[0].style.backgroundColor = "#dddfe5";
        allBlankSpan[0].style.borderRadius = "5px";
      } else if (
        e.pageX > 285 &&
        e.pageX < 570 &&
        this.props.wholeList.length >= 2
      ) {
        allBlankSpan[1].style.width = "100%";
        allBlankSpan[1].style.height = "35px";
        allBlankSpan[1].style.backgroundColor = "#dddfe5";
        allBlankSpan[1].style.borderRadius = "5px";
      } else if (
        e.pageX > 570 &&
        e.pageX < 855 &&
        this.props.wholeList.length >= 3
      ) {
        allBlankSpan[2].style.width = "100%";
        allBlankSpan[2].style.height = "35px";
        allBlankSpan[2].style.backgroundColor = "#dddfe5";
        allBlankSpan[2].style.borderRadius = "5px";
      } else if (
        e.pageX > 855 &&
        e.pageX < 1140 &&
        this.props.wholeList.length >= 4
      ) {
        allBlankSpan[3].style.width = "100%";
        allBlankSpan[3].style.height = "35px";
        allBlankSpan[3].style.backgroundColor = "#dddfe5";
        allBlankSpan[3].style.borderRadius = "5px";
      } else if (
        e.pageX > 1140 &&
        e.pageX < 1425 &&
        this.props.wholeList.length >= 5
      ) {
        allBlankSpan[4].style.width = "100%";
        allBlankSpan[4].style.height = "35px";
        allBlankSpan[4].style.backgroundColor = "#dddfe5";
        allBlankSpan[4].style.borderRadius = "5px";
      } else if (e.pageX > 1425 && this.props.wholeList.length >= 6) {
        allBlankSpan[5].style.width = "100%";
        allBlankSpan[5].style.height = "35px";
        allBlankSpan[5].style.backgroundColor = "#dddfe5";
        allBlankSpan[5].style.borderRadius = "5px";
      }
    }
  };

  mouseLeaveFeature = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";
    this.clearAllBlankSpan();
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
