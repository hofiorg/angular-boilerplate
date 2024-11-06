import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter} from '@angular/material/core';
import {Provider} from '@angular/core';

class GermanDateAdapter extends NativeDateAdapter {
  override parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('.') > -1)) {
      const str = value.split('.');
      if (str.length < 2 || isNaN(+str[0]) || isNaN(+str[1]) || isNaN(+str[2])) {
        return null;
      }
      return new Date(Number(str[2]), Number(str[1]) - 1, Number(str[0]), 12);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  override format(date: Date, _displayFormat: Object): string {
    return date.getDate().toString().padStart(2, '0') + '.' + (date.getMonth() + 1).toString().padStart(2, '0') + '.' + date.getFullYear();
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
