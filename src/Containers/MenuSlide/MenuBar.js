import React, { Component } from "react";
import MenuBarView from "../../components/MenuSlide/MenuBarView";
import MenuSlideView from "../../components/MenuSlide/MenuSlideView";
import Labels from "../../Containers/Labels/Labels";
import BackgroundChange from "../../components/MenuSlide/BackgroundChange/BackgroundChange";
import Color from "color";

export class MenuBar extends Component {
  state = {
    boardNameValue: "Your Todo List",
    slideMenuState: false,
    labelVisi: false,
    archivedElementVisi: false,
    archivedSearchValue: "",
    warningBeforeDeleteVisi: false,
    moveToActiveVisi: false,
    taskIdToDelete: "",
    moveTaskData: "",
    backgroundChangeVisi: false,
    showUnsplashPhotosVisi: false,
    showColorsBgcVisi: false,
    unsplashPhotos: [],
    unsplashSearchPhotosValue: "",
  };

  componentDidMount() {
    document.addEventListener("click", (e) => this.hideMenuFunc(e));

    fetch(
      `https://api.unsplash.com/search/photos?query=mountains&orientation=landscape&per_page=30&client_id=3V45fUhL4RJF0ob0TFJcFcS-ACxAeAHkvYbdVcTvy1o`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      })
      .then((data) => {
        console.log(data.results);
        this.setState({ unsplashPhotos: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (
      previousState.unsplashSearchPhotosValue !==
      this.state.unsplashSearchPhotosValue
    ) {
      fetch(
        `https://api.unsplash.com/search/photos?query=${
          this.state.unsplashSearchPhotosValue !== ""
            ? this.state.unsplashSearchPhotosValue
            : "mountains"
        }&orientation=landscape&per_page=30&client_id=3V45fUhL4RJF0ob0TFJcFcS-ACxAeAHkvYbdVcTvy1o`
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error(res.status);
          }
        })
        .then((data) => {
          this.setState({
            unsplashPhotos: data.results,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  boardNameChangeFunc = (e) => {
    this.setState({ boardNameValue: e.target.value.substr(0, 17) });
  };

  slideMenuFunc = () => {
    this.setState({ slideMenuState: true });
  };

  hideMenuFunc = (e) => {
    const searchingClass = e.target.className;
    if (searchingClass.includes("closeMenu") || searchingClass.includes("main"))
      this.setState({
        slideMenuState: false,
        archivedElementVisi: false,
        backgroundChangeVisi: false,
      });

    if (!searchingClass.includes("label")) this.setState({ labelVisi: false });

    if (
      searchingClass.includes("ultimateDelete") ||
      searchingClass.includes("closeWarning")
    ) {
      this.setState({ warningBeforeDeleteVisi: false });
    }

    if (searchingClass.includes("suggestedListToMove")) {
      this.setState({ moveToActiveVisi: false });
    }

    if (searchingClass.includes("backToMenu")) {
      this.setState({
        slideMenuState: true,
        backgroundChangeVisi: false,
        labelVisi: false,
        showUnsplashPhotosVisi: false,
      });
    }
  };

  archivedSearchFunc = (e) => {
    this.setState({ archivedSearchValue: e.target.value });
  };

  //This one is for label and moveToAnotherList window, for X button to close
  toggleCurrentListVisiFunc = (stateToClose) => {
    if (stateToClose === "moveToActiveVisi") {
      this.setState({ moveToActiveVisi: false, slideMenuState: true });
    } else {
      this.setState({ labelVisi: true, slideMenuState: false });
    }
  };

  showArchivedCardFunc = () => {
    this.setState({ archivedElementVisi: !this.state.archivedElementVisi });
  };

  warningBeforeDeleteFunc = (taskIdToDelete) => {
    this.setState({ warningBeforeDeleteVisi: true, taskIdToDelete });
  };

  moveToActiveFunc = (taskId, taskTitle, currenListId, currentListName) => {
    this.setState({
      moveToActiveVisi: true,
      moveTaskData: { taskId, taskTitle, currenListId, currentListName },
    });
  };

  backgroundChangeFunc = () => {
    this.setState({ backgroundChangeVisi: true, slideMenuState: false });
  };

  showUnsplashPhotosFunc = () => {
    this.setState({ showUnsplashPhotosVisi: true });
  };

  unsplashSearchPhotosChange = (e) => {
    this.setState({ unsplashSearchPhotosValue: e.target.value });
  };

  showThemeColorsFunc = () => {
    this.setState({ backgroundChangeVisi: false, slideMenuState: false });
    this.props.showThemeOptionFunction(true);
  };

  render() {
    //Import current color of mainElement and by Color set it lighten
    const currentLiColor = Color(this.props.whichColor[0]);
    const lighThisColor = currentLiColor.lighten(0.05);

    const listOfAllArchivedCardFilter = this.props.listOfAllArchivedCard.filter(
      (ele) => ele.taskName.includes(this.state.archivedSearchValue)
    );

    const {
      wholeList,
      listOfAllBadges,
      listOfAllTasksId,
      labelColors,
      setLabelColors,
      taskDetailsFunction,
      deleteCard,
      moveCardToAnotherList,
    } = this.props;
    const {
      boardNameValue,
      slideMenuState,
      labelVisi,
      archivedElementVisi,
      archivedSearchValue,
      warningBeforeDeleteVisi,
      moveToActiveVisi,
      taskIdToDelete,
      moveTaskData,
      backgroundChangeVisi,
      showUnsplashPhotosVisi,
      unsplashPhotos,
      unsplashSearchPhotosValue,
    } = this.state;
    return (
      <>
        <MenuBarView
          boardNameValue={boardNameValue}
          boardNameChangeFunc={this.boardNameChangeFunc}
          slideMenuFunc={this.slideMenuFunc}
          lighThisColor={lighThisColor}
        />
        <MenuSlideView
          wholeList={wholeList}
          moveCardToAnotherList={moveCardToAnotherList}
          slideMenuState={slideMenuState}
          archivedElementVisi={archivedElementVisi}
          archivedSearchValue={archivedSearchValue}
          toggleCurrentListVisiFunc={this.toggleCurrentListVisiFunc}
          archivedSearchFunc={this.archivedSearchFunc}
          showArchivedCardFunc={this.showArchivedCardFunc}
          listOfAllArchivedCard={listOfAllArchivedCardFilter}
          taskDetailsFunction={taskDetailsFunction}
          moveToActiveFunc={this.moveToActiveFunc}
          moveToActiveVisi={moveToActiveVisi}
          warningBeforeDeleteFunc={this.warningBeforeDeleteFunc}
          warningBeforeDeleteVisi={warningBeforeDeleteVisi}
          deleteCard={deleteCard}
          taskIdToDelete={taskIdToDelete}
          moveTaskData={moveTaskData}
          backgroundChangeFunc={this.backgroundChangeFunc}
        />
        {labelVisi ? (
          <Labels
            toggleCurrentListVisiFunc={this.toggleCurrentListVisiFunc}
            listOfAllBadges={listOfAllBadges}
            listOfAllTasksId={listOfAllTasksId}
            labelColors={labelColors}
            setLabelColors={setLabelColors}
            menuSlideClasses={true}
          />
        ) : null}
        {backgroundChangeVisi ? (
          <BackgroundChange
            labelColors={labelColors}
            showUnsplashPhotosFunc={this.showUnsplashPhotosFunc}
            showUnsplashPhotosVisi={showUnsplashPhotosVisi}
            unsplashPhotos={unsplashPhotos}
            unsplashSearchPhotosValue={unsplashSearchPhotosValue}
            unsplashSearchPhotosChange={this.unsplashSearchPhotosChange}
            showThemeColorsFunc={this.showThemeColorsFunc}
          />
        ) : null}
      </>
    );
  }
}

export default MenuBar;
