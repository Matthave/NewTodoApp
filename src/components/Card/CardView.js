import React from "react";
import TasksPreviewCard from "../TasksList/TasksPreviewInCard/TaskPreviewInCard";
import styled from "styled-components";
import CardCoverElement from "./CardCoverElement/CardCoverElement";
import CardBadgesElement from "./CardBadgesElement/CardBadgesElement";
import CardContentElement from "./CardContentElement/CardContentElement";
import CardTermsElement from "./CardTermsElement/CardTermsElement";

const StyledElementWraper = styled.div`
  display: ${(props) => (props.disabled ? "none" : "flex")};
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  pointer-events: none;
`;

function CardView({
  task,
  listId,
  taskDetailsFunction,
  inputTitle,
  hideFontSizeLabel,
  visibilityOptionFunction,
  unActiveTasks,
  totalTasks,
  mouseDownFeature,
  labelFontSizeToggle,
  matchedCover,
}) {
  return (
    <div
      id={task.id}
      className="card"
      onDoubleClick={(e) =>
        taskDetailsFunction(task.taskName, inputTitle, listId, task.id)
      }
      onMouseDown={(e) => mouseDownFeature(e)}
      style={{
        border: task.priority === "priority" ? "1px solid #db4a36" : null,
        backgroundColor:
          matchedCover.length !== 0 && matchedCover[0].fullCover
            ? matchedCover[0].background
            : "#fff",
      }}
    >
      <CardCoverElement task={task} />
      <CardBadgesElement task={task} matchedCover={matchedCover} />
      <CardContentElement
        task={task}
        listId={listId}
        visibilityOptionFunction={visibilityOptionFunction}
      />
      <StyledElementWraper>
        <CardTermsElement task={task} matchedCover={matchedCover} />
        <TasksPreviewCard
          matchedCover={matchedCover}
          unActiveTasks={unActiveTasks}
          totalTasks={totalTasks}
          card={true}
        />
      </StyledElementWraper>
    </div>
  );
}

export default CardView;
