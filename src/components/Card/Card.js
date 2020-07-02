import React, { Component } from "react";

class Card extends Component {
  state = {
    selected: false,
    scrollHeight: 0,
    touchesMovePageX: 0,
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

    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);

    for (let i = 1; i < 10; i++) {
      if (e.pageX < 285 - scrollHeighFromMain) {
        if (this.props.wholeList[0].tasks.includes(e.target.textContent))
          return this.mouseLeaveFeature(e);
        this.props.addNewCard(this.props.wholeList[0].id, e.target.textContent);
        this.props.deleteCardFeatureByMove(e, this.props.id);
      } else if (
        e.pageX > 285 * i - scrollHeighFromMain &&
        e.pageX < 285 * i + 285 - scrollHeighFromMain &&
        this.props.wholeList.length >= i + 1
      ) {
        if (this.props.wholeList[i].tasks.includes(e.target.textContent))
          return this.mouseLeaveFeature(e);
        this.props.addNewCard(this.props.wholeList[i].id, e.target.textContent);
        this.props.deleteCardFeatureByMove(e, this.props.id);
      }
    }

    this.props.isDragAndDropTrue(false);
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
    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    if (this.state.selected && e.target.classList[0] === "card") {
      e.target.style.left = `${e.clientX - 130}px`;
      e.target.style.top = `${e.clientY - 27.5}px`;
      e.target.style.position = "fixed";
      e.target.style.transform = "rotate(5deg)";
      e.target.style.zIndex = 999;

      const allBlankSpan = document.querySelectorAll(".blank");
      allBlankSpan.forEach((all) => {
        all.style.width = "0";
        all.style.height = "0";
        all.style.backgroundColor = "transparent";
      });

      for (let i = 1; i < 10; i++) {
        if (e.pageX < 285 - scrollHeighFromMain) {
          allBlankSpan[0].style.width = "100%";
          allBlankSpan[0].style.height = "35px";
          allBlankSpan[0].style.backgroundColor = "#dddfe5";
          allBlankSpan[0].style.borderRadius = "5px";
        } else if (
          e.pageX > 285 * i - scrollHeighFromMain &&
          e.pageX < 285 * i + 285 - scrollHeighFromMain &&
          this.props.wholeList.length >= i + 1
        ) {
          allBlankSpan[i].style.width = "100%";
          allBlankSpan[i].style.height = "35px";
          allBlankSpan[i].style.backgroundColor = "#dddfe5";
          allBlankSpan[i].style.borderRadius = "5px";
        }
      }
    }

    this.props.isDragAndDropTrue(true);
  };

  mouseLeaveFeature = (e) => {
    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";
    this.clearAllBlankSpan();
    this.props.isDragAndDropTrue(false);
    this.setState({
      selected: false,
    });
  };

  /* TOUCH HANDLER TOUCH HADLER */

  touchDownFeature = (e) => {
    if (e.target.classList[0] !== "card") return;
    const main = document.querySelector(".main");
    this.setState({
      selected: true,
    });
    e.target.style.cursor = "grabbing";
    e.target.style.background = "#fff";
    main.style.overflowY = "hidden";
  };

  touchMoveFeature = (e) => {
    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);
    if (this.state.selected && e.target.classList[0] === "card") {
      e.target.style.left = `${e.touches[0].clientX - 130}px`;
      e.target.style.top = `${e.touches[0].clientY - 27.5}px`;
      e.target.style.position = "fixed";
      e.target.style.transform = "rotate(5deg)";
      e.target.style.zIndex = 999;

      const allBlankSpan = document.querySelectorAll(".blank");
      allBlankSpan.forEach((all) => {
        all.style.width = "0";
        all.style.height = "0";
        all.style.backgroundColor = "transparent";
      });

      this.setState({
        touchesMovePageX: e.touches[0].pageX,
      });
      //For loop - Handle for every moveing card with touch
      for (let i = 1; i < 10; i++) {
        if (e.touches[0].pageX < 285 - scrollHeighFromMain) {
          allBlankSpan[0].style.width = "100%";
          allBlankSpan[0].style.height = "35px";
          allBlankSpan[0].style.backgroundColor = "#dddfe5";
          allBlankSpan[0].style.borderRadius = "5px";
        } else if (
          e.touches[0].pageX > 285 * i - scrollHeighFromMain &&
          e.touches[0].pageX < 285 * i + 285 - scrollHeighFromMain &&
          this.props.wholeList.length >= i + 1
        ) {
          allBlankSpan[i].style.width = "100%";
          allBlankSpan[i].style.height = "35px";
          allBlankSpan[i].style.backgroundColor = "#dddfe5";
          allBlankSpan[i].style.borderRadius = "5px";
        }
      }
    }
    this.props.isDragAndDropTrue(true);
  };

  touchUpFeature = (e, pageX) => {
    console.log(pageX);
    if (e.target.classList[0] !== "card") return;

    e.target.style.cursor = "pointer";
    e.target.style.position = "static";
    e.target.style.transform = "rotate(0deg)";

    const scrollHeighFromMain = Math.floor(this.props.scrollPosition);

    //For loop - Handle for every adding card to list
    for (let i = 1; i < 10; i++) {
      if (pageX < 285 - scrollHeighFromMain) {
        if (this.props.wholeList[0].tasks.includes(e.target.textContent))
          return this.mouseLeaveFeature(e);
        this.props.addNewCard(this.props.wholeList[0].id, e.target.textContent);
        this.props.deleteCardFeatureByMove(e, this.props.id);
      } else if (
        pageX > 285 * i - scrollHeighFromMain &&
        pageX < 285 * i + 285 - scrollHeighFromMain &&
        this.props.wholeList.length >= i + 1
      ) {
        if (this.props.wholeList[i].tasks.includes(e.target.textContent))
          return this.mouseLeaveFeature(e);
        this.props.addNewCard(this.props.wholeList[i].id, e.target.textContent);
        this.props.deleteCardFeatureByMove(e, this.props.id);
      }
    }

    this.props.isDragAndDropTrue(false);
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

  render() {
    return (
      <div
        key={this.props.task}
        className="card"
        onMouseDown={(e) => this.mouseDownFeature(e)}
        onMouseUp={(e) => this.mouseUpFeature(e)}
        onMouseMove={(e) => this.mouseMoveFeature(e)}
        onMouseLeave={(e) => this.mouseLeaveFeature(e)}
        onTouchStart={(e) => this.touchDownFeature(e)}
        onTouchMove={(e) => this.touchMoveFeature(e)}
        onTouchEnd={(e) => this.touchUpFeature(e, this.state.touchesMovePageX)}
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
