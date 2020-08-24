import React, { useEffect } from "react";
import styled from "styled-components";

const StyledLabels = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  right: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  width: 310px;
  height: 555px;
  transform: ${(props) =>
    props.optionCoverPosition ? "translate(130px)" : "null"};
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 17.5px;
  box-shadow: 0 0 15px 1px rgba(50, 50, 50, 0.2);
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

const StyledLabelTitle = styled.div`
  display: flex;
  justify-content: space-between;
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

const StyledX = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

const StyledBack = styled.span`
  font-size: 15px;
  opacity: 0;
`;

const StyledTitle = styled.h4``;

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
  optionCover,
  toggleCurrentListVisiFunc,
  filteredColors,
  nameLabelVisibilityFunc,
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
    <StyledLabels
      className="label"
      optionCoverPosition={optionCover}
      detailCover={detailCover}
    >
      <StyledLabelTitle className="label">
        <StyledBack className="fas fa-angle-left label" />
        <StyledTitle>Labels</StyledTitle>
        <StyledX
          className="fas fa-times"
          onClick={() => toggleCurrentListVisiFunc("labelVisi")}
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
            onClick={(e) =>
              nameLabelVisibilityFunc(e, true, color.color, "edit")
            }
          />
        </StyledLabelWrapEle>
      ))}
    </StyledLabels>
  );
}

export default LabelsChooseColors;
