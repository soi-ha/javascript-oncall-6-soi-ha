import EmergencyDatesController from './EmergencyDatesController.js';

export class Controller {
  async start() {
    const dates = await EmergencyDatesController();
    console.log(dates);
  }
}
