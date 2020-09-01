import React from "react";
import styled from "styled-components";

const StyledElementWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  pointer-events: none;
`;

const StyledCoverBlock = styled.div`
  display: flex;
  width: 100%;
  height: ${(props) => (props.disabled ? "0px" : "30px")};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  transition: 0.1s linear;
  pointer-events: none;
`;

function CardCoverElement({ task }) {
  return (
    <StyledElementWraper padding0>
      {task.cover.length === 0 ? (
        <StyledCoverBlock disabled id={`cardCoverBlock${task.id}`} />
      ) : (
        task.cover.map((ele) => (
          <StyledCoverBlock
            key={ele.id}
            id={`cardCoverBlock${ele.id}`}
            style={{
              background: ele.background,
              backgroundImage: ele.backgroundImage,
            }}
          />
        ))
      )}
    </StyledElementWraper>
  );
}

export default CardCoverElement;
