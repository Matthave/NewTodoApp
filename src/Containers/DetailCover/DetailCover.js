import React from "react";
import DetailCoverView from "../../components/DetailCover/DetailCoverView/DetailCoverView";

class DetailCover extends React.Component {
  state = {
    taskTitle: "",
    commentValue: "",
  };

  componentDidMount() {
    this.setState({
      taskTitle: this.props.taskName,
    });
  }

  taskTitleFeature = (e) => {
    this.setState({
      taskTitle: e.target.value,
    });
  };

  commentChange = (e) => {
    this.setState({ commentValue: e.target.value }); //Set input comment
  };

  addCommentToCard = (e, taskId, comment) => {
    //Add comment by click and by Enter button, add comment to commentList and TextArea is disparing, Comment is generate
    // by list of matched comment in DetailCoverMarks Component
    if (e.target.className.includes("commentBtn") || e.which === 13) {
      this.props.setListOfAllComments([
        ...this.props.listOfAllComments,
        {
          id: taskId,
          comment: comment,
        },
      ]);
      this.props.toggleCommentFeature(false);
    }
  };

  editCommentToCard = (e, taskId) => {
    //Function that run when we want edit our comment - EditBtn is disapiring, textArea is appearing
    this.props.toggleCommentFeature(true);
    const commentIndexToDelete = this.props.listOfAllComments.findIndex(
      (ele) => ele.id === taskId
    );
    this.props.listOfAllComments.splice(commentIndexToDelete, 1);
  };

  render() {
    const {
      taskId,
      taskTitleList,
      updateCard,
      deleteCard,
      addNewCard,
      idUpdatedList,
      visibilityChangeListInDetails,
      wholeList,
      moveCardToAnotherList,
      labelsVisibility,
      handleLabelsVisibility,
      toggleLabelColorToCard,
      listOfAllBadges,
      labelColors,
      setLabelColors,
      listOfAllTasksId,
      addPriorityForCards,
      toggleCommentVisibility,
      toggleCommentFeature,
      listOfAllComments,
      toggleDetailMove,
      listOfAllPriorityTasks,
      copyVisibility,
      toggleDateVisibility,
      dateVisibility,
      listOfAllTerms,
      toggleTermToCard,
      termDoneCheckbox,
      tasksListVisibility,
      setTasksListVisibility,
      setListOfTasksList,
      listOfAllTasksList,
    } = this.props;

    const { taskTitle, commentValue } = this.state;

    const copyOfallBadges = [...listOfAllBadges];
    const matchedColorsToThisCard = copyOfallBadges.filter(
      (ele) => ele.id === taskId
    );

    const copyOfAllComment = [...listOfAllComments];
    const matchedComments = copyOfAllComment.filter((ele) => ele.id === taskId);

    const copyOfAllPriority = [...listOfAllPriorityTasks];
    const matchedPriority = copyOfAllPriority.filter((ele) => ele === taskId);

    const copyOfAllTerms = [...listOfAllTerms];
    const matchedTerms = copyOfAllTerms.filter((ele) => ele.id === taskId);

    const copyOfAllListTasks = [...listOfAllTasksList];
    const matchedListTasks = copyOfAllListTasks.filter(
      (ele) => ele.id === taskId
    );

    return (
      <>
        <DetailCoverView
          updateCard={updateCard}
          addNewCard={addNewCard}
          taskTitle={taskTitle}
          taskTitleFeature={this.taskTitleFeature}
          taskTitleList={taskTitleList}
          visibilityChangeListInDetails={visibilityChangeListInDetails}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          labelsVisibility={labelsVisibility}
          handleLabelsVisibility={handleLabelsVisibility}
          deleteCard={deleteCard}
          idUpdatedList={idUpdatedList}
          taskId={taskId}
          toggleLabelColorToCard={toggleLabelColorToCard}
          listOfAllBadges={listOfAllBadges}
          matchedColorsToThisCard={matchedColorsToThisCard}
          labelColors={labelColors}
          setLabelColors={setLabelColors}
          listOfAllTasksId={listOfAllTasksId}
          addPriorityForCards={addPriorityForCards}
          toggleCommentFeature={toggleCommentFeature}
          toggleCommentVisibility={toggleCommentVisibility}
          commentChange={this.commentChange}
          commentValue={commentValue}
          addCommentToCard={this.addCommentToCard}
          listOfAllComments={matchedComments}
          editCommentToCard={this.editCommentToCard}
          toggleDetailMove={toggleDetailMove}
          matchedPriority={matchedPriority}
          copyVisibility={copyVisibility}
          toggleDateVisibility={toggleDateVisibility}
          dateVisibility={dateVisibility}
          matchedTerms={matchedTerms}
          toggleTermToCard={toggleTermToCard}
          termDoneCheckbox={termDoneCheckbox}
          setTasksListVisibility={setTasksListVisibility}
          tasksListVisibility={tasksListVisibility}
          setListOfTasksList={setListOfTasksList}
          listOfAllTasksList={listOfAllTasksList}
          matchedListTasks={matchedListTasks}
        />
      </>
    );
  }
}

export default DetailCover;
