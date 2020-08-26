import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

const StyledLabelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledTitle = styled.h2`
  width: 100%;
  color: #42516e;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  margin-left: ${(props) => (props.marginLeft ? "6" : "none")};
  font-size: ${(props) => (props.biggerSize ? "23px" : "17px")};
  color: #42516e;
  cursor: ${(props) => (props.pointer ? "pointer" : "initial")};
  vertical-align: middle;
`;

const StyledPlaceholder = styled.h3`
  text-align: center;
  color: #172b4d;
  font-size: 14px;
  font-weight: 400;
`;

function LabelsWrap({ matchedColorsToThisCard, toggleCurrentListVisiFunc }) {
  return (
    <StyledWrap>
      <StyledTitle marginTop className="detailCoverClose">
        <StyledIcon className="fas fa-tag detailCoverClose" />
        Labels
      </StyledTitle>
      {matchedColorsToThisCard.length === 0 ? (
        <StyledPlaceholder className="detailCoverClose">
          This card have no labels yet
        </StyledPlaceholder>
      ) : (
        <StyledLabelsWrap className="detailCover_labelsWrap detailCoverClose">
          {matchedColorsToThisCard.map((ele) => (
            <div
              key={ele.color}
              id={`${ele.labelId}DetailCover`}
              className={`labelElement_DetailCover`}
              style={{
                backgroundColor: ele.color,
                margin: "0px 5px 5px 0px",
              }}
              onClick={() => toggleCurrentListVisiFunc("labelVisi")}
            >
              {ele.name}
            </div>
          ))}
        </StyledLabelsWrap>
      )}
    </StyledWrap>
  );
}

export default LabelsWrap;
