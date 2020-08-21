import React from "react";
import styled from "styled-components";

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

const StyledIcon = styled.span`
  margin-right: 6px;
  margin-left: ${(props) => (props.marginLeft ? "6" : "none")};
  font-size: ${(props) => (props.biggerSize ? "23px" : "17px")};
  color: #42516e;
  cursor: ${(props) => (props.pointer ? "pointer" : "initial")};
  vertical-align: middle;
`;

function DetailCommentElemnt({
  listOfAllComments,
  editCommentToCard,
  commentChange,
  addCommentToCard,
  taskId,
  commentValue,
  commentVisi,
  commentVisiToggleFunc,
}) {
  return (
    <>
      {listOfAllComments.length !== 0 ? null : (
        <StyledTextArea
          placeholder="Click to add more detailed comment..."
          className="input textArea"
          onClick={() => commentVisiToggleFunc()}
          onChange={(e) => commentChange(e)}
          onKeyPress={(e) => addCommentToCard(e, taskId, commentValue)}
          value={commentValue}
        />
      )}
      {commentVisi ? (
        <StyledCommentOptionWrap>
          <StyledButton
            className="commentBtn"
            onClick={(e) => addCommentToCard(e, taskId, commentValue)}
          >
            SAVE
          </StyledButton>
          <StyledIcon
            biggerSize
            pointer
            className="far fa-times-circle commentClose"
            onClick={(e) => addCommentToCard(e, taskId, commentValue)}
          />
        </StyledCommentOptionWrap>
      ) : null}
      {listOfAllComments.map((ele) => (
        <StyledComment key={ele.id} onClick={() => editCommentToCard(taskId)}>
          {ele.comment}
        </StyledComment>
      ))}
    </>
  );
}

export default DetailCommentElemnt;
