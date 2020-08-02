import React, { Component } from "react";
import DatePickerView from "../../components/DatePicker/DatePickerView";

class DatePicker extends Component {
  state = {
    todayFullDate: "",
    todayWeekDay: "",
    todayDay: "",
    todayMonthName: "",
    todayMonth: "",
    todayYear: "",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    updateFlag: false,
    action: "",
    preventMonthLenghtFlag: true,
    displayingMonthLength: "",
    blankPlace: "",
    emptyFilter: [],
    contentFilter: [],
    backMonthLenght: "",
  };

  componentDidMount() {
    //Calculate with module which day will be FirstDay on INITIAL month
    const date = new Date();
    const counterModulo = (date.getDate() % 7) - 1;
    const firstOfMonth = this.state.days.slice(
      date.getDay() - counterModulo - 1
    );

    //Set INITIAL date ( current date ) in input
    const todayFull = `${
      date.getDate() <= 9 ? "0" + date.getDate() : date.getDate()
    }.${
      date.getMonth() + 1 <= 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }.${date.getFullYear()}`;

    //Call generate
    this.generateOtherMonth(
      firstOfMonth,
      this.state.months[date.getMonth()],
      date.getFullYear()
    );

    //INITIAL data for date
    this.setState({
      todayDay: date.getDate(),
      todayMonthName: this.state.months[date.getMonth()],
      todayMonth: date.getMonth() + 1,
      todayYear: date.getFullYear(),
      todayWeekDay: date.getDay(),
      firstOfMonth: firstOfMonth,
      todayFullDate: todayFull,
    });
  }

  componentDidUpdate() {
    const {
      days,
      todayDay,
      todayMonth,
      todayYear,
      months,
      updateFlag,
      action,
      displayingMonthLength,
      backMonthLenght,
      blankPlace,
    } = this.state;

    const todayWithZero = `${todayDay <= 9 ? "0" + todayDay : todayDay}`;
    const monthWithZero = `${todayMonth <= 9 ? "0" + todayMonth : todayMonth}`;

    //Update date ( month and year)
    if (updateFlag && action === "Add") {
      //Calculate which day will be FirstDay on next Month
      const nextMonthFromDay = 7 - (42 - displayingMonthLength);
      const nextMonthDay = days.slice(nextMonthFromDay);
      const nextMonthDayArr = [];
      nextMonthDayArr.push(nextMonthDay[0]);
      if (todayMonth > 12) {
        //Generate Call for Next Month and Year,send to state new date
        this.generateOtherMonth(nextMonthDayArr, months[0], todayYear + 1);
        this.setState({
          todayDay: todayDay,
          todayMonthName: months[0],
          todayMonth: 1,
          todayYear: todayYear + 1,
          updateFlag: false,
          preventMonthLenghtFlag: true,
          firstOfMonth: nextMonthDayArr,
          todayFullDate: `${todayWithZero}.${"0" + 1}.${todayYear + 1}`, //Input udating with every back/next click
        });
        return;
      }
      //Generate Call for Next Month, send to state new date
      this.generateOtherMonth(
        nextMonthDayArr,
        months[todayMonth - 1],
        todayYear
      );
      this.setState({
        todayDay: todayDay,
        todayMonthName: months[todayMonth - 1],
        todayMonth: todayMonth,
        todayYear: todayYear,
        updateFlag: false,
        preventMonthLenghtFlag: true,
        firstOfMonth: nextMonthDayArr,
        todayFullDate: `${todayWithZero}.${monthWithZero}.${todayYear}`,
      });
    } else if (updateFlag && action === "Minus") {
      const blankInPrevMonthInEnd = 7 - blankPlace;
      const firstDayOfPrevMonth =
        35 - (backMonthLenght + blankInPrevMonthInEnd);
      const nextMonthDayArr = days.slice(firstDayOfPrevMonth);
      if (todayMonth < 1) {
        //Generate Call for Back Month and Year, send to state new date
        this.generateOtherMonth(nextMonthDayArr, months[11], todayYear - 1);
        this.setState({
          todayDay: todayDay,
          todayMonthName: months[11],
          todayMonth: 12,
          todayYear: todayYear - 1,
          updateFlag: false,
          preventMonthLenghtFlag: true,
          firstOfMonth: nextMonthDayArr,
          todayFullDate: `${todayWithZero}.${12}.${todayYear - 1}`,
        });
        return;
      }
      //Generate Call for Back Month, send to state new date
      this.generateOtherMonth(
        nextMonthDayArr,
        months[todayMonth - 1],
        todayYear
      );
      this.setState({
        todayDay: todayDay,
        todayMonthName: months[todayMonth - 1],
        todayMonth: todayMonth,
        todayYear: todayYear,
        updateFlag: false,
        preventMonthLenghtFlag: true,
        firstOfMonth: nextMonthDayArr,
        todayFullDate: `${todayWithZero}.${monthWithZero}.${todayYear}`,
      });
    }
  }

