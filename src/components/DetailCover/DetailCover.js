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

const StyledDetail = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 75vw;
  padding: 20px;
  background-color: #f4f5f7;
`;

const StyledTaskName = styled.input`
  width: 220px;
  background-color: #f4f5f7;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #172b4d;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const DetailCover = ({ taskName }) => {
  return (
    <StyledCover className="cover">
      <StyledDetail>
        <StyledTaskName value={taskName} />
      </StyledDetail>
    </StyledCover>
  );
};

export default DetailCover;
