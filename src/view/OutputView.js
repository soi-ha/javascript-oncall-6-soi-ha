import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printEmergencySchedule(month, addArrangementCalendar) {
    addArrangementCalendar.forEach((value) => {
      Console.print(`${month}월 ${value[0]}일 ${value[1]} ${value[2]}`);
    });
  },
};

export default OutputView;
