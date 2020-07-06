import React, { useState } from "react";
import styled from "styled-components";

const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledDetail = styled.div`
  position: fixed;
  top: 41px;
  left: 50%;
  bottom: 17.5px;
  transform: translate(-50%, 0%);
  width: 100%;
  max-width: 775px;
  padding: 15px;
  border-radius: 3px;
  background-color: #f4f5f7;
`;

const StyledTaskName = styled.input`
  width: calc(100% - 50px);
  background-color: #f4f5f7;
  border-radius: 1px;
  padding: 5px 4px;
  font-size: 1.8rem;
  font-weight: 600;
  color: #172b4d;

  &:focus {
    background-color: white;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledLightText = styled.h3`
  margin-top: 7.5px;
  font-weight: 400;
  font-size: 1.4rem;
  color: #172b4d;
`;

const StyledStrongText = styled.strong`
  cursor: pointer;
`;

const StyledChangeListDetails = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  position: fixed;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 4px 0.5px #ccc;
  margin-top: 10px;
  padding: 10px;
`;

const StyledReplaceTitle = styled.h3`
  width: 100%;
  position: relative;
  flex-grow: 1;
  text-align: center;
  font-size: 1.5rem;
  border-bottom: ${(props) => (props.border ? "1px solid #aaa" : "null")};
  padding-bottom: 6px;
  color: #555;
  font-weight: 400;

  & > .fa-times {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

const StyledSuggestList = styled.div`
  width: 100%;
  max-width: 260px;
  word-break: break-all;
  margin: 0 auto;
  padding: 9px 7.5px;
  font-size: 1.4rem;
  background-color: #eee;
  border-radius: 3px;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #f4f5f7;
  }
`;

const DetailCover = ({
  taskName,
  taskTitleList,
  updateCard,
  changeListInDetails,
  visibilityChangeListInDetails,
  wholeList,
}) => {
  const [taskTitle, setTaskTitle] = useState(taskName);

  const taskTitleFeature = (e) => {
    setTaskTitle(e.target.value);
  };
  return (
    <StyledCover className="cover" onClick={(e) => updateCard(e, taskTitle)}>
      <StyledDetail className="detail">
        <span className="fas fa-credit-card"></span>
        <StyledTaskName
          value={taskTitle}
          onChange={(e) => taskTitleFeature(e)}
        />
        <span
          className="fas fa-times close"
          onClick={(e) => updateCard(e, taskTitle)}
        ></span>
        <StyledLightText>
          On the list{" "}
          <StyledStrongText onClick={() => changeListInDetails()}>
            {taskTitleList}
          </StyledStrongText>
          {visibilityChangeListInDetails ? (
            <StyledChangeListDetails>
              <StyledReplaceTitle border>
                Replace Card
                <span
                  className="fas fa-times"
                  onClick={() => changeListInDetails()}
                ></span>
              </StyledReplaceTitle>
              <StyledReplaceTitle>Suggest</StyledReplaceTitle>
              {wholeList.map((list) => (
                <StyledSuggestList>{list.title}</StyledSuggestList>
              ))}
            </StyledChangeListDetails>
          ) : null}
        </StyledLightText>
      </StyledDetail>
    </StyledCover>
  );
};

export default DetailCover;
