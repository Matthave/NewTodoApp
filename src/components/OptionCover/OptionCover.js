import React from "react";
import styled from "styled-components";

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledTextArea = styled.textarea`
  position: fixed;
  height: 100px;
  width: 260px;
  padding: 7.5px;
  border-radius: 5px;
  resize: none;
`;

const OptionCover = () => {
  return (
    <StyledCover className="cover">
      <StyledTextArea />
    </StyledCover>
  );
};

export default OptionCover;
