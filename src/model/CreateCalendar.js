import CALENDAR from '../utils/constatns/calendar.js';

export default function CreateCalendar(dates) {
  const month = dates[0]; // '5'
  const dayOfTheWeek = dates[1]; // '월'
  const endDay = CALENDAR.LASTDAY[month - 1]; // 31
  const calendar = makecalendar(dayOfTheWeek, endDay);
  if (Object.keys(CALENDAR.HOLIDAY).includes(month)) {
    return addHoliday(month, calendar);
  }
  return calendar;
}

const makecalendar = function makeDayAndDayOfTheWeek(dayOfTheWeek, endDay) {
  const calendar = [];

  let loopCnt = CALENDAR.DAY.indexOf(dayOfTheWeek); // 1
  for (let day = 1; day < endDay + 1; day++) {
    if (loopCnt > 6) {
      loopCnt = 0;
    }
    calendar.push([day, CALENDAR.DAY[loopCnt]]);
    loopCnt += 1;
  }
  return calendar;
};

const addHoliday = function addHolidayToCalendar(month, calendar) {
  const monthIndex = Object.keys(CALENDAR.HOLIDAY).indexOf(month);
  const holidayValue = Object.values(CALENDAR.HOLIDAY)[monthIndex];
  if (month === '10') {
    // holidayValue가 리스트
    holidayValue.forEach((value) => {
      calendar[value - 1][1] += '(휴일)';
    });
    return calendar;
  }
  // holidayValue가 문자열
  calendar[holidayValue - 1][1] += '(휴일)';
  return calendar;
};
