import React from "react";
import styled from "styled-components";

const StyledWrapWarning = styled.div`
  display: flex;
  position: fixed;
  bottom: ${(props) => (props.visibility ? "0" : "-60px")};
  left: 50%;
  transform: translate(-50%);
  width: 320px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.65);
  color: #cb3a26;
  font-size: 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  z-index: 999;
  transition: 0.2s linear;
`;

const StyledText = styled.h3`
  text-align: center;
  margin: auto auto;
`;

function CardArchiveWarning({ cardDeleteWarningVisi }) {
  return (
    <StyledWrapWarning visibility={cardDeleteWarningVisi}>
      <StyledText>This card will be archived</StyledText>
    </StyledWrapWarning>
  );
}

export default CardArchiveWarning;
