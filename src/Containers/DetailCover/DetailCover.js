import React from "react";
import DetailCoverView from "../../components/DetailCover/DetailCoverView/DetailCoverView";

class DetailCover extends React.Component {
  state = {
    taskTitle: "",
    commentValue: "",
    moveToAnotherListVisi: false,
    copyCardVisi: false,
    labelVisi: false,
    datePickerVisi: false,
    moveToInSuggestedVisi: false,
    tasksListVisi: false,
  };

  componentDidMount() {
    this.setState({
      taskTitle: this.props.taskName,
    });

    document.addEventListener("click", (e) =>
      this.closeAllListsWindowsByListener(e)
    );
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

  termDoneCheckbox = (taskId) => {
    // CheckBox handler and also other informations about term/date in DetailCoverMarks
    const matchedTerm = this.props.listOfAllTerms.filter(
      (ele) => ele.id === taskId
    );
    const currentCardTerm = document.getElementById(`${taskId}term`)
      .children[0];

    if (matchedTerm[0].status !== "Done") {
      matchedTerm[0].beforeDoneState.beforeStatus = matchedTerm[0].status;
      matchedTerm[0].beforeDoneState.beforeColor = matchedTerm[0].statusColor;
      matchedTerm[0].status = "Done";
      matchedTerm[0].statusColor = "#5AAC44";
      currentCardTerm.style.backgroundColor = "#5AAC44";
    } else {
      matchedTerm[0].status = matchedTerm[0].beforeDoneState.beforeStatus;
      matchedTerm[0].statusColor = matchedTerm[0].beforeDoneState.beforeColor;
      matchedTerm[0].beforeDoneState.beforeStatus = "";
      matchedTerm[0].beforeDoneState.beforeColor = "";
      currentCardTerm.style.backgroundColor = matchedTerm[0].statusColor;
    }
    this.setState({
      datePickerVisi: false, //Just refresh
    });
  };

  toggleCurrentListVisiFunc = (nameVisi) => {
    this.setState({ [nameVisi]: !this.state[nameVisi] });
  };

  closeAllListsWindowsFunc = () => {
    this.setState({
      moveToAnotherListVisi: false,
      copyCardVisi: false,
      labelVisi: false,
      datePickerVisi: false,
    });
  };

  closeAllListsWindowsByListener = (e) => {
    if (e.target.className.includes("detailCoverClose")) {
      this.closeAllListsWindowsFunc();
    }
  };

  render() {
    const {
      taskId,
      taskTitleList,
      updateCard,
      deleteCard,
      addNewCard,
      currentListId,
      wholeList,
      moveCardToAnotherList,
      toggleLabelColorToCard,
      listOfAllBadges,
      labelColors,
      setLabelColors,
      listOfAllTasksId,
      addPriorityForCards,
      toggleCommentVisibility,
      toggleCommentFeature,
      listOfAllComments,
      listOfAllPriorityTasks,
      listOfAllTerms,
      setListOfallTerms,
      toggleTermToCard,
      setListOfTasksList,
      listOfAllTasksList,
    } = this.props;

    const {
      taskTitle,
      commentValue,
      moveToAnotherListVisi,
      copyCardVisi,
      labelVisi,
      moveToInSuggestedVisi,
      datePickerVisi,
      tasksListVisi,
    } = this.state;

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
          moveToInSuggestedVisi={moveToInSuggestedVisi}
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          labelVisi={labelVisi}
          deleteCard={deleteCard}
          currentListId={currentListId}
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
          moveToAnotherListVisi={moveToAnotherListVisi}
          matchedPriority={matchedPriority}
          datePickerVisi={datePickerVisi}
          matchedTerms={matchedTerms}
          toggleTermToCard={toggleTermToCard}
          termDoneCheckbox={this.termDoneCheckbox}
          tasksListVisi={tasksListVisi}
          setListOfTasksList={setListOfTasksList}
          listOfAllTasksList={listOfAllTasksList}
          matchedListTasks={matchedListTasks}
          copyCardVisi={copyCardVisi}
          toggleCurrentListVisiFunc={this.toggleCurrentListVisiFunc}
          closeAllListsWindowsFunc={this.closeAllListsWindowsFunc}
          setListOfallTerms={setListOfallTerms}
          listOfAllTerms={listOfAllTerms}
        />
      </>
    );
  }
}

export default DetailCover;
