export default function WorkArrangement(calendar, weekdays, holidays) {
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
      // console.log('holiTurn', holiTurn);
      // console.log('holidays', holidays[holiTurn]);
      day.push(holidays[holiTurn]);
      holiTurn += 1;
    } else {
      if (weekTurn === weekdays.length - 1) {
        weekTurn = 0;
      }
      // console.log('weekTurn', weekTurn);
      // console.log('weekdays', weekdays[weekTurn]);
      day.push(weekdays[weekTurn]);
      weekTurn += 1;
    }
  });
  return calendar;
}
