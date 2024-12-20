import moment from 'moment';

export function newDateBeginOfDay(date: Date = new Date()): Date {
  return moment(date).startOf('day').toDate();
}

export function newDateEndOfDay(date: Date = new Date()): Date {
  return moment(date).endOf('day').toDate();
}

export function formatDate(date: Date = new Date()): string {
  return moment(date).toISOString(true);
}
