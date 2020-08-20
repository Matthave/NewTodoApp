import React, { Component } from "react";
import CopyCardView from "../../components/CopyCard/CopyCardView";

class CopyCard extends Component {
  state = {
    copyTextArea: "",
    canCopyLabels: true,
  };

  componentDidMount() {
    this.setState({ copyTextArea: this.props.taskTitle });
  }
  changeCopyTextArea = (e) => {
    this.setState({ copyTextArea: e.target.value });
  };

  toggleCanCopyLables = () => {
    this.setState({
      canCopyLabels: !this.state.canCopyLabels,
    });
  };

  render() {
    const {
      matchedColorsToThisCard,
      wholeList,
      taskId,
      currentListId,
    } = this.props;
    const { copyTextArea, canCopyLabels } = this.state;
    return (
      <CopyCardView
        changeCopyTextArea={this.changeCopyTextArea}
        copyTextArea={copyTextArea}
        matchedColorsToThisCard={matchedColorsToThisCard}
        toggleCanCopyLables={this.toggleCanCopyLables}
        canCopyLabels={canCopyLabels}
        wholeList={wholeList}
        taskId={taskId}
        currentListId={currentListId}
      />
    );
  }
}

export default CopyCard;
