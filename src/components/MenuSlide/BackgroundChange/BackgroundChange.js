import React from "react";
import photo from "../../../img/photosIntro.jpg";
import styled from "styled-components";
import UnsplashGeneratedPhotos from "./UnsplashGeneratedPhotos/UnsplashGeneratedPhotos";

const StyledMenu = styled.div`
  position: fixed;
  top: calc(0% + 40px);
  bottom: 17.5px;
  right: 0;
  width: 320px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f4f5f7;
  transition: 0.3s linear;
  z-index: 999;
  padding: 5px 0px;
`;

const StyledBackgroundTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  font-size: 15px;
  color: #42516e;
`;

const StyledX = styled.span`
  margin-left: 10px;
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

const StyledBack = styled.span`
  font-size: 15px;
  cursor: pointer;
  color: #42516e;
`;

const StyledTitle = styled.h4``;

const StyledOptionsWrap = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const StyledOption = styled.div`
  position: relative;
  display: flex;
  width: 45%;
  border-radius: 10px;
  height: 95px;
  filter: grayscale(25%);
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    opacity: 0.75;
  }
`;

const StyledColorBar = styled.div`
  width: 9.09%;

  &:nth-child(1) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &:nth-child(11) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;

  &:hover ~ .authorName {
    opacity: 1;
  }
`;

function BackgroundChange({
  labelColors,
  showUnsplashPhotosFunc,
  showUnsplashPhotosVisi,
  unsplashPhotos,
  unsplashSearchPhotosValue,
  unsplashSearchPhotosChange,
  showThemeColorsFunc,
}) {
  return (
    <StyledMenu className="menu">
      <StyledBackgroundTitle className="menu">
        <StyledBack className="fas fa-angle-left backToMenu" />
        <StyledTitle className="menu">Background Change</StyledTitle>
        <StyledX className="fas fa-times closeMenu" />
      </StyledBackgroundTitle>
      {showUnsplashPhotosVisi ? (
        <UnsplashGeneratedPhotos
          unsplashSearchPhotosChange={unsplashSearchPhotosChange}
          unsplashSearchPhotosValue={unsplashSearchPhotosValue}
          unsplashPhotos={unsplashPhotos}
        />
      ) : (
        <StyledOptionsWrap>
          <StyledOption onClick={() => showUnsplashPhotosFunc()}>
            <StyledImg src={`${photo}`} />
          </StyledOption>
          <StyledOption className="theme" onClick={() => showThemeColorsFunc()}>
            {labelColors.map((color) => (
              <StyledColorBar
                className="theme"
                key={color.color}
                style={{ backgroundColor: `${color.color}` }}
              />
            ))}
          </StyledOption>
        </StyledOptionsWrap>
      )}
    </StyledMenu>
  );
}

export default BackgroundChange;
