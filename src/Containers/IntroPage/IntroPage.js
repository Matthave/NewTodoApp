import React, { Component } from "react";
import IntroMain from "../../components/IntroPage/IntroMain";
import IntroNav from "../../components/IntroPage/IntroNav";
import styled from "styled-components";

const StyledIntro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
`;

export class IntroPage extends Component {
  componentDidMount() {
    document.addEventListener("scroll", (e) => this.scrollEventStart(e));
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

  render() {
    return (
      <StyledIntro>
        <IntroNav></IntroNav>
        <IntroMain></IntroMain>
      </StyledIntro>
    );
  }
}

export default IntroPage;
