import React from "react";
import styled from "styled-components";

const StyledIcon = styled.span`
  margin-right: 5px;
  font-size: 12.5px;
`;

const StyledTermInCard = styled.span`
  color: #888;
  font-size: 12.5px;
  letter-spacing: 0.5px;
`;

const StyledTermWrap = styled.div`
  display: flex;
`;

function CardTermsElement({ task }) {
  return (
    <StyledTermWrap id={`${task.id}term`}>
      {task.date.map((ele) => (
        <StyledTermInCard
          key={ele.id}
          className={ele.classN}
          style={{ backgroundColor: ele.statusColor, color: ele.fontColor }}
        >
          <StyledIcon className="far fa-clock" />
          {`${ele.day} ${ele.monthName} ${ele.status}`}
        </StyledTermInCard>
      ))}
    </StyledTermWrap>
  );
}

export default CardTermsElement;
