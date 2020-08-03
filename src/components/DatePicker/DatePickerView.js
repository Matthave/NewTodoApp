import React from "react";
import styled from "styled-components";
import Calendar from "./Calendar";

const StyledChangeListDetails = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  position: fixed;
  width: 300px;
  height: 550px;
  top: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  right: ${(props) => (props.optionCoverPosition ? "-120px" : "null")};
  background-color: #fff;
  border-radius: 3px;
`;

const StyledDateTitle = styled.h3`
  width: 100%;
  position: relative;
  flex-grow: 1;
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 1px solid #aaa;
  padding-bottom: 6px;
  color: #555;
  font-weight: 400;
  margin-bottom: 5px;
  padding: 10px;

  & > .fa-times {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

const StyledText = styled.h2`
  width: 100%;
  text-align: center;
  font-size: ${(props) => (props.biggerFontSize ? "40px" : "25px")};
  margin-left: 5px;
  margin-bottom: 5px;
  padding: 5px;
  color: white;
`;

const StyledDateWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  background-color: #5aac44;
  padding: 5px 10px;
`;

const StyledIcon = styled.span`
  margin: 0 5px;
  font-size: 45px;
  align-self: center;
  cursor: pointer;
  transition: 0.1s linear;

  &:hover {
    color: #fff;
  }
`;

const StyledColumnDate = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
  width: 40%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  border-radius: 3px;
  padding: 7.5px 5px;
  margin: 10px auto;

  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf;
  }
`;

const StyledButton = styled.button`
  width: 75px;
  height: 32.5px;
  background-color: #5aac44;
  border-radius: 4px;
  margin: 10px auto;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;
  align-self: center;

  &:hover {
    background-color: #6abc54;
  }
`;

function DatePickerView({
  toggleDateVisibility,
  todayDay,
  todayYear,
  todayMonthName,
  days,
  toggleMonths,
  emptyFields,
  howManyDaysMonth,
  todayFullDate,
  choosedDateFunction,
  setThisDataFunctiion,
  setThisDayFunc,
  optionCover,
}) {
  return (
    <StyledChangeListDetails optionCoverPosition={optionCover}>
      <StyledDateTitle>
        Change Date{" "}
        <span className="fas fa-times" onClick={() => toggleDateVisibility()} />
      </StyledDateTitle>
      <StyledDateWrap>
        <StyledIcon
          className="fas fa-caret-left"
          onClick={() => toggleMonths("Minus")}
        />
        <StyledColumnDate>
          <StyledText>{todayMonthName}</StyledText>
          <StyledText biggerFontSize>{todayDay}</StyledText>
          <StyledText>{todayYear}</StyledText>
        </StyledColumnDate>

        <StyledIcon
          className="fas fa-caret-right"
          onClick={() => toggleMonths("Add")}
        />
      </StyledDateWrap>
      <Calendar
        days={days}
        todayDay={todayDay}
        emptyFields={emptyFields}
        howManyDaysMonth={howManyDaysMonth}
        setThisDayFunc={setThisDayFunc}
      />
      <StyledInput
        value={todayFullDate}
        onChange={(e) => choosedDateFunction(e)}
      />
      <StyledButton onClick={() => setThisDataFunctiion()}>SAVE</StyledButton>
    </StyledChangeListDetails>
  );
}

export default DatePickerView;
