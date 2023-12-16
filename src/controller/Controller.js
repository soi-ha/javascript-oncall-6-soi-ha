import EmergencyDatesController from './EmergencyDatesController.js';
import EmergencyShiftNumberController from './EmergencyShiftNumberController.js';
import OutputView from '../view/OutputView.js';
import CreateCalendar from '../model/CreateCalendar.js';
import WorkArrangement from '../model/WorkArrangement.js';

export class Controller {
  async start() {
    const dates = await EmergencyDatesController();
    const [weekdays, holidays] = await EmergencyShiftNumberController();
    // console.log('weekdays', weekdays);
    // console.log('holdays', holidays);

    // 달력 만들기
    const calendar = CreateCalendar(dates);
    const addArrangementCalendar = WorkArrangement(
      calendar,
      weekdays,
      holidays,
    );

    OutputView.printEmergencySchedule(dates[0], addArrangementCalendar);
  }
}
