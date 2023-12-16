import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView.js';
import { EmergencyShiftNumber } from '../model/EmergencyShiftNumber.js';

export default async function EmergencyShiftNumberController() {
  try {
    const weekdays = await InputView.writeWeekday();
    const holidays = await InputView.writeHoliday();
    new EmergencyShiftNumber(weekdays, holidays);
    return [weekdays, holidays];
  } catch (error) {
    Console.print(error.message);
    return EmergencyShiftNumberController();
  }
}
