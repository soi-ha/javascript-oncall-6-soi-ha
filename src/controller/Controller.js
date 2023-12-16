import InputView from '../view/InputView.js';
export class Controller {
  async start() {
    const test = await InputView.writeEmergencyDates();
    console.log(test);
  }
}
