import React from "react";
import styled from "styled-components";

const StyledDetailMarks = styled.div`
  flex-grow: 1;
`;

const StyledDetailDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 25px;
`;

const StyledTitle = styled.h2`
  width: 100%;
  color: #42516e;
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  background-color: #eaecf0;
  margin: 10px auto;
  padding: 7.5px 5px;
  border-radius: 3px;
  min-height: 50px;
  resize: none;
  cursor: pointer;
  transition: 0.1s linear;

  &:focus {
    min-height: 125px;
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  font-size: 17px;
  color: #42516e;
`;

const StyledLabelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function DetailCoverMarks({ matchedColorsToThisCard }) {
  return (
    <StyledDetailMarks>
      <div>
        <h2>Lables</h2>
        <StyledLabelsWrap className="detailCover_labelsWrap">
          {matchedColorsToThisCard.map((ele) => (
            <div
              key={ele.color}
              id={`${ele.labelId}DetailCover`}
              className={`labelElement_DetailCover`}
              style={{ backgroundColor: ele.color, margin: "0px 5px 5px 0px" }}
            >
              {ele.name}
            </div>
          ))}
        </StyledLabelsWrap>
      </div>
      <StyledDetailDescription>
        <StyledTitle>
          <StyledIcon className="fas fa-stream" />
          Description
        </StyledTitle>
        <StyledTextArea
          placeholder="Add more detail comment..."
          className="input"
        ></StyledTextArea>
      </StyledDetailDescription>
    </StyledDetailMarks>
  );
}

export default DetailCoverMarks;
