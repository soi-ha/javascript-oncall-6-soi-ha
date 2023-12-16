export default function WorkArrangement(calendar, weekdays, holidays) {
  const argumentCalendar = addArrangement(calendar, weekdays, holidays);
  return changeOrder(argumentCalendar);
}

function changeOrder(calendar) {
  for (let i = 1; i < calendar.length - 1; i++) {
    if (calendar[i - 1][2] === calendar[i][2]) {
      [calendar[i][2], calendar[i + 1][2]] = [
        calendar[i + 1][2],
        calendar[i][2],
      ];
    }
  }
  return calendar;
}

function addArrangement(calendar, weekdays, holidays) {
  let weekTurn = 0;
  let holiTurn = 0;
  calendar.forEach((day) => {
    if (
      day[1].includes('토') ||
      day[1].includes('일') ||
      day[1].includes('휴일')
    ) {
      if (holiTurn === holidays.length - 1) {
        holiTurn = 0;
      }
      day.push(holidays[holiTurn]);
      holiTurn += 1;
    } else {
      if (weekTurn === weekdays.length - 1) {
        weekTurn = 0;
      }
      day.push(weekdays[weekTurn]);
      weekTurn += 1;
    }
  });
  return calendar;
}
