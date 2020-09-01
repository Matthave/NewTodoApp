import React, { Component } from "react";
import CoverCardView from "../../components/CoverCard/CoverCardView";

export class CoverCard extends Component {
  state = {
    reFresh: false,
    unSplashSearchValue: "",
    unsplashPhotos: [],
  };

  componentDidMount() {
    fetch(
      `https://api.unsplash.com/search/photos?query=stars&orientation=landscape&per_page=30&client_id=3V45fUhL4RJF0ob0TFJcFcS-ACxAeAHkvYbdVcTvy1o`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      })
      .then((data) => {
        this.setState({ unsplashPhotos: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousState.unSplashSearchValue !== this.state.unSplashSearchValue) {
      fetch(
        `https://api.unsplash.com/search/photos?query=${
          this.state.unSplashSearchValue !== ""
            ? this.state.unSplashSearchValue
            : "stars"
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

  setCoverColorFunc = (chosedColor, typeOfBackground) => {
    const { taskId, listOfAllCover } = this.props;
    const coverCardType = document.querySelectorAll(".cardType");
    const cardTypeFull = document.getElementById("cardTypeFull");
    const cardTypeHalf = document.getElementById("cardTypeHalf");
    const detailCoverCoverBlock = document.getElementById(
      `detailCoverCoverBlock${taskId}`
    );
    const cardCoverBlock = document.getElementById(`cardCoverBlock${taskId}`);
    const cardCover = document.getElementById(`${taskId}`);
    coverCardType.forEach((ele) => {
      ele.style.backgroundColor = chosedColor;
      ele.style.backgroundImage = `url(${chosedColor})`;
    });
    cardTypeHalf.style.boxShadow = "0 0 0px 2px #0F76B1";
    cardTypeFull.style.boxShadow = "0 0 0px 2px #fff";

    if (typeOfBackground === "color") {
      detailCoverCoverBlock.style.backgroundColor = chosedColor;
      detailCoverCoverBlock.style.backgroundImage = null;
      detailCoverCoverBlock.style.height = "120px";
      cardCoverBlock.style.backgroundColor = chosedColor;
      cardCoverBlock.style.backgroundImage = null;
      cardCoverBlock.style.height = "30px";
      cardCover.style.backgroundImage = null;
    } else {
      detailCoverCoverBlock.style.backgroundColor = null;
      detailCoverCoverBlock.style.backgroundImage = `url(${chosedColor})`;
      detailCoverCoverBlock.style.height = "120px";
      cardCoverBlock.style.backgroundColor = null;
      cardCoverBlock.style.backgroundImage = `url(${chosedColor})`;
      cardCoverBlock.style.height = "30px";
      cardCover.style.backgroundImage = null;
    }

    const coverAlreadyExist_Index = listOfAllCover.findIndex(
      (ele) => ele.id === taskId
    );

    if (coverAlreadyExist_Index === -1) {
      listOfAllCover.push({
        id: taskId,
        background: `${typeOfBackground === "color" ? chosedColor : "none"}`,
        backgroundImage: `${
          typeOfBackground === "image" ? `url(${chosedColor})` : "none"
        }`,
        fullCover: false,
      });
    } else {
      listOfAllCover.splice(coverAlreadyExist_Index, 1, {
        id: taskId,
        background: `${typeOfBackground === "color" ? chosedColor : "none"}`,
        backgroundImage: `${
          typeOfBackground === "image" ? `url(${chosedColor})` : "none"
        }`,
        fullCover: false,
      });
    }

    this.setState({ reFresh: !this.state.reFresh });
  };

  deleteCoverColorFunc = () => {
    const { taskId, listOfAllCover } = this.props;
    const coverCardType = document.querySelectorAll(".cardType");
    const cardCover = document.getElementById(`${taskId}`);
    coverCardType.forEach((ele) => {
      ele.style.backgroundColor = "#B4BAC3";
      ele.style.backgroundImage = null;
    });
    const matchedCoverIndex = listOfAllCover.findIndex(
      (ele) => ele.id === taskId
    );

    const detailCoverCoverBlock = document.getElementById(
      `detailCoverCoverBlock${taskId}`
    );
    const cardCoverBlock = document.getElementById(`cardCoverBlock${taskId}`);
    detailCoverCoverBlock.style.backgroundColor = "none";
    detailCoverCoverBlock.style.backgroundImage = "none";
    detailCoverCoverBlock.style.height = "0px";

    cardCoverBlock.style.backgroundColor = "none";
    cardCoverBlock.style.backgroundImage = "none";
    cardCoverBlock.style.height = "0px";
    cardCover.style.backgroundImage = null;

    listOfAllCover.splice(matchedCoverIndex, 1);

    this.setState({ reFresh: !this.state.reFresh });
  };

  setTypeOfCoverFunc = (coverType) => {
    const { taskId, listOfAllCover } = this.props;
    const currentCard = document.getElementById(`${taskId}`);
    const cardTypeFull = document.getElementById("cardTypeFull");
    const cardTypeHalf = document.getElementById("cardTypeHalf");
    const matchedCoverColorIndex = listOfAllCover.findIndex(
      (ele) => ele.id === taskId
    );
    if (matchedCoverColorIndex.length !== -1) {
      if (coverType === "full" && matchedCoverColorIndex !== -1) {
        currentCard.style.background =
          listOfAllCover[matchedCoverColorIndex].background;
        currentCard.style.backgroundImage =
          listOfAllCover[matchedCoverColorIndex].backgroundImage;
        listOfAllCover[matchedCoverColorIndex].fullCover = true;
        cardTypeFull.style.boxShadow = "0 0 0px 2px #0F76B1";
        cardTypeHalf.style.boxShadow = "0 0 0px 2px #fff";
      } else if (coverType !== "full" && matchedCoverColorIndex !== -1) {
        currentCard.style.background = "#fff";
        listOfAllCover[matchedCoverColorIndex].fullCover = false;
        cardTypeHalf.style.boxShadow = "0 0 0px 2px #0F76B1";
        cardTypeFull.style.boxShadow = "0 0 0px 2px #fff";
      }
    }
  };

  unSplashChangeFunc = (e) => {
    this.setState({ unSplashSearchValue: e.target.value });
  };

  render() {
    const {
      toggleCurrentListVisiFunc,
      labelColors,
      listOfAllCover,
      taskId,
    } = this.props;

    const { unSplashSearchValue, unsplashPhotos } = this.state;

    const coverAlreadyExist = listOfAllCover.filter((ele) => ele.id === taskId);
    return (
      <CoverCardView
        toggleCurrentListVisiFunc={toggleCurrentListVisiFunc}
        labelColors={labelColors}
        setCoverColorFunc={this.setCoverColorFunc}
        coverAlreadyExist={coverAlreadyExist}
        deleteCoverColorFunc={this.deleteCoverColorFunc}
        setTypeOfCoverFunc={this.setTypeOfCoverFunc}
        unSplashSearchValue={unSplashSearchValue}
        unSplashChangeFunc={this.unSplashChangeFunc}
        unsplashPhotos={unsplashPhotos}
      />
    );
  }
}

export default CoverCard;
