import React from "react";
import styled from "styled-components";

const StyledCalendar = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 250px;
  color: white;
`;

const StyledCalendarDays = styled.div`
  width: 36px;
  height: 36px;
  margin: 0 3px;
  text-align: center;
  line-height: 36px;
  font-size: 13px;
  font-weight: 600;
  background-color: #fff;
  color: ${(props) => (props.darkerColor ? "#42516e" : "#aaa")};
  border: 0.5px solid #fff;
  border-radius: 50%;

  &:hover {
    background-color: ${(props) => (props.bgc ? "#73829f !important" : "#fff")};
    color: ${(props) => (props.col ? "#fff !important" : "#42516e")};
    cursor: ${(props) => (props.cur ? "pointer !important" : "inherit")};
    font-size: 16px;
  }
`;

function Calendar({
  days,
  emptyFields,
  howManyDaysMonth,
  todayDay,
  setThisDayFunc,
}) {
  return (
    <StyledCalendar className="calendar">
      {days.map((ele) => (
        <StyledCalendarDays key={ele} className="calendar">
          {ele}
        </StyledCalendarDays>
      ))}
      {emptyFields.map((ele) => (
        <StyledCalendarDays key={ele.id} className="calendar" />
      ))}
      {howManyDaysMonth.map((ele) => (
        <StyledCalendarDays
          key={ele.id}
          bgc
          col
          cur
          darkerColor
          onClick={(e) => setThisDayFunc(e, ele.id)}
          className="calendarDays calendar"
          style={{
            backgroundColor: `${ele.id === todayDay ? "#42516e" : "#fff"}`,
            color: `${ele.id === todayDay ? "#fff" : "#42516e"}`,
          }}
        >
          {ele.day}
        </StyledCalendarDays>
      ))}
    </StyledCalendar>
  );
}

export default Calendar;
