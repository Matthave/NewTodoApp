import React from "react";
import styled from "styled-components";

const StyledDetailMarks = styled.div`
  flex-grow: 1;
`;

const StyledDetailDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const StyledTitle = styled.h2`
  width: 100%;
  color: #42516e;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledTextArea = styled.textarea`
  width: 90%;
  background-color: #eaecf0;
  margin: 0px auto 10px auto;
  padding: 7.5px 5px;
  border-radius: 3px;
  min-height: 75px;
  resize: none;
  cursor: pointer;
  transition: 0.1s linear;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  margin-left: ${(props) => (props.marginLeft ? "6" : "none")};
  font-size: ${(props) => (props.biggerSize ? "23px" : "17px")};
  color: #42516e;
  cursor: ${(props) => (props.pointer ? "pointer" : "initial")};
  vertical-align: middle;
`;

const StyledLabelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledPlaceholder = styled.h3`
  text-align: center;
  color: #172b4d;
  font-size: 14px;
  font-weight: 400;
`;

const StyledButton = styled.button`
  width: 75px;
  height: 32.5px;
  background-color: ${(props) => (props.greyBgc ? "#EAECF0" : "#5aac44")};
  border-radius: 4px;
  margin-right: 6px;
  color: ${(props) => (props.marginLeft ? "#42516e" : "#fff")};
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: ${(props) => (props.hoverBgc ? "#dadce0 " : "#6abc54")};
  }
`;

const StyledCommentOptionWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

const StyledComment = styled.h3`
  width: 300px;
  font-size: 15px;
  font-weight: 500;
  margin-right: 10px;
  word-break: break-all;
  color: #42516e;
  cursor: pointer;
`;

const StyledTermWrap = styled.div`
  display: flex;
`;

const StyledTerm = styled.h3`
  background-color: #eaecf0;
  border-radius: 4px;
  padding: 7.5px 10px;
  letter-spacing: 1px;
  font-weight: 400;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;

  &:hover {
    background-color: #dadce0;
  }
`;

const StyledStatus = styled.span`
  padding: 2.5px 5px;
  margin: 0 3px;
  border-radius: 3px;
  color: #fff;
`;

function DetailCoverMarks({
  matchedColorsToThisCard,
  handleLabelsVisibility,
  labelsVisibility,
  toggleCommentFeature,
  toggleCommentVisibility,
  commentChange,
  commentValue,
  addCommentToCard,
  taskId,
  listOfAllComments,
  editCommentToCard,
  matchedTerms,
  toggleDateVisibility,
}) {
  return (
    <StyledDetailMarks>
      <div>
        <StyledTitle marginTop>
          <StyledIcon className="fas fa-tag" />
          Labels
        </StyledTitle>
        {matchedColorsToThisCard.length === 0 ? (
          <StyledPlaceholder>This card have no labels yet</StyledPlaceholder>
        ) : (
          <StyledLabelsWrap className="detailCover_labelsWrap">
            {matchedColorsToThisCard.map((ele) => (
              <div
                key={ele.color}
                id={`${ele.labelId}DetailCover`}
                className={`labelElement_DetailCover`}
                style={{
                  backgroundColor: ele.color,
                  margin: "0px 5px 5px 0px",
                }}
                onClick={() => handleLabelsVisibility(!labelsVisibility)}
              >
                {ele.name}
              </div>
            ))}
          </StyledLabelsWrap>
        )}
      </div>
      <StyledTitle marginTop>
        <StyledIcon className="far fa-clock" />
        Terms
      </StyledTitle>
      {matchedTerms.length === 0 ? (
        <StyledPlaceholder>This card has no deadline yet</StyledPlaceholder>
      ) : (
        <>
          {matchedTerms.map((ele) => (
            <StyledTermWrap key={ele.term} className="calendar">
              <StyledTerm
                onClick={() => toggleDateVisibility()}
                className="calendar"
              >
                {`${ele.day} ${ele.monthName} ${ele.year}`} at{" "}
                {`${ele.hour}:${ele.minutes}`}
                <StyledStatus
                  style={{ backgroundColor: ele.statusColor }}
                >{`${ele.status}`}</StyledStatus>
                <StyledIcon
                  className="fas fa-chevron-down calendar"
                  pointer
                  marginLeft
                />
              </StyledTerm>
            </StyledTermWrap>
          ))}
        </>
      )}

      <StyledDetailDescription>
        <StyledTitle>
          <StyledIcon className="fas fa-stream" />
          Description
          <StyledButton
            greyBgc
            marginLeft
            hoverBgc
            style={{
              color: `${
                listOfAllComments.length !== 0 ? "#42516e" : "rgba(0,0,0,0)"
              }`,
              backgroundColor: `${
                listOfAllComments.length !== 0 ? "#EAECF0" : "rgba(0,0,0,0)"
              }`,
              cursor: `${
                listOfAllComments.length !== 0 ? "pointer" : "initial"
              }`,
              marginLeft: `${listOfAllComments.length !== 0 ? "6px" : "50px"}`,
            }}
            onClick={(e) => editCommentToCard(toggleCommentVisibility)}
          >
            Edit
          </StyledButton>
        </StyledTitle>
        {listOfAllComments.length !== 0 ? null : (
          <StyledTextArea
            placeholder="Click to add more detailed comment..."
            className="input textArea"
            onClick={() => toggleCommentFeature(true)}
            onChange={(e) => commentChange(e)}
            onKeyPress={(e) => addCommentToCard(e, taskId, commentValue)}
            value={commentValue}
          />
        )}
        {toggleCommentVisibility ? (
          <StyledCommentOptionWrap>
            <StyledButton
              className="commentBtn"
              onClick={(e) => addCommentToCard(e, taskId, commentValue)}
            >
              SAVE
            </StyledButton>
            <StyledIcon biggerSize pointer className="far fa-times-circle" />
          </StyledCommentOptionWrap>
        ) : null}
        {listOfAllComments.map((ele) => (
          <StyledComment
            key={ele.id}
            onClick={(e) => editCommentToCard(toggleCommentVisibility)}
          >
            {ele.comment}
          </StyledComment>
        ))}
      </StyledDetailDescription>
    </StyledDetailMarks>
  );
}

export default DetailCoverMarks;
