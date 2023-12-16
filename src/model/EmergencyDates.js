import ERROR from '../utils/constatns/error.js';
import CALENDAR from '../utils/constatns/calendar.js';

export class EmergencyDates {
  #dates;

  constructor(dates) {
    this.#dates = dates;
    this.#validate(dates);
  }

  #validate(dates) {
    this.#validateDatesLength(dates);
    this.#validateNumberMonth(dates);
    this.#validateRangeMonth(dates);
    this.#validateStartDay(dates);
  }

  // 배열의 길이 확인
  #validateDatesLength(dates) {
    if (dates.length !== 2) {
      throw new Error(ERROR.message);
    }
  }

  // 월 입력 유효성 검사(숫자인지)
  #validateNumberMonth(dates) {
    if (isNaN(Number(dates[0]))) {
      throw new Error(ERROR.message);
    }
  }

  // 월 입력 범위 검사(1~12)
  #validateRangeMonth(dates) {
    if (dates[0] < 1 || dates[0] > 12) {
      throw new Error(ERROR.message);
    }
  }

  // 시작 요일 유효성 검사
  #validateStartDay(dates) {
    if (!CALENDAR.DAY.includes(dates[1])) {
      throw new Error(ERROR.message);
    }
  }
}
