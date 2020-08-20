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
  height: 590px;
  top: ${(props) => (props.optionCoverPosition ? "0px" : "null")};
  right: ${(props) => (props.optionCoverPosition ? "-120px" : "null")};
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 17.5px;
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

const StyledButton = styled.button`
  width: 75px;
  height: 32.5px;
  background-color: ${(props) => (props.redButton ? "#CF513D" : "#5aac44")};
  border-radius: 4px;
  margin: 10px auto;
  color: white;
  cursor: pointer;
  transition: 0.15s linear;
  align-self: center;

  &:hover {
    opacity: 0.85;
  }
`;

const StyledWrapDateInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 50%;
`;

const StyledDateInput = styled.input`
  width: 25%;
  background-color: #fafbfc;
  box-shadow: 0px 0px 1px 1.5px #ccc;
  text-align: center;
  border-radius: 3px;
  padding: 5px 2.5px;
  margin: 5px;
  transition: 0.1s linear;
  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 1px 1.5px #0079bf !important;
  }
`;

const StyledTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #888;
`;

const StyledWarnSpan = styled.span`
  width: 100%;
  text-align: center;
  margin: 2.5px 0;
  color: #fff;
`;

function DatePickerView({
  toggleCurrentListVisiFunc,
  todayDay,
  todayMonth,
  todayYear,
  todayMonthName,
  hour,
  minutes,
  days,
  toggleMonths,
  emptyFields,
  howManyDaysMonth,
  choosedDateFunction,
  choosedTimeFunction,
  setThisDataFunctiion,
  setThisDayFunc,
  optionCover,
}) {
  return (
    <StyledChangeListDetails
      optionCoverPosition={optionCover}
      className="calendar"
    >
      <StyledDateTitle className="calendar">
        Change Date{" "}
        <span
          className="fas fa-times"
          onClick={() => toggleCurrentListVisiFunc("datePickerVisi")}
        />
      </StyledDateTitle>
      <StyledDateWrap className="calendar">
        <StyledIcon
          className="fas fa-caret-left calendar"
          onClick={() => toggleMonths("Minus")}
        />
        <StyledColumnDate className="calendar">
          <StyledText className="calendar">{todayMonthName}</StyledText>
          <StyledText biggerFontSize className="calendar">
            {todayDay}
          </StyledText>
          <StyledText className="calendar">{todayYear}</StyledText>
        </StyledColumnDate>

        <StyledIcon
          className="fas fa-caret-right calendar"
          onClick={() => toggleMonths("Add")}
        />
      </StyledDateWrap>
      <Calendar
        days={days}
        todayDay={todayDay}
        emptyFields={emptyFields}
        howManyDaysMonth={howManyDaysMonth}
        setThisDayFunc={setThisDayFunc}
        className="calendar"
      />
      <StyledWrapDateInputs className="calendar">
        <StyledTitle className="calendar">Date</StyledTitle>
        <StyledDateInput
          value={todayDay}
          onChange={(e) => choosedDateFunction(e)}
          name="todayDay"
          className="calendar dayInput"
        />
        <StyledDateInput
          value={todayMonth}
          onChange={(e) => choosedDateFunction(e)}
          name="todayMonth"
          className="calendar monthInput"
        />
        <StyledDateInput
          value={todayYear}
          onChange={(e) => choosedDateFunction(e)}
          name="todayYear"
          className="calendar yearInput"
        />
        <StyledWarnSpan className="calendar warnSpanDate">
          e.g 21.9.2020
        </StyledWarnSpan>
      </StyledWrapDateInputs>

      <StyledWrapDateInputs className="calendar">
        <StyledTitle className="calendar">Time</StyledTitle>
        <StyledDateInput
          value={hour}
          onChange={(e) => choosedTimeFunction(e)}
          className="calendar hourInput"
          name="hour"
        />
        <StyledDateInput
          value={minutes}
          onChange={(e) => choosedTimeFunction(e)}
          className="calendar minutesInput"
          name="minutes"
        />
        <StyledWarnSpan className="calendar warnSpanTime">
          e.g 06:45
        </StyledWarnSpan>
      </StyledWrapDateInputs>

      <StyledButton
        onClick={() => setThisDataFunctiion("save")}
        className="calendar"
      >
        SAVE
      </StyledButton>
      <StyledButton
        onClick={() => setThisDataFunctiion("delete")}
        redButton
        className="calendar"
      >
        DELETE
      </StyledButton>
    </StyledChangeListDetails>
  );
}

export default DatePickerView;
