import EmergencyDatesController from './EmergencyDatesController.js';
import EmergencyShiftNumberController from './EmergencyShiftNumberController.js';
import CreateCalendar from '../model/CreateCalendar.js';

export class Controller {
  async start() {
    const dates = await EmergencyDatesController();
    const calendar = CreateCalendar(dates);
    // const turn = await EmergencyShiftNumberController();
    // const weekdays = turn[0];
    // const holidays = turn[1];
    console.log(calendar);
  }
}
