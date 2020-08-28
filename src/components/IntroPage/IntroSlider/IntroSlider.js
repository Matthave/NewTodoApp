import React from "react";
import styled from "styled-components";

const StyledSliderWrap = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #fff;
`;

const StyledText = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 50px;
  margin: auto 0;
  font-family: "Pacifico", cursive;
`;

function IntroSlider() {
  return (
    <StyledSliderWrap>
      <StyledText>SLIDER HERE</StyledText>
    </StyledSliderWrap>
  );
}

export default IntroSlider;
