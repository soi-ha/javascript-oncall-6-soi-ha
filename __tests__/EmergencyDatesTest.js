import { EmergencyDates } from '../src/model/EmergencyDates.js';

describe('EmergencyDates 클래스 테스트', () => {
  test.each([[['5', '월요일']], [['5월', '월']]])(' 예외 발생', (inputs) => {
    expect(() => {
      new EmergencyDates(inputs);
    }).toThrow('[ERROR]');
  });
});
