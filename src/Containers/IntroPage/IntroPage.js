import React, { Component } from "react";
import IntroMain from "../../components/IntroPage/IntroMain";
import IntroNav from "../../components/IntroPage/IntroNav";
import styled from "styled-components";
import imgOne from "../../img/One.png";
import imgTwo from "../../img/Two.png";
import imgThree from "../../img/Three.png";
import imgFour from "../../img/Four.png";
import imgFive from "../../img/Five.png";

const StyledIntro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export class IntroPage extends Component {
  state = {
    allImages: [
      {
        img: imgOne,
        text: "Create a board for any project, give it a name, and start plan.",
        id: 0,
      },
      {
        img: imgTwo,
        text: "Add lists to create steps in a workflow that is right for You.",
        id: 1,
      },
      {
        img: imgThree,
        text:
          "Create cards for tasks to complete or information You want to organize",
        id: 2,
      },
      {
        img: imgFour,
        text:
          "Double-Click on a card to add details, due dates, tasksLists, comments and labels.",
        id: 3,
      },
      {
        img: imgFive,
        text:
          "Move them across lists to show progress. Go from 'To Do' to 'Finished' in no time!",
        id: 4,
      },
    ],
    currentImg: 0,
  };

  componentDidMount() {
    document.addEventListener("scroll", this.scrollEventStart);
    const firstDot = document.getElementById(`${this.state.currentImg}`);
    firstDot.style.width = "15px";
    firstDot.style.height = "15px";
    firstDot.style.backgroundColor = "#23cfea";
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollEventStart);
  }

  scrollEventStart = (e) => {
    const scrollHeight = window.scrollY;
    const introNav = document.querySelector(".introNav");
    if (scrollHeight > 100) {
      introNav.style.backgroundColor = "#0079bf";
    } else {
      introNav.style.backgroundColor = "transparent";
    }
  };

  sliderFunc = (direction) => {
    const { currentImg } = this.state;
    const everyDots = document.querySelectorAll(".dots");
    everyDots.forEach((dot) => {
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.backgroundColor = "#888";
    });

    if (direction === "right") {
      if (currentImg <= 3) {
        const currentDot = document.getElementById(`${currentImg + 1}`);
        currentDot.style.width = "15px";
        currentDot.style.height = "15px";
        currentDot.style.backgroundColor = "#23cfea";
        this.setState({ currentImg: currentImg + 1 });
      } else {
        const currentDot = document.getElementById(`0`);
        currentDot.style.width = "15px";
        currentDot.style.height = "15px";
        currentDot.style.backgroundColor = "#23cfea";
        this.setState({ currentImg: 0 });
      }
    } else {
      if (currentImg >= 1) {
        const currentDot = document.getElementById(`${currentImg - 1}`);
        currentDot.style.width = "15px";
        currentDot.style.height = "15px";
        currentDot.style.backgroundColor = "#23cfea";
        this.setState({ currentImg: currentImg - 1 });
      } else {
        const currentDot = document.getElementById(`4`);
        currentDot.style.width = "15px";
        currentDot.style.height = "15px";
        currentDot.style.backgroundColor = "#23cfea";
        this.setState({ currentImg: 4 });
      }
    }
  };

  sliderByDotFunc = (e, dotId) => {
    const everyDots = document.querySelectorAll(".dots");
    everyDots.forEach((dot) => {
      dot.style.width = "10px";
      dot.style.height = "10px";
      dot.style.backgroundColor = "#888";
    });
    e.target.style.width = "15px";
    e.target.style.height = "15px";
    e.target.style.backgroundColor = "#23cfea";
    this.setState({ currentImg: dotId });
  };

  render() {
    const { allImages, currentImg } = this.state;
    return (
      <StyledIntro>
        <IntroNav></IntroNav>
        <IntroMain
          sliderFunc={this.sliderFunc}
          sliderByDotFunc={this.sliderByDotFunc}
          allImages={allImages}
          currentImg={currentImg}
        ></IntroMain>
      </StyledIntro>
    );
  }
}

export default IntroPage;
