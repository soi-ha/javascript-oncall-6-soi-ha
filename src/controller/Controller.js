import EmergencyDatesController from './EmergencyDatesController.js';
import EmergencyShiftNumberController from './EmergencyShiftNumberController.js';

export class Controller {
  async start() {
    const dates = await EmergencyDatesController();
    const turn = await EmergencyShiftNumberController();
    // console.log(turn);
    const weekdays = turn[0];
    const holidays = turn[1];
    // console.log(weekdays, holidays);
  }
}
