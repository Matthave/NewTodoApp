import React from "react";
import styled from "styled-components";

const StyledBack = styled.span`
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

const StyledNameLabels = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  right: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  width: 310px;
  height: 350px;
  transform: ${(props) =>
    props.optionCoverPosition ? "translate(130px)" : "null"};
  background-color: #fff;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 17.5px;
  box-shadow: 0 0 15px 1px rgba(50, 50, 50, 0.2);
  z-index: 999;
`;

const StyledLabelTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #42516e;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  font-size: 15px;
  color: #42516e;
`;

const StyledLabelInput = styled.input`
  width: 95%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 15px auto;
  margin-top: ${(props) => (props.marginTop ? "5px" : "15px")};

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledName = styled.h3`
  margin-left: 7px;
  margin-top: 7px;
`;

const StyledWrapColors = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-top: 7px;
`;

const StyledColorSquar = styled.div`
  width: 18%;
  height: 40px;
  border-radius: 4px;
  margin-right: 2.5px;
  margin-left: 2.5px;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

const StyledX = styled.span`
  font-size: 15px;
  color: #42516e;
  cursor: pointer;
`;

const StyledButton = styled.button`
  width: 75px;
  height: 32.5px;
  background-color: #5aac44;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 6px;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;

  &:hover {
    background-color: #6abc54;
  }
`;

const StyledTitle = styled.h4``;

function LabelsNameColors({
  nameLabelVisibilityFunc,
  filteredColors,
  detailCover,
  optionCover,
  nameLabelInput,
  nameLabelInputValue,
  choosedSquar,
  saveNameLabel,
  currentSquarEdit,
  menuSlideClasses,
}) {
  return (
    <StyledNameLabels
      className={`${menuSlideClasses ? "menuSlidePosition label" : "label"}`}
      detailCover={detailCover}
      optionCoverPosition={optionCover}
      onKeyPress={(e) => saveNameLabel(e)}
    >
      <StyledLabelTitle className="label">
        <StyledBack
          className="fas fa-angle-left label"
          onClick={(e) => nameLabelVisibilityFunc(e, false, null, "back")}
        />
        <StyledTitle className="label">Change Label</StyledTitle>
        <StyledX
          className="fas fa-times"
          onClick={(e) => nameLabelVisibilityFunc(e, false, null)}
        />
      </StyledLabelTitle>
      <StyledName className="label">Name</StyledName>
      <StyledLabelInput
        className="label"
        marginTop
        onChange={(e) => nameLabelInput(e)}
        value={nameLabelInputValue}
      />
      <StyledName className="label">Colors</StyledName>
      <StyledWrapColors className="label">
        {filteredColors.map((color) => (
          <StyledColorSquar
            style={{
              backgroundColor: `${color.color}`,
              border:
                currentSquarEdit === color.color ? "1.5px solid black" : null,
            }}
            className="label_colorSquar"
            key={color.color}
            id={color.color}
            onClick={(e) => choosedSquar(e, color.color)}
          />
        ))}
      </StyledWrapColors>
      <StyledButton className="label_saveBtn" onClick={(e) => saveNameLabel(e)}>
        SAVE
      </StyledButton>
    </StyledNameLabels>
  );
}

export default LabelsNameColors;
