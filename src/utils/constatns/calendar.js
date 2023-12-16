const HOLIDAY = Object.freeze({
  1: '1',
  3: '1',
  5: '5',
  6: '6',
  8: '15',
  10: ['3', '9'],
  12: '25',
});
const DAY = ['일', '월', '화', '수', '목', '금', '토'];
const LASTDAY = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CALENDAR = Object.freeze({
  HOLIDAY,
  DAY,
  LASTDAY,
});

export default CALENDAR;
