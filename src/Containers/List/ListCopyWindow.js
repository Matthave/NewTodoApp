import React, { Component } from "react";
import ListCopyWindoView from "../../components/List/ListOptions/ListCopyWindow/ListCopyWindowView";

class ListCopyWindow extends Component {
  state = {
    textAreaValue: "",
  };

  componentDidMount() {
    const currentList = this.props.wholeList.filter(
      (ele) => ele.id === this.props.listId
    );
    this.setState({ textAreaValue: currentList[0].title });
  }

  setCopyListValue = (e) => {
    this.setState({ textAreaValue: e.target.value });
  };

  copyList = () => {
    const { wholeList, listId, copyNewList, copyListVisibility } = this.props;
    if (this.state.textAreaValue === "") {
      return this.setState({
        textAreaValue: `List no. ${wholeList.length + 1}`,
      });
    }
    const currentList = wholeList.filter((ele) => ele.id === listId);

    this.copyNewList(currentList[0].tasks, this.state.textAreaValue);
    copyListVisibility();
  };

  copyNewList = (tasksToCopy, listNewName) => {
    const {
      wholeList,
      listOfAllCover,
      listOfAllComments,
      listOfAllTerms,
      listOfAllPriorityTasks,
      listOfAllBadges,
      listOfAllTasksId,
      addNewCardFeature,
      setRefresh,
      refresh,
    } = this.props;
    const tasksToCopyArr = [...tasksToCopy];
    if (wholeList.length === 10) return;
    //Copy pure List, without tasks
    let biggerThanLast = [];
    wholeList.forEach((list) => biggerThanLast.push(list.id));
    const theBiggest = Math.max(...biggerThanLast);
    const newId = Number(`${wholeList.length === 0 ? 0 : theBiggest + 1}`);
    wholeList.push({
      title: listNewName,
      id: newId,
      tasks: [],
    });

    //Find proper list for change tasks id
    const listIndex = wholeList.findIndex((list) => list.id === newId);
    //Add preview tasks to newList (tasks have wrong id now)
    tasksToCopyArr.forEach((ele) => {
      addNewCardFeature(newId, ele.taskName, ele.id);
    });
    //Change tasks id to correct, also other parameters
    const theBiggestId = Math.max(...listOfAllTasksId);
    wholeList[listIndex].tasks.forEach((ele, index) => {
      const newIdForCard = String(theBiggestId + (index + 1)); //Calculate new unique id
      ele.id = newIdForCard;

      listOfAllTasksId.push(Number(newIdForCard)); // Add id to listOfId
      if (ele.badges.length !== 0) {
        ele.badges.forEach((badge) => {
          listOfAllBadges.push({
            color: badge.color,
            id: newIdForCard,
            labelId: `${badge.color}${newIdForCard}`,
            name: badge.name,
          }); // Add proper badges to list of Badges, with new uniqe Id
        });
      }
      if (ele.comment.length !== 0) {
        listOfAllComments.push({
          id: newIdForCard,
          comment: ele.comment[0].comment,
        }); // Add proper comment, with new uniqe Id
      }
      if (ele.cover.length !== 0) {
        listOfAllCover.push({
          id: newIdForCard,
          background: ele.cover[0].background,
          backgroundImage: ele.cover[0].backgroundImage,
          fullCover: ele.cover[0].fullCover,
        }); // Add proper comment, with new uniqe Id
      }
      if (ele.priority === "priority")
        listOfAllPriorityTasks.push(String(newIdForCard));
      if (ele.date.length !== 0) {
        listOfAllTerms.push({
          id: newIdForCard,
          classN: "termSpan",
          term: ele.date[0].term,
          day: ele.date[0].day,
          month: ele.date[0].month,
          year: ele.date[0].year,
          monthName: ele.date[0].monthName,
          hour: ele.date[0].hour,
          minutes: ele.date[0].minutes,
          status: ele.date[0].status,
          statusColor: ele.date[0].statusColor,
          fontColor: ele.date[0].fontColor,
          beforeDoneState: ele.date[0].beforeDoneState,
        });
      } // Add proper term, with new uniqe Id
    });
    setRefresh(!refresh);
  };

  render() {
    const { textAreaValue } = this.state;

    return (
      <ListCopyWindoView
        textAreaValue={textAreaValue}
        setCopyListValue={this.setCopyListValue}
        copyList={this.copyList}
      />
    );
  }
}

export default ListCopyWindow;
