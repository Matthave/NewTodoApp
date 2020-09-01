import React from "react";
import CoverCardChoice from "./CoverCardChoice/CoverCardChoice";
import styled from "styled-components";

const StyledCoverWrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  right: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  width: 310px;
  height: 555px;
  transform: ${(props) =>
    props.optionCoverPosition ? "translate(130px)" : "null"};
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 17.5px;
  box-shadow: 0 0 15px 1px rgba(50, 50, 50, 0.2);
  z-index: 999;
`;

const StyledCoverTitle = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: 14px;
  opacity: ${(props) => (props.active ? 1 : 0)};
  cursor: ${(props) => (props.active ? "pointer" : "initial")};
`;

const StyledTitle = styled.h4``;

function CoverCardView({
  toggleCurrentListVisiFunc,
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
    <StyledCoverWrap>
      <StyledCoverTitle>
        <StyledBack className="fas fa-angle-left" />
        <StyledTitle>Card Cover</StyledTitle>
        <StyledX
          className="fas fa-times"
          onClick={() => toggleCurrentListVisiFunc("coverCardVisi")}
        />
      </StyledCoverTitle>
      <CoverCardChoice
        labelColors={labelColors}
        setCoverColorFunc={setCoverColorFunc}
        coverAlreadyExist={coverAlreadyExist}
        deleteCoverColorFunc={deleteCoverColorFunc}
        setTypeOfCoverFunc={setTypeOfCoverFunc}
        unSplashSearchValue={unSplashSearchValue}
        unSplashChangeFunc={unSplashChangeFunc}
        unsplashPhotos={unsplashPhotos}
      />
    </StyledCoverWrap>
  );
}

export default CoverCardView;
