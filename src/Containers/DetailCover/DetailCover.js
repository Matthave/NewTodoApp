import React from "react";
import DetailCoverView from "../../components/DetailCover/DetailCoverView/DetailCoverView";

class DetailCover extends React.Component {
  state = {
    taskTitle: "",
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

  render() {
    const {
      taskId,
      taskTitleList,
      updateCard,
      deleteCard,
      idUpdatedList,
      changeListInDetails,
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
    } = this.props;

    const copyOfallBadges = [...listOfAllBadges];
    const matchedColorsToThisCard = copyOfallBadges.filter(
      (ele) => ele.id === taskId
    );

    const { taskTitle } = this.state;
    return (
      <>
        <DetailCoverView
          updateCard={updateCard}
          taskTitle={taskTitle}
          taskTitleFeature={this.taskTitleFeature}
          changeListInDetails={changeListInDetails}
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
        />
      </>
    );
  }
}

export default DetailCover;
