import React from "react";
import styled from "styled-components";

const StyledLabels = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: ${(props) => (props.detailCover ? "96px" : "0")};
  left: ${(props) => (props.detailCover ? "390px" : "0")};
  width: 310px;
  height: 605px;
  transform: translate(270px);
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
`;

const StyledLabelWrapEle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLabelElement = styled.div`
  width: 80%;
  height: 35px;
  border-radius: 5px;
  margin: 0 10px;
  margin-bottom: 4px;
  list-style: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const StyledIcon = styled.span`
  align-self: center;
  border-radius: 3px;
  margin: 0 auto;
  margin-bottom: 4px;
  padding: 10.5px;
  font-size: 15px;
  color: #aaa;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
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

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledBtn = styled.div`
  width: 95%;
  background-color: #f5f6f8;
  text-align: center;
  padding: 8px 5px;
  margin: 0 auto;
  margin-top: 15px;
  font-size: 13px;
  color: #42516e;
  box-shadow: 0px 0px 1px 1.5px #ebecef;
  cursor: pointer;

  &:hover {
    background-color: #e5e6e8;
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

const labelColors = [
  "#61BD4F",
  "#F2D600",
  "#FF9F1A",
  "#EB5A46",
  "#C377E0",
  "#0079BF",
  "#00C2E0",
  "#51E898",
  "#FF78CB",
  "#344563",
  "#B3BAC5",
];

function LabelsView({ handleLabelsVisibility, detailCover }) {
  return (
    <StyledLabels className="label" detailCover={detailCover}>
      <StyledLabelTitle className="label">
        Labels{" "}
        <StyledX
          className="fas fa-times"
          onClick={() => handleLabelsVisibility(false)}
        />
      </StyledLabelTitle>
      <StyledLabelInput placeholder="Search Labels..." className="label" />
      {labelColors.map((color) => (
        <StyledLabelWrapEle key={color} className="label">
          <StyledLabelElement
            style={{ backgroundColor: `${color}` }}
            className="label"
          />{" "}
          <StyledIcon className="fas fa-pen label" />
        </StyledLabelWrapEle>
      ))}
      <StyledBtn className="label">Create Label</StyledBtn>
    </StyledLabels>
  );
}

export default LabelsView;
