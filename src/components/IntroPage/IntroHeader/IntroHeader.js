import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 95vh;
  background: linear-gradient(135deg, #0079bf, #5067c5);
`;

const StyledText = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 50px;
  margin: auto 0;
  font-family: "Pacifico", cursive;
`;

function IntroHeader() {
  return (
    <StyledHeader>
      <StyledText>TEXT AND IMGAGE HERE</StyledText>
    </StyledHeader>
  );
}

export default IntroHeader;
