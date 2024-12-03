import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter} from '@angular/material/core';
import {Provider} from '@angular/core';
import moment from 'moment';

export class GermanDateAdapter extends NativeDateAdapter {
  override parse(value: any): Date | null {
    if (typeof value === 'string' && value.indexOf('.') > -1) {
      const parsedDate = moment(value, 'DD.MM.YYYY', true);
      return parsedDate.isValid() ? parsedDate.toDate() : null;
    }

    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  override format(date: Date, _displayFormat: Object): string {
    return moment(date).format('DD.MM.YYYY');
  }
}

const MY_DATE_FORMATS = {
  parse: {
    dateInput: ['dd.MM.yyyy'],
  },
  display: {
    dateInput: 'dd.MM.yyyy',
    monthYearLabel: 'DD.MM.yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy',
  },
};

export function provideGermanDate() : Provider[] {
  return [
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    { provide: DateAdapter, useClass: GermanDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ];
}
