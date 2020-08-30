import React from "react";
import styled from "styled-components";
import roboSVG from "../../../img/robotSVG.svg";
import { device } from "../../../Style/MediaQuery/mq";

const StyledSliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #fff;
`;

const StyledText = styled.h3`
  width: 50%;
  text-align: center;
  font-weight: ${(props) => (props.smallerFont ? "400" : "600")};
  font-size: ${(props) => (props.smallerFont ? "25px" : "35px")};
  margin: 10px auto;
  margin-top: ${(props) => (props.smallerFont ? "10px" : "35px")};
  color: #172b4d;
`;

const StyledSliderDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
  padding: 0 20px;
`;

const StyledArrow = styled.span`
  display: none;
  position: relative;
  border-radius: 50%;
  margin: auto 35px;
  padding: 50px;
  box-shadow: 0 10px 20px rgba(74, 115, 159, 0.29);
  transition: 0.1s linear;
  color: #ddd;
  cursor: pointer;

  &:hover {
    background-color: #23cfea;
    color: #fff;
  }

  @media ${device.tablet} {
    display: inline;
  }
`;

const StyledView = styled.div`
  position: relative;
  width: 100%;
  max-width: 880px;
  max-height: 475px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(74, 115, 159, 0.29);
  margin: auto 0;
  overflow: hidden;
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
`;

const StyledImg = styled.img`
  width: 150%;
  border-radius: 10px;
  cursor: pointer;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const StyledDescriptionWrap = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(0, 0, 50, 0.6);
`;

const StyledDescriptionText = styled.h3`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  text-align: center;
  font-size: 13px;
  letter-spacing: 0.75px;
  color: #fff;

  @media ${device.tablet} {
    font-size: 17px;
  }
`;

const StyledDotsWrap = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 75%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);

  @media ${device.tablet} {
    width: 25%;
  }
`;

const StyledDot = styled.div`
  width: 12.5px;
  height: 12.5px;
  transform-origin: center;
  background-color: #888;
  border-radius: 50%;
  margin: auto 5px;
  cursor: pointer;
  transition: 0.2s linear;

  &:hover {
    background-color: #23cfea !important;
  }

  @media ${device.tablet} {
    display: inline;
    font-size: 17px;
    margin: auto auto;
  }
`;

const StyledRobotSvg = styled.img`
  display: none;
  position: absolute;
  top: 5%;
  left: 20%;
  width: 400px;
  transform: rotate(10deg);
  transition: 0.2s;
  cursor: pointer;
  @media ${device.laptopL} {
    display: block;
    font-size: 17px;
    margin: auto auto;
  }
`;

function IntroSlider({ sliderFunc, sliderByDotFunc, allImages, currentImg }) {
  return (
    <StyledSliderWrap>
      <StyledText>See how it works</StyledText>
      <StyledText smallerFont>
        Go from idea to action in seconds with Trello’s intuitively simple
        boards, lists, and cards.
      </StyledText>
      <StyledSliderDiv>
        <StyledArrow onClick={() => sliderFunc("left")}>
          <StyledIcon className="fas fa-angle-left" />
        </StyledArrow>
        <StyledView>
          <StyledImg
            src={allImages[currentImg].img}
            onClick={() => sliderFunc("right")}
          />
          <StyledDescriptionWrap>
            <StyledDescriptionText>
              {allImages[currentImg].text}
            </StyledDescriptionText>
            <StyledDotsWrap>
              {allImages.map((ele) => (
                <StyledDot
                  key={ele.id}
                  id={ele.id}
                  className="dots"
                  onClick={(e) => sliderByDotFunc(e, ele.id)}
                />
              ))}
            </StyledDotsWrap>
          </StyledDescriptionWrap>
          <StyledRobotSvg
            src={roboSVG}
            className="robotSVG"
            onClick={() => sliderFunc("right")}
          />
        </StyledView>
        <StyledArrow onClick={() => sliderFunc("right")}>
          <StyledIcon className="fas fa-angle-right" />
        </StyledArrow>
      </StyledSliderDiv>
    </StyledSliderWrap>
  );
}

export default IntroSlider;
