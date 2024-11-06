import moment from 'moment';
import { newDateBeginOfDay, newDateEndOfDay } from './date-utils';

describe('Date Utility Functions', () => {

  it('should return the start of the day (00:00:00.000)', () => {
    // Create a fixed date for testing
    const testDate = new Date('2024-11-05T15:30:00.000Z');

    // Call the function
    const result = newDateBeginOfDay(testDate);

    // Check that the time is 00:00:00.000 on the same date
    expect(result?.getHours()).toBe(0);
    expect(result?.getMinutes()).toBe(0);
    expect(result?.getSeconds()).toBe(0);
    expect(result?.getMilliseconds()).toBe(0);

    // Optionally, check that the date is the same
    expect(result?.getFullYear()).toBe(2024);
    expect(result?.getMonth()).toBe(10); // November (0-based index)
    expect(result?.getDate()).toBe(5);
  });

  it('should return the end of the day (23:59:59.999)', () => {
    // Create a fixed date for testing
    const testDate = new Date('2024-11-05T15:30:00.000Z');

    // Call the function
    const result = newDateEndOfDay(testDate);

    // Check that the time is 23:59:59.999 on the same date
    expect(result?.getHours()).toBe(23);
    expect(result?.getMinutes()).toBe(59);
    expect(result?.getSeconds()).toBe(59);
    expect(result?.getMilliseconds()).toBe(999);

    // Optionally, check that the date is the same
    expect(result?.getFullYear()).toBe(2024);
    expect(result?.getMonth()).toBe(10); // November (0-based index)
    expect(result?.getDate()).toBe(5);
  });

  it('should return the current date if no argument is provided', () => {
    // Get today's date at the time of the test run
    const todayBegin = newDateBeginOfDay();
    const todayEnd = newDateEndOfDay();

    // Use Moment.js to get the start and end of today
    const momentTodayBegin = moment().startOf('day').toDate();
    const momentTodayEnd = moment().endOf('day').toDate();

    // Test that the result is equal to today's start and end of the day
    expect(todayBegin).toEqual(momentTodayBegin);
    expect(todayEnd).toEqual(momentTodayEnd);
  });
});
