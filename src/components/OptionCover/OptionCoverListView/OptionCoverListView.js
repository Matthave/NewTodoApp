import React from "react";
import styled from "styled-components";

const StyledListBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 250px;
`;

const StyledList = styled.li`
  list-style: none;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  padding: 7px 10px;
  font-size: 14px;
  color: white;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    transform: translateX(7.5px);
  }
`;

const StyledIcon = styled.span`
  margin-right: 6px;
  font-size: 13px;
  transition: 0.1s linear;
  pointer-events: none;
`;

function OptionCoverListView({
  archiveCard,
  listId,
  addPriorityForCards,
  optionCoverData,
  matchedPriority,
  toggleCurrentListVisiFunc,
}) {
  return (
    <StyledListBlock className="cover_listBlock">
      <ul>
        <StyledList onClick={() => toggleCurrentListVisiFunc("labelVisi")}>
          <StyledIcon className="fas fa-tag" />
          Edit labels
        </StyledList>
        <StyledList
          className="suggested"
          onClick={() => toggleCurrentListVisiFunc("moveToAnotherListVisi")}
        >
          <StyledIcon className="fas fa-long-arrow-alt-right" />
          Move
        </StyledList>
        <StyledList
          className="suggested"
          onClick={() => toggleCurrentListVisiFunc("copyCardVisi")}
        >
          <StyledIcon className="far fa-clipboard" />
          Copy
        </StyledList>
        <StyledList
          onClick={() => toggleCurrentListVisiFunc("datePickerVisi")}
          className="calendar"
        >
          <StyledIcon className="far fa-clock calendaer" />
          Date Change
        </StyledList>
        <StyledList
          onClick={(e) =>
            addPriorityForCards(
              e,
              optionCoverData[0].clickedCardId,
              "optionCover"
            )
          }
          style={{
            color: `${matchedPriority.length !== 0 ? "#db4a36" : "#FFF"}`,
          }}
        >
          <StyledIcon
            className="fas fa-exclamation-circle"
            style={{
              color: `${matchedPriority.length !== 0 ? "#db4a36" : "#FFF"}`,
            }}
          />
          Priority
        </StyledList>
        <StyledList
          onClick={(e) => archiveCard(listId, optionCoverData[0].clickedCardId)}
        >
          <StyledIcon className="fas fa-archive" />
          Archive
        </StyledList>
      </ul>
    </StyledListBlock>
  );
}

export default OptionCoverListView;
