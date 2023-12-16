import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import { EmergencyDates } from '../model/EmergencyDates.js';

export default async function EmergencyDatesController() {
  try {
    const dates = await InputView.writeEmergencyDates();
    new EmergencyDates(dates);
    return dates;
  } catch (error) {
    Console.print(error.message);
    return EmergencyDatesController();
  }
}
