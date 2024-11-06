import moment from 'moment';
import { newDateBeginOfDay, newDateEndOfDay } from './date-utils';

describe('Date Utility Functions', () => {

  it('should return the start of the day (00:00:00.000)', () => {
    const testDate = new Date('2024-11-05T15:30:00.000Z');
    const result = newDateBeginOfDay(testDate);

    expect(result?.getHours()).toBe(0);
    expect(result?.getMinutes()).toBe(0);
    expect(result?.getSeconds()).toBe(0);
    expect(result?.getMilliseconds()).toBe(0);

    expect(result?.getFullYear()).toBe(2024);
    expect(result?.getMonth()).toBe(10);
    expect(result?.getDate()).toBe(5);
  });

  it('should return the end of the day (23:59:59.999)', () => {
    const testDate = new Date('2024-11-05T15:30:00.000Z');
    const result = newDateEndOfDay(testDate);

    expect(result?.getHours()).toBe(23);
    expect(result?.getMinutes()).toBe(59);
    expect(result?.getSeconds()).toBe(59);
    expect(result?.getMilliseconds()).toBe(999);

    expect(result?.getFullYear()).toBe(2024);
    expect(result?.getMonth()).toBe(10);
    expect(result?.getDate()).toBe(5);
  });

  it('should return the current date if no argument is provided', () => {
    const todayBegin = newDateBeginOfDay();
    const todayEnd = newDateEndOfDay();

    const momentTodayBegin = moment().startOf('day').toDate();
    const momentTodayEnd = moment().endOf('day').toDate();

    expect(todayBegin).toEqual(momentTodayBegin);
    expect(todayEnd).toEqual(momentTodayEnd);
  });
});
