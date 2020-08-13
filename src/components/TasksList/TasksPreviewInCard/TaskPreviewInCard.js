import React from "react";
import styled from "styled-components";

const StyledSubTasksCounter = styled.h4`
  align-self: ${(props) => (props.card ? "null" : "flex-start")};
  border-radius: 4px;
  padding: 2.5px 5px;
  margin: ${(props) => (props.card ? "5px 0px 0px 3px" : "0px 0px 0px 3px")};
  font-size: 12px;
`;

const StyledIcon = styled.span`
  margin-right: 5px;
  font-size: 12.5px;
  vertical-align: middle;
`;

function TaskPreviewInCard({ totalTasks, unActiveTasks, card }) {
  return (
    <>
      {totalTasks !== 0 ? (
        <StyledSubTasksCounter
          card={card}
          style={{
            backgroundColor: `${
              unActiveTasks === totalTasks ? "#61BD4F" : "initial"
            }`,
            color: `${unActiveTasks === totalTasks ? "#fff" : "#999"}`,
          }}
        >
          <StyledIcon className="fas fa-check-double" />
          {unActiveTasks}/{totalTasks}
        </StyledSubTasksCounter>
      ) : null}
    </>
  );
}

export default TaskPreviewInCard;
