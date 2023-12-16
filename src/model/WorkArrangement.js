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
      [holidays, holiTurn] = conditionalStatement(day, holidays, holiTurn);
    } else {
      [weekdays, weekTurn] = conditionalStatement(day, weekdays, weekTurn);
    }
  });
  return calendar;
}

function conditionalStatement(li, days, turn) {
  if (turn === days.length - 1) {
    turn = 0;
  }
  li.push(days[turn]);
  turn += 1;
  return [days, turn];
}
