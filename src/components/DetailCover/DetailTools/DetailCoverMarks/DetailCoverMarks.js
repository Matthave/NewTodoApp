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
  margin-bottom: 10px;
  margin-top: ${(props) => (props.marginTop ? "10px" : "none")};
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
  font-size: ${(props) => (props.biggerSize ? "23px" : "17px")};
  color: #42516e;
  cursor: ${(props) => (props.pointer ? "pointer" : "none")};
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
  margin-left: ${(props) => (props.marginLeft ? "6px" : "0")};
  color: ${(props) => (props.marginLeft ? "#42516e" : "#fff")};
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: ${(props) => (props.hoverBgc ? "#dadce0" : "#6abc54")};
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
      <StyledDetailDescription>
        <StyledTitle>
          <StyledIcon className="fas fa-stream" />
          Description
          <StyledButton
            greyBgc
            marginLeft
            hoverBgc
            style={{
              opacity: `${listOfAllComments.length !== 0 ? "1" : "0"}`,
            }}
            onClick={(e) => editCommentToCard(toggleCommentVisibility)}
          >
            Edit
          </StyledButton>
        </StyledTitle>
        {listOfAllComments.length !== 0 ? null : (
          <StyledTextArea
            placeholder="Add more detail comment..."
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
          <StyledComment key={ele.id}>{ele.comment}</StyledComment>
        ))}
      </StyledDetailDescription>
    </StyledDetailMarks>
  );
}

export default DetailCoverMarks;
