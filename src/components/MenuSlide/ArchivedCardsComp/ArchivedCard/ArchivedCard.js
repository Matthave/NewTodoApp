import React from "react";
import styled from "styled-components";
import CardBadgesElement from "../../../Card/CardBadgesElement/CardBadgesElement";
import CardCoverElement from "../../../Card/CardCoverElement/CardCoverElement";
import CardTermsElement from "../../../Card/CardTermsElement/CardTermsElement";

const StyledCard = styled.div`
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  min-height: 40px;
  max-width: 260px;
  word-break: break-all;
  margin: 20px auto 5px auto;
  font-size: 1.4rem;
  box-shadow: 0px 0.5px 0px 0.5px #aaa;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  color: black;
`;

const StyledContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
  padding: 5px 7.5px;
`;

const StyledContent = styled.h3`
  flex-grow: 1;
  font-size: 14px;
  font-weight: 400;
  color: #172b4d;
`;

function ArchivedCard({ taskDetailsFunction, archivedCard, listOfAllCover }) {
  const matchedCover = listOfAllCover.filter(
    (ele) => ele.id === archivedCard.id
  );
  return (
    <StyledCard
      className="menu"
      onDoubleClick={(e) =>
        taskDetailsFunction(
          archivedCard.taskName,
          archivedCard.currentListName,
          archivedCard.currentList,
          archivedCard.id
        )
      }
      id={archivedCard.id}
      style={{
        border:
          archivedCard.priority === "priority" ? "1px solid #db4a36" : null,
        backgroundColor:
          matchedCover.length !== 0 && matchedCover[0].fullCover
            ? matchedCover[0].background
            : "#fff",
      }}
    >
      <CardCoverElement task={archivedCard} />
      <CardBadgesElement task={archivedCard} matchedCover={matchedCover} />
      <StyledContentWrap>
        <StyledContent>{archivedCard.taskName}</StyledContent>
      </StyledContentWrap>
      <CardTermsElement task={archivedCard} matchedCover={matchedCover} />
    </StyledCard>
  );
}

export default ArchivedCard;
