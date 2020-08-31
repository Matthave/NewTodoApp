import React from "react";
import styled from "styled-components";

const StyledElementWraper = styled.div`
  display: ${(props) => (props.disabled ? "none" : "flex")};
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  pointer-events: none;
`;

function CardBadgesElement({ task, matchedCover }) {
  return (
    <StyledElementWraper
      disabled={matchedCover.length !== 0 && matchedCover[0].fullCover}
    >
      {task.badges.map((ele) => (
        <div
          key={ele.color}
          id={ele.labelId}
          className="labelElement"
          style={{ backgroundColor: ele.color, pointerEvents: "none" }}
        >
          {ele.name}
        </div>
      ))}
    </StyledElementWraper>
  );
}

export default CardBadgesElement;
