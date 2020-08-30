import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 5px auto 25px;
  padding: 0 5px;
`;

const StyledSectionTitle = styled.h3`
  width: 100%;
  font-size: 15px;
  margin: 0 auto;
  padding: 0 10px;
  color: #999;
`;

const StyledColorElement = styled.div`
  width: 18%;
  height: 35px;
  border-radius: 4px;
  filter: grayscale(15%);
  margin: 2px;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    opacity: 0.75;
  }
`;

const StyledTypeElementWrap = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.reverseDirection ? "column-reverse" : "column"};
  width: 45%;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #aaa;
  background-color: #b4bac3;
  margin: 0 5px;
  cursor: pointer;
`;

const StyledLinePart = styled.span`
  width: ${(props) => (props.upperLine ? "80%" : "35%")};
  height: 4px;
  border-radius: 5px;
  background-color: ${(props) => (props.inBox ? "#B4BAC3" : "#fff")};
  margin: 3px 5px; ;
`;

const StyledCirclePart = styled.span`
  width: 15px;
  height: 15px;
  background-color: #b4bac3;
  border-radius: 50%;
  margin: 0 5px 2px auto;
`;

const StyledHalfBox = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  flex-direction: column;
  background-color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: auto 0 0;
`;

function CoverCardChoice({ labelColors, setCoverColorFunc }) {
  return (
    <StyledWrap>
      <StyledSectionTitle>Type</StyledSectionTitle>
      <StyledSection>
        <StyledTypeElementWrap className="coverCardType">
          <StyledHalfBox>
            <StyledLinePart upperLine inBox />
            <StyledLinePart inBox />
            <StyledCirclePart />
          </StyledHalfBox>
        </StyledTypeElementWrap>
        <StyledTypeElementWrap reverseDirection className="coverCardType">
          <StyledLinePart upperLine />
          <StyledLinePart />
        </StyledTypeElementWrap>
      </StyledSection>
      <StyledSectionTitle>Colors</StyledSectionTitle>
      <StyledSection>
        {labelColors.map((color) => (
          <StyledColorElement
            style={{ backgroundColor: color.color }}
            onClick={() => setCoverColorFunc(color.color)}
          />
        ))}
      </StyledSection>
      <StyledSectionTitle>Unsplash</StyledSectionTitle>
      <StyledSection></StyledSection>
    </StyledWrap>
  );
}

export default CoverCardChoice;
