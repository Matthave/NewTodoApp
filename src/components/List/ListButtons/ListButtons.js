import React from "react";
import styled from "styled-components";

const StyledAddButton = styled.button`
  background-color: #5aac44;
  border-radius: 5px;
  color: white;
  padding: 8px 20px;
  margin: 5px 0px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background-color: #67ba50;
  }
`;

const StyledSpanX = styled.span`
  font-size: 2.3rem;
  vertical-align: middle;
  color: #666;
  cursor: pointer;
`;

function ListButtons({
  showAddField,
  id,
  textAreaValue,
  addNewCardFeature,
  swapAddFieldFeature,
}) {
  return (
    <>
      {showAddField ? (
        <>
          <StyledAddButton onClick={() => addNewCardFeature(id, textAreaValue)}>
            Add Card
          </StyledAddButton>
          <StyledSpanX
            className="fas fa-times"
            onClick={() => swapAddFieldFeature("SpanX")}
          />
        </>
      ) : null}
    </>
  );
}

export default ListButtons;
