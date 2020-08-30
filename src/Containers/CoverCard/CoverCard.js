import React, { Component } from "react";
import CoverCardView from "../../components/CoverCard/CoverCardView";

export class CoverCard extends Component {
  state = {
    reFresh: false,
  };
  setCoverColorFunc = (chosedColor) => {
    const { taskId, listOfAllCover } = this.props;
    const coverCardType = document.querySelectorAll(".coverCardType");
    const detailCoverCoverBlock = document.getElementById(
      `detailCoverCoverBlock${taskId}`
    );
    const cardCoverBlock = document.getElementById(`cardCoverBlock${taskId}`);
    coverCardType.forEach((ele) => {
      ele.style.backgroundColor = chosedColor;
    });

    detailCoverCoverBlock.style.backgroundColor = chosedColor;
    detailCoverCoverBlock.style.height = "120px";

    cardCoverBlock.style.backgroundColor = chosedColor;
    cardCoverBlock.style.height = "30px";

    const coverAlreadyExist_Index = listOfAllCover.findIndex(
      (ele) => ele.id === taskId
    );

    if (coverAlreadyExist_Index === -1) {
      listOfAllCover.push({
        id: taskId,
        background: chosedColor,
      });
    } else {
      listOfAllCover.splice(coverAlreadyExist_Index, 1, {
        id: taskId,
        background: chosedColor,
      });
    }

    this.setState({ reFresh: !this.state.reFresh });
  };

  deleteCoverColorFunc = () => {
    const { taskId, listOfAllCover } = this.props;
    const matchedCoverIndex = listOfAllCover.findIndex(
      (ele) => ele.id === taskId
    );

    const detailCoverCoverBlock = document.getElementById(
      `detailCoverCoverBlock${taskId}`
    );
    const cardCoverBlock = document.getElementById(`cardCoverBlock${taskId}`);
    detailCoverCoverBlock.style.backgroundColor = "none";
    detailCoverCoverBlock.style.height = "0px";

    cardCoverBlock.style.backgroundColor = "none";
    cardCoverBlock.style.height = "0px";

    listOfAllCover.splice(matchedCoverIndex, 1);
  };

  render() {
    const {
      toggleCurrentListVisiFunc,
      labelColors,
      listOfAllCover,
      taskId,
    } = this.props;

    const coverAlreadyExist = listOfAllCover.filter((ele) => ele.id === taskId);
    return (
      <CoverCardView
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        labelColors={labelColors}
        setCoverColorFunc={this.setCoverColorFunc}
        coverAlreadyExist={coverAlreadyExist}
        deleteCoverColorFunc={this.deleteCoverColorFunc}
      />
    );
  }
}

export default CoverCard;
