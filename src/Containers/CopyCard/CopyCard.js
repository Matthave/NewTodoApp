import React, { Component } from "react";
import CopyCardView from "../../components/CopyCard/CopyCardView";

class CopyCard extends Component {
  state = {
    copyTextArea: "",
    copyLabelsAllow: true,
  };

  componentDidMount() {
    this.setState({ copyTextArea: this.props.taskTitle });
  }
  changeCopyTextArea = (e) => {
    this.setState({ copyTextArea: e.target.value });
  };

  toggleCanCopyLables = () => {
    this.setState({
      copyLabelsAllow: !this.state.copyLabelsAllow,
    });
  };

  copyCard = (preventCardId, listId, copyLabelsAllow) => {
    const {
      listOfAllPriorityTasks,
      listOfAllComments,
      listOfAllTasksId,
      listOfAllBadges,
      listOfAllCover,
      listOfAllTerms,
      addNewCard,
    } = this.props;
    const lablesToCopy = listOfAllBadges.filter(
      (ele) => ele.id === preventCardId
    );
    const commentToCopy = listOfAllComments.filter(
      (ele) => ele.id === preventCardId
    );
    const coverToCopy = listOfAllCover.filter(
      (ele) => ele.id === preventCardId
    );
    const priorityToCopy = listOfAllPriorityTasks.filter(
      (ele) => ele === preventCardId
    );
    const newId = Math.max(...listOfAllTasksId) + 1;
    listOfAllTasksId.push(newId);

    const dateToCopy = listOfAllTerms.filter((ele) => ele.id === preventCardId);

    if (lablesToCopy.length !== 0 && copyLabelsAllow) {
      lablesToCopy.forEach((ele) => {
        listOfAllBadges.push({
          id: String(newId),
          color: ele.color,
          labelId: `${ele.color}${newId}`,
          name: ele.name,
        });
      });
    }

    if (priorityToCopy.length !== 0) {
      listOfAllPriorityTasks.push(String(newId));
    }

    if (commentToCopy.length !== 0) {
      listOfAllComments.push({
        id: String(newId),
        comment: commentToCopy[0].comment,
      });
    }

    if (coverToCopy.length !== 0) {
      listOfAllCover.push({
        id: String(newId),
        background: coverToCopy[0].background,
        backgroundImage: coverToCopy[0].backgroundImage,
        fullCover: coverToCopy[0].fullCover,
      });
    }

    if (dateToCopy.length !== 0) {
      listOfAllTerms.push({
        id: String(newId),
        term: dateToCopy[0].term,
        classN: "termSpan",
        day: dateToCopy[0].day,
        month: dateToCopy[0].month,
        year: dateToCopy[0].year,
        monthName: dateToCopy[0].monthName,
        hour: dateToCopy[0].hour,
        minutes: dateToCopy[0].minutes,
        status: dateToCopy[0].status,
        statusColor: dateToCopy[0].statusColor,
        fontColor: dateToCopy[0].fontColor,
        beforeDoneState: dateToCopy[0].beforeDoneState,
      });
    }

    addNewCard(listId, this.state.copyTextArea, String(newId));
    this.props.toggleCurrentListVisiFunc("copyCardVisi");
  };

  render() {
    const {
      matchedColorsToThisCard,
      wholeList,
      taskId,
      taskTitle,
      currentListId,
      optionCover,
      toggleCurrentListVisiFunc,
    } = this.props;
    const { copyTextArea, copyLabelsAllow } = this.state;
    return (
      <CopyCardView
        changeCopyTextArea={this.changeCopyTextArea}
        copyTextArea={copyTextArea}
        matchedColorsToThisCard={matchedColorsToThisCard}
        toggleCanCopyLables={this.toggleCanCopyLables}
        copyLabelsAllow={copyLabelsAllow}
        wholeList={wholeList}
        taskId={taskId}
        taskTitle={taskTitle}
        currentListId={currentListId}
        optionCover={optionCover}
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        copyCard={this.copyCard}
      />
    );
  }
}

export default CopyCard;
