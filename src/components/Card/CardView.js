import React from "react";
import TasksPreviewCard from "../TasksList/TasksPreviewInCard/TaskPreviewInCard";
import styled from "styled-components";
import CardCoverElement from "./CardCoverElement/CardCoverElement";
import CardBadgesElement from "./CardBadgesElement/CardBadgesElement";
import CardContentElement from "./CardContentElement/CardContentElement";
import CardTermsElement from "./CardTermsElement/CardTermsElement";

const StyledElementWraper = styled.div`
  display: flex;
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
      }}
    >
      <CardCoverElement task={task} />
      <CardBadgesElement task={task} />
      <CardContentElement
        task={task}
        listId={listId}
        visibilityOptionFunction={visibilityOptionFunction}
      />
      <StyledElementWraper>
        <CardTermsElement task={task} />
        <TasksPreviewCard
          unActiveTasks={unActiveTasks}
          totalTasks={totalTasks}
          card={true}
        />
      </StyledElementWraper>
    </div>
  );
}

export default CardView;
