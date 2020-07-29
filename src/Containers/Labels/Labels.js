import React, { Component } from "react";
import LabelsView from "../../components/Labels/LabelsView";

class Labels extends Component {
  state = {
    labelVisibility: false,
    searchInputLabel: "",
    nameLabelInputValue: "",
    currentMatchedColors: "",
    currentSquarEdit: "",
  };

  nameLabelVisibility = (e, toggle, colorId, from) => {
    if (from === "back") {
      this.setState({
        labelVisibility: toggle,
      });
      return;
    }
    if (colorId === null) {
      this.setState({
        labelVisibility: toggle,
      });
      this.props.handleLabelsVisibility(false);
      return;
    }
    if (from === "edit") {
      const isAnyTextAlready = e.target.parentNode.textContent;
      this.setState({
        labelVisibility: toggle,
        currentSquarEdit: colorId,
        currentMatchedColors: colorId,
        nameLabelInputValue: isAnyTextAlready,
      });
    }
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

  nameLabelInput = (e) => {
    this.setState({
      nameLabelInputValue: e.target.value.substr(0, 17),
    });
  };

  choosedSquar = (e, colorId) => {
    const allSquars = document.querySelectorAll(".label_colorSquar");
    allSquars.forEach((ele) => {
      ele.style.border = "none";
    });
    e.target.style.border = "1.5px solid black";

    this.setState({
      currentMatchedColors: colorId,
    });
  };

  saveNameLabel = (e) => {
    //Zmieniamy wartość name w badges ( renderuje sie nazwa w optionCover i detailCover lables)
    const {
      listOfAllBadges,
      listOfAllTasksId,
      labelColors,
      setLabelColors,
      handleLabelsVisibility,
    } = this.props;

    if (e.target.className.includes("label_saveBtn") || e.which === 13) {
      const { currentMatchedColors, nameLabelInputValue } = this.state;

      if (currentMatchedColors.length === 0) return; // Return If color isn't choosed
      const matchedBadges = listOfAllBadges.filter(
        (ele) => ele.color === currentMatchedColors
      );

      matchedBadges.forEach((ele) => {
        ele.name = nameLabelInputValue;
      });

      //Od razu pojawia się nazwa labeli w srodku labeli w CARD
      listOfAllTasksId.forEach((ele) => {
        const matchedLabelInCard = document.getElementById(
          `${currentMatchedColors}${ele}`
        );

        if (matchedLabelInCard) {
          matchedLabelInCard.textContent = nameLabelInputValue;
        }
      });

      // zmieniamy odgórne labelColors by wszedzie wyswietlalo sie od razu i tak samo przy tworzeniu nowych
      const index = labelColors.findIndex(
        (ele) => ele.color === currentMatchedColors
      );

      const copyOfLabelColor = [...labelColors];
      copyOfLabelColor.splice(index, 1, {
        color: labelColors[index].color,
        colorName: labelColors[index].colorName,
        value: nameLabelInputValue,
      });

      //Update
      setLabelColors(copyOfLabelColor);
      this.nameLabelVisibility(false);
      handleLabelsVisibility(false);
    }
  };

  render() {
    const {
      handleLabelsVisibility,
      detailCover,
      addLabelColor,
      optionCoverData,
      toggleLabelColorToCard,
      taskId,
      labelColors,
    } = this.props;

    const {
      searchInputLabel,
      labelVisibility,
      nameLabelInputValue,
      currentSquarEdit,
    } = this.state;

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
        nameLabelInput={this.nameLabelInput}
        nameLabelInputValue={nameLabelInputValue}
        choosedSquar={this.choosedSquar}
        saveNameLabel={this.saveNameLabel}
        currentSquarEdit={currentSquarEdit}
      />
    );
  }
}

export default Labels;
