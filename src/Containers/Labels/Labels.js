import React, { Component } from "react";
import LabelsView from "../../components/Labels/LabelsView";

class Labels extends Component {
  state = {
    labelColors: [
      { color: "#61BD4F", colorName: "green" },
      { color: "#F2D600", colorName: "yellow" },
      { color: "#FF9F1A", colorName: "orange" },
      { color: "#EB5A46", colorName: "red" },
      { color: "#C377E0", colorName: "purple" },
      { color: "#0079BF", colorName: "blue" },
      { color: "#00C2E0", colorName: "light blue ocean" },
      { color: "#51E898", colorName: "light green" },
      { color: "#FF78CB", colorName: "pink" },
      { color: "#344563", colorName: "dark blue" },
      { color: "#B3BAC5", colorName: "grey" },
    ],
    labelVisibility: false,
    searchInputLabel: "",
  };

  nameLabelVisibility = (toggle) => {
    this.setState({ labelVisibility: toggle });
  };

  generateCheckIcon = () => {
    const matchedBadges = this.props.listOfAllBadges.filter(
      (ele) => ele.id === this.props.taskId
    );
    if (matchedBadges.length !== 0) {
      matchedBadges.forEach((element) => {
        const currentCheckIcon = document.getElementById(
          `${element.color}Check`
        );
        if (currentCheckIcon) {
          currentCheckIcon.style.display = "block";
        }
      });
    }
  };

  searchLabelColor = (e) => {
    this.setState({
      searchInputLabel: e.target.value.substr(0, 17),
    });
  };

  render() {
    const {
      handleLabelsVisibility,
      detailCover,
      addLabelColor,
      optionCoverData,
      toggleLabelColorToCard,
      taskId,
    } = this.props;

    const { labelColors, searchInputLabel, labelVisibility } = this.state;

    const copyOfColorsArray = [...labelColors];
    const filteredColors = copyOfColorsArray.filter((ele) =>
      ele.colorName.toUpperCase().includes(searchInputLabel.toUpperCase())
    );
    return (
      <LabelsView
        handleLabelsVisibility={handleLabelsVisibility}
        detailCover={detailCover}
        nameLabelVisibility={this.nameLabelVisibility}
        labelVisibility={labelVisibility}
        addLabelColor={addLabelColor}
        optionCoverData={optionCoverData}
        toggleLabelColorToCard={toggleLabelColorToCard}
        taskId={taskId}
        generateCheckIcon={this.generateCheckIcon}
        searchLabelColor={this.searchLabelColor}
        searchInputLabel={searchInputLabel}
        filteredColors={filteredColors}
      />
    );
  }
}

export default Labels;
