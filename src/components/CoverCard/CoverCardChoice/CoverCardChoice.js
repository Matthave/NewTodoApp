import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 5px auto 15px;
  padding: 0 5px;
`;

const StyledSectionTitle = styled.h3`
  width: 100%;
  font-size: 15px;
  margin: 0 auto;
  padding: 0 10px;
  color: #999;
`;

const StyledColorElement = styled.div`
  width: 17%;
  height: 32.5px;
  border-radius: 4px;
  filter: grayscale(15%);
  margin: 3.5px;
  cursor: pointer;
  transition: 0.1s linear;

  &:nth-last-child(2) {
    display: none;
  }

  &:hover {
    opacity: 0.75;
  }
`;

const StyledTypeElementWrap = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.reverseDirection ? "column-reverse" : "column"};
  width: 45%;
  height: 65px;
  border-radius: 5px;
  border: 3px solid #fff;
  box-shadow: ${(props) =>
    props.boxShadow ? "0 0 0px 2px #0F76B1" : "0 0 0px 2px #fff"};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#b4bac3")};
  background-image: ${(props) => (props.bgImage ? props.bgImage : "#b4bac3")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2px;
  padding-bottom: ${(props) => (props.paddingBottom ? "5px" : "2px")};
  margin: 0 5px;
  cursor: pointer;
`;

const StyledLinePart = styled.span`
  width: ${(props) => (props.upperLine ? "80%" : "35%")};
  height: 4px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.inBox ? "#B4BAC3" : "rgba(255,255,255,0.75)"};
  margin: 2px 5px; ;
`;

const StyledCirclePart = styled.span`
  width: 15px;
  height: 15px;
  background-color: #b4bac3;
  border-radius: 50%;
  margin: 0 5px 2px auto;
`;

const StyledHalfBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  flex-direction: column;
  background-color: #fff;
  margin: auto 0 0;
`;

const StyledButton = styled.button`
  width: 90%;
  min-height: 32.5px;
  background-color: #cf513d;
  border-radius: 4px;
  margin: 0 auto 10px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;
  align-self: center;

  &:hover {
    opacity: 0.85;
  }
`;

const StyledCoverInput = styled.input`
  width: 95%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 10px auto;
  margin-top: ${(props) => (props.marginTop ? "5px" : "15px")};

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledOptionsWrap = styled.div`
  position: relative;
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
  width: 30%;
  border-radius: 3px;
  height: 60px;
  filter: grayscale(25%);
  margin-bottom: 5px;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    opacity: 0.75;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 3px;

  &:hover ~ .authorName {
    opacity: 1;
  }
`;

const StyledAuthor = styled.a`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  text-align: center;
  opacity: 0;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  transition: 0.1s linear;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.75);
    text-decoration: underline;
  }
`;

function CoverCardChoice({
  labelColors,
  setCoverColorFunc,
  coverAlreadyExist,
  deleteCoverColorFunc,
  setTypeOfCoverFunc,
  unSplashSearchValue,
  unSplashChangeFunc,
  unsplashPhotos,
}) {
  return (
    <StyledWrap>
      <StyledSectionTitle>Type</StyledSectionTitle>
      <StyledSection>
        <StyledTypeElementWrap
          boxShadow={
            coverAlreadyExist.length !== 0 && !coverAlreadyExist[0].fullCover
          }
          bgColor={
            coverAlreadyExist.length !== 0 && coverAlreadyExist[0].background
          }
          bgImage={
            coverAlreadyExist.length !== 0 &&
            coverAlreadyExist[0].backgroundImage
          }
          className="cardType"
          id="cardTypeHalf"
          onClick={() => setTypeOfCoverFunc("half")}
        >
          <StyledHalfBox>
            <StyledLinePart upperLine inBox />
            <StyledLinePart inBox />
            <StyledCirclePart />
          </StyledHalfBox>
        </StyledTypeElementWrap>
        <StyledTypeElementWrap
          paddingBottom
          boxShadow={
            coverAlreadyExist.length !== 0 && coverAlreadyExist[0].fullCover
          }
          bgColor={
            coverAlreadyExist.length !== 0 && coverAlreadyExist[0].background
          }
          bgImage={
            coverAlreadyExist.length !== 0 &&
            coverAlreadyExist[0].backgroundImage
          }
          reverseDirection
          className="cardType"
          id="cardTypeFull"
          onClick={() => setTypeOfCoverFunc("full")}
        >
          <StyledLinePart upperLine />
          <StyledLinePart />
        </StyledTypeElementWrap>
      </StyledSection>
      {coverAlreadyExist.length !== 0 ? (
        <StyledButton onClick={() => deleteCoverColorFunc()}>
          Delete Cover
        </StyledButton>
      ) : null}
      <StyledSectionTitle>Colors</StyledSectionTitle>
      <StyledSection>
        {labelColors.map((color) => (
          <StyledColorElement
            key={color.color}
            style={{ backgroundColor: color.color }}
            onClick={() => setCoverColorFunc(color.color, "color")}
          />
        ))}
      </StyledSection>
      <StyledSectionTitle>Unsplash</StyledSectionTitle>
      <StyledCoverInput
        value={unSplashSearchValue}
        onChange={(e) => unSplashChangeFunc(e)}
      />
      <StyledOptionsWrap>
        {unsplashPhotos.length !== 0
          ? unsplashPhotos.map((ele) => (
              <StyledOption key={ele.id}>
                <StyledImg
                  src={ele.urls.small}
                  onClick={() => setCoverColorFunc(ele.urls.small, "image")}
                />
                <StyledAuthor
                  className="authorName"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={ele.user.links.html}
                >
                  {ele.user.name}
                </StyledAuthor>
              </StyledOption>
            ))
          : null}
      </StyledOptionsWrap>
      <StyledSection></StyledSection>
    </StyledWrap>
  );
}

export default CoverCardChoice;
