
const padValue = (value, length) => {
  return `${value}`.padStart(length, "0");
}

const SQL_FORMAT = "sql";

const CURRENT_YEAR = +(new Date().getFullYear());

const CURRENT_MONTH = +(new Date().getMonth()) + 1;

const DAYS_OF_WEEK = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat"
}

const MONTHS_OF_YEAR = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec"
}

const dateDetails = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return {
    day,
    month,
    year
  }
}

const daysInMonth = (month, year) => {
  const tmpDate = new Date(year, month, 40);
  let dayCount = 40 - tmpDate.getDate();
  return dayCount;
}

const firstDayOfMonth = (month, year) => {

  const tmpDate = new Date(`${year}-${padValue(month, 2)}-01`);
  let day = tmpDate.getDay() + 1;
  return day;
}

const isDate = (date) => {
  const isDateObj = Object.prototype.toString.call(date) === '[object Date]';
  const isValidDate = date && !Number.isNaN(date.valueOf());
  return isDateObj && isValidDate;
}

const isMonthSame = (date, baseDate) => {
  if (!(isDate(date) && isDate(baseDate))) return false;
  const dMonth = +(date.getMonth()) + 1
  const dYear = date.getFullYear();
  const bdMonth = +(baseDate.getMonth()) + 1;
  const bdYear = baseDate.getFullYear();
  return (+dMonth === +bdMonth) && (+dYear === +bdYear);
}

const isDaySame = (date, baseDate) => {
  if (!(isDate(date) && isDate(baseDate))) return false;
  const dDate = date.getDate();
  const dMonth = +(date.getMonth()) + 1
  const dYear = date.getFullYear();
  const bdDate = baseDate.getDate();
  const bdMonth = +(baseDate.getMonth()) + 1;
  const bdYear = baseDate.getFullYear();
  return (+dMonth === +bdMonth) && (+dYear === +bdYear) && (+dDate === +bdDate);
}

// YYYY-MM-DD
const formatISO = (date) => {
  if (!isDate(date)) return "";
  const fullYear = date.getFullYear();
  const month = +(date.getMonth()) + 1;
  const day = date.getDate();
  return `${fullYear}-${padValue(month, 2)}-${padValue(day, 2)}`;
}


const previousMonth = (month, year) => {
  const prevMonth = (month > 1) ? month - 1 : 12;
  const prevYear = (month > 1) ? year : year - 1;
  return { month: prevMonth, year: prevYear }
}

const nextMonth = (month, year) => {
  const nextMonth = (month < 12) ? month + 1 : 1;
  const nextYear = (month < 12) ? year : year + 1;
  return { month: nextMonth, year: nextYear }
}

const dateWithFormat = (date,format) => {
  try {
    if (!isDate(date)) {
      throw new Error("[Utilities][FN][dateWithFormat][ERROR]-Not a date object");
    }    
    var fullYear = date.getFullYear();
    var smallYear = date.getFullYear().toString().slice(-2);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var miliseconds = date.getMilliseconds();

    switch (format) {
      case SQL_FORMAT:
        return `${fullYear}-${padValue(month,2)}-${padValue(day,2)} ${padValue(hour,2)}:${padValue(minutes,2)}:${padValue(seconds,2)}:${padValue(miliseconds,2)}`;            
      default:
        return `${fullYear}-${padValue(month,2)}-${padValue(day,2)}`;
    }    
  } catch (error) {
    console.error(`[Utilities][FN][dateWithFormat][ERROR]-${error.message}`)
  }
}

// const dateWithFormat = (date,format) => {
//   try {
//     if (!isDate(date)) {
//       throw new Error("[Utilities][FN][dateWithFormat][ERROR]-Not a date object");
//     }
//     const map = {
//       mm: date.getMonth() + 1,
//       dd: date.getDate(),
//       yy: date.getFullYear().toString().slice(-2),
//       yyyy: date.getFullYear(),
//       h: date.getHour(),
//       m: date.getMinutes(),
//       s: date.getSeconds()
//     }
//     return format.replace(/mm|dd|yy|yyyy|h|m|s/gi,matched => map[matched]);
//   } catch (error) {
//     console.error(`[Utilities][FN][dateWithFormat][ERROR]-${error.message}`)
//   }
// }





export {
  CURRENT_YEAR,
  CURRENT_MONTH,
  DAYS_OF_WEEK,
  MONTHS_OF_YEAR,
  daysInMonth,
  firstDayOfMonth,
  isDate,
  isMonthSame,
  isDaySame,
  formatISO,
  previousMonth,
  nextMonth,
  dateDetails,
  padValue,
  dateWithFormat
}