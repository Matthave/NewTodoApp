import React from "react";
import styled from "styled-components";

const StyledBack = styled.span`
  position: fixed;
  left: 10px;
  top: 16px;
  margin-left: 10px;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

const StyledNameLabels = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: ${(props) => (props.detailCover ? "96px" : "0")};
  left: ${(props) => (props.detailCover ? "390px" : "0")};
  width: 310px;
  height: 350px;
  transform: translate(270px);
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
`;

const StyledLabelTitle = styled.h2`
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  font-size: 15px;
  color: #42516e;
`;

const StyledLabelInput = styled.input`
  width: 95%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 15px auto;
  margin-top: ${(props) => (props.marginTop ? "5px" : "15px")};

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledName = styled.h3`
  margin-left: 7px;
  margin-top: 7px;
`;

const StyledWrapColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-top: 7px;
`;

const StyledColorSquar = styled.div`
  width: 18%;
  height: 40px;
  border-radius: 4px;
  margin-right: 2.5px;
  margin-left: 2.5px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

const StyledX = styled.span`
  position: fixed;
  right: 16px;
  top: 16px;
  margin-left: 10px;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

function LabelsNameColors({ nameLabelVisibility, labelColors, detailCover }) {
  return (
    <StyledNameLabels className="label" detailCover={detailCover}>
      <StyledLabelTitle className="label">
        Change Label <StyledX className="fas fa-times" />
        <StyledBack
          className="fas fa-angle-left label"
          onClick={() => nameLabelVisibility(false)}
        />
      </StyledLabelTitle>
      <StyledName>Name</StyledName>
      <StyledLabelInput className="label" marginTop />
      <StyledName>Colors</StyledName>
      <StyledWrapColors>
        {labelColors.map((color) => (
          <StyledColorSquar
            style={{ backgroundColor: `${color}` }}
            key={color}
          />
        ))}
      </StyledWrapColors>
    </StyledNameLabels>
  );
}

export default LabelsNameColors;