  generateOtherMonth = (firstOfMonth, todayMonthName, todayYear) => {
    const displayingMonthLength = [];
    let stepBackMonthLength = "";
    if (firstOfMonth) {
      //Empty - how many EMPTY SQUAR we need AGAINST back or next calendaer/month
      const empty = this.state.days.findIndex((ele) => ele === firstOfMonth[0]);
      //Calculate backMonthLenght, when we BACK calendar, calucalte prevMonthLenght when we NEXT calendar
      if (
        todayMonthName === "January" ||
        todayMonthName === "March" ||
        todayMonthName === "May" ||
        todayMonthName === "July" ||
        todayMonthName === "August" ||
        todayMonthName === "October" ||
        todayMonthName === "December"
      ) {
        for (let i = 1; i < 32; i++) {
          displayingMonthLength.push({ day: i, id: i });
        }
        if (todayMonthName === "August" || todayMonthName === "January") {
          stepBackMonthLength = 31;
        } else if (todayMonthName === "March" && todayYear % 4 === 0) {
          stepBackMonthLength = 29;
        } else if (todayMonthName === "March" && todayYear % 4 !== 0) {
          stepBackMonthLength = 28;
        } else {
          stepBackMonthLength = 30;
        }
      } else if (todayMonthName === "February" && todayYear % 4 === 0) {
        for (let i = 1; i < 30; i++) {
          displayingMonthLength.push({ day: i, id: i });
        }
        stepBackMonthLength = 31;
      } else if (todayMonthName === "February" && todayYear % 4 !== 0) {
        for (let i = 1; i < 29; i++) {
          displayingMonthLength.push({ day: i, id: i });
        }
        stepBackMonthLength = 31;
      } else {
        for (let i = 1; i < 31; i++) {
          displayingMonthLength.push({ day: i, id: i });
        }
        stepBackMonthLength = 31;
      }

      for (let i = 0; empty > i; i++) {
        displayingMonthLength.unshift({ day: "", id: `blank${i}` });
      }

      //Filtering seperately emptyFields before first day of Month, and
      // proper days with number content inside
      const emptyFilter = displayingMonthLength.filter(
        (ele) => ele.day.length === 0
      );
      const mappingArrayWithContent = displayingMonthLength.filter(
        (ele) => ele.day.length !== 0
      );

      //Send every made informations to STATE, so during componentUpdate we can use it (when back or next calendar)
      this.setState({
        displayingMonthLength: displayingMonthLength.length,
        blankPlace: empty,
        emptyFilter: emptyFilter,
        contentFilter: mappingArrayWithContent,
        backMonthLenght: stepBackMonthLength,
      });
    }
  };

  toggleMonths = (whichWay) => {
    //Back or Next month for toggle months and years
    if (whichWay === "Add") {
      this.setState({
        todayMonth: this.state.todayMonth + 1,
        updateFlag: true,
        action: whichWay,
      });
    }

    if (whichWay === "Minus") {
      this.setState({
        todayMonth: this.state.todayMonth - 1,
        updateFlag: true,
        action: whichWay,
      });
    }
  };

  choosedDateFunction = (e) => {
    //Input onChange function
    this.setState({
      todayFullDate: e.target.value,
    });
  };

  setThisDayFunc = (e, thisDay) => {
    //Set proper style for clicked Day and set proper date in input
    const calendarDays = document.querySelectorAll(".calendarDays");
    calendarDays.forEach((ele) => {
      ele.style.backgroundColor = "#fff";
      ele.style.color = "#42516e";
      ele.style.fontSize = "13px";
    });
    e.target.style.backgroundColor = "#42516e";
    e.target.style.color = "#fff";
    e.target.style.fontSize = "16px";

    const day = `${thisDay <= 9 ? "0" + thisDay : thisDay}`;
    const month = `${
      this.state.todayMonth <= 9
        ? "0" + this.state.todayMonth
        : this.state.todayMonth
    }`;
    const year = this.state.todayYear;

    this.setState({
      todayFullDate: `${day}.${month}.${year}`,
      todayDay: thisDay,
    });
  };

  setThisDataFunctiion = () => {
    //Send choosed date to main function and currentCard object, after validation by patter RegEx
    const pattern = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    if (pattern.test(this.state.todayFullDate)) {
      alert("YOPE");
    } else {
      alert("NOPE");
    }
  };

  render() {
    const { toggleDateVisibility } = this.props;
    const {
      days,
      todayDay,
      todayYear,
      todayMonthName,
      todayFullDate,
    } = this.state;

    return (
      <DatePickerView
        toggleDateVisibility={toggleDateVisibility}
        days={days}
        todayDay={todayDay}
        todayYear={todayYear}
        todayMonthName={todayMonthName}
        toggleMonths={this.toggleMonths}
        choosedDateFunction={this.choosedDateFunction}
        setThisDataFunctiion={this.setThisDataFunctiion}
        emptyFields={this.state.emptyFilter}
        howManyDaysMonth={this.state.contentFilter}
        todayFullDate={todayFullDate}
        setThisDayFunc={this.setThisDayFunc}
      />
    );
  }
}

export default DatePicker;
