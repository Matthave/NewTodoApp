import React from "react";
import styled from "styled-components";

const StyledSubTasksCounter = styled.h4`
  display: ${(props) => (props.disabled ? "none" : "flex")};
  align-self: ${(props) => (props.card ? "null" : "flex-start")};
  border-radius: 4px;
  padding: 2.5px 5px;
  margin: 0px 4px 4px;
  font-size: 12px;
`;

const StyledIcon = styled.span`
  margin-right: 5px;
  font-size: 12.5px;
`;

function TaskPreviewInCard({
  totalTasks,
  unActiveTasks,
  card,
  matchedCover = [],
}) {
  return (
    <>
      {totalTasks !== 0 ? (
        <StyledSubTasksCounter
          card={card}
          disabled={matchedCover.length !== 0 && matchedCover[0].fullCover}
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
