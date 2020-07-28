import React, { useEffect } from "react";
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
  position: relative;
  width: 80%;
  height: 35px;
  border-radius: 5px;
  margin: 0 10px;
  margin-bottom: 4px;
  list-style: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    border-left: 10px solid rgba(0, 0, 0, 0.5);
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
  margin-top: ${(props) => (props.marginTop ? "5px" : "15px")};

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

const StyledIconCheck = styled.div`
  display: none;
  position: absolute;
  right: 5px;
  top: 17.5px;
  transform: translate(-50%, -50%);
  font-size: 10px;
  color: #fff;
`;

const StyledNameSox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
  font-size: 13px;
`;
function LabelsChooseColors({
  detailCover,
  handleLabelsVisibility,
  filteredColors,
  nameLabelVisibility,
  toggleLabelColorToCard,
  taskId,
  generateCheckIcon,
  searchLabelColor,
  searchInputLabel,
}) {
  useEffect(() => {
    generateCheckIcon();
  });

  return (
    <StyledLabels className="label" detailCover={detailCover}>
      <StyledLabelTitle className="label">
        Labels{" "}
        <StyledX
          className="fas fa-times"
          onClick={() => handleLabelsVisibility(false)}
        />
      </StyledLabelTitle>
      <StyledLabelInput
        placeholder="Search Labels..."
        className="label"
        onChange={(e) => searchLabelColor(e)}
        value={searchInputLabel}
      />
      {filteredColors.map((color) => (
        <StyledLabelWrapEle key={color.color} className="label">
          <StyledLabelElement
            onClick={() => toggleLabelColorToCard(color.color, taskId)}
            style={{ backgroundColor: `${color.color}` }}
            className="label"
            id={color.color}
          >
            <StyledNameSox>{color.value}</StyledNameSox>
            <StyledIconCheck
              className="fas fa-check"
              id={`${color.color}Check`}
            />
          </StyledLabelElement>{" "}
          <StyledIcon
            className="fas fa-pen label"
            onClick={(e) => nameLabelVisibility(e, true, color.color, "edit")}
          />
        </StyledLabelWrapEle>
      ))}
      <StyledBtn className="label">Create Label</StyledBtn>
    </StyledLabels>
  );
}

export default LabelsChooseColors;
