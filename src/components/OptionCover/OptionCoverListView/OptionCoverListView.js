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
`;

function OptionCoverListView({
  deleteCard,
  listId,
  handleLabelsVisibility,
  addPriorityForCards,
  optionCoverData,
}) {
  return (
    <StyledListBlock className="cover_listBlock">
      <ul>
        <StyledList onClick={() => handleLabelsVisibility(true)}>
          <StyledIcon className="fas fa-tag" />
          Edit labels
        </StyledList>
        <StyledList>
          <StyledIcon className="fas fa-long-arrow-alt-right" />
          Move
        </StyledList>
        <StyledList>
          <StyledIcon className="far fa-clipboard" />
          Copy
        </StyledList>
        <StyledList>
          <StyledIcon className="far fa-clock" />
          Date Change
        </StyledList>
        <StyledList
          onClick={() =>
            addPriorityForCards(
              optionCoverData[0].clickedCard,
              optionCoverData[0].clickedCardId
            )
          }
        >
          <StyledIcon className="fas fa-exclamation-circle" />
          Priority
        </StyledList>
        <StyledList
          onClick={(e) =>
            deleteCard(listId, optionCoverData[0].clickedCardId, "byButton")
          }
        >
          <StyledIcon className="fas fa-archive" />
          Archive
        </StyledList>
      </ul>
    </StyledListBlock>
  );
}

export default OptionCoverListView;
