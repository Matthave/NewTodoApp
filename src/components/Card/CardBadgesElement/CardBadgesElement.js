import React from "react";
import styled from "styled-components";

const StyledElementWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  pointer-events: none;
`;

function CardBadgesElement({ task }) {
  return (
    <StyledElementWraper>
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
