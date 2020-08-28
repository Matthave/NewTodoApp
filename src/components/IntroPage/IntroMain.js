import React from "react";
import IntroHeader from "./IntroHeader/IntroHeader";
import IntroSlider from "./IntroSlider/IntroSlider";
import styled from "styled-components";

const StyledMainWrap = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function IntroMain() {
  return (
    <StyledMainWrap>
      <IntroHeader></IntroHeader>
      <IntroSlider></IntroSlider>
    </StyledMainWrap>
  );
}

export default IntroMain;
