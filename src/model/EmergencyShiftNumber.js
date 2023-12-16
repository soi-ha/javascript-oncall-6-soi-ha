import ERROR from '../utils/constatns/error.js';

export class EmergencyShiftNumber {
  #weekdays;
  #holidays;

  constructor(weekdays, holidays) {
    this.#weekdays = weekdays;
    this.#holidays = holidays;
    this.#validate(weekdays, holidays);
  }

  #validate(weekdays, holidays) {
    this.#validateListLength(weekdays, holidays);
    this.#validateName(weekdays, holidays);
    this.#validateDuplicateName(weekdays, holidays);
    this.#validateSameListLength(weekdays, holidays);
    this.#validateListSameValue(weekdays, holidays);
  }

  // 각 배열의 길이는 5~35
  #validateListLength(weekdays, holidays) {
    [weekdays, holidays].map((li) => {
      if (li.length < 5 || li.length > 35) {
        throw new Error(ERROR.message);
      }
    });
  }

  // 각 이름의 유효성 검사 (길이 1~5, 숫자-특수문자 불가)
  #validateName(weekdays, holidays) {
    const REGEX = /^[a-zA-Z가-힣]{1,5}$/;
    [weekdays, holidays].map((li) => {
      li.filter((name) => {
        if (!REGEX.test(name)) {
          throw new Error(ERROR.message);
        }
      });
    });
  }

  // 중복 이름 확인
  #validateDuplicateName(weekdays, holidays) {
    [weekdays, holidays].map((li) => {
      if (new Set(li).size !== li.length) {
        throw new Error(ERROR.message);
      }
    });
  }

  // 두 배열의 길이는 동일
  #validateSameListLength(weekdays, holidays) {
    if (weekdays.length !== holidays.length) {
      throw new Error(ERROR.message);
    }
  }

  // 두 배열의 입력된 값은 모두 동일
  #validateListSameValue(weekdays, holidays) {
    const week = [...weekdays].sort();
    const holi = [...holidays].sort();
    for (let i = 0; i < week.length; i++) {
      if (week[i] !== holi[i]) {
        throw new Error(ERROR.message);
      }
    }
  }
}
