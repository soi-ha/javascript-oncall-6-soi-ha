const HOLIDAY = [
  '1월 1일',
  '3월 1일',
  '5월 5일',
  '6월 6일',
  '8월 15일',
  '10월 3일',
  '10월 9일',
  '12월 25일',
];
const DAY = ['일', '월', '화', '수', '목', '금', '토'];
const LASTDAY = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const CALENDAR = Object.freeze({
  HOLIDAY,
  DAY,
  LASTDAY,
});

export default CALENDAR;
