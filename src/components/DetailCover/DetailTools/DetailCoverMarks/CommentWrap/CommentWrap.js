import React from "react";
import DetailCommentElement from "../../../DetailElements/DetailCommentElement/DetailCommentElemnt";
import styled from "styled-components";

const StyledDetailDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;
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

function CommentWrap({
  listOfAllComments,
  editCommentToCard,
  taskId,
  toggleCurrentListVisiFunc,
  commentChange,
  addCommentToCard,
  commentValue,
  commentVisi,
  commentVisiToggleFunc,
}) {
  return (
    <StyledDetailDescription className="detailCoverClose">
      <StyledTitle className="detailCoverClose">
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
            cursor: `${listOfAllComments.length !== 0 ? "pointer" : "initial"}`,
            marginLeft: `${listOfAllComments.length !== 0 ? "6px" : "50px"}`,
          }}
          onClick={() => editCommentToCard(taskId)}
        >
          Edit
        </StyledButton>
      </StyledTitle>
      <DetailCommentElement
        listOfAllComments={listOfAllComments}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        editCommentToCard={editCommentToCard}
        commentChange={commentChange}
        addCommentToCard={addCommentToCard}
        taskId={taskId}
        commentValue={commentValue}
        commentVisi={commentVisi}
        commentVisiToggleFunc={commentVisiToggleFunc}
      />
    </StyledDetailDescription>
  );
}

export default CommentWrap;
