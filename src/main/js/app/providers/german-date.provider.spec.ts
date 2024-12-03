import {TestBed} from '@angular/core/testing';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {provideGermanDate} from './german-date.provider';
import {GermanDateAdapter} from './german-date.provider';

describe('GermanDateAdapter', () => {
  let adapter: GermanDateAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: provideGermanDate(),
    });

    adapter = TestBed.inject(DateAdapter) as GermanDateAdapter;
  });

  describe('parse', () => {
    it('should parse a valid German date string', () => {
      const date = adapter.parse('25.12.2024');
      expect(date).toEqual(new Date(2024, 11, 25)); // Months are 0-indexed in JavaScript
    });

    it('should return null for an invalid German date string', () => {
      const date = adapter.parse('31.02.2024'); // Invalid date
      expect(date).toBeNull();
    });

    it('should parse a timestamp', () => {
      const timestamp = new Date(2024, 11, 25).getTime();
      const date = adapter.parse(timestamp);
      expect(date).toEqual(new Date(2024, 11, 25));
    });

    it('should return null for an invalid value', () => {
      const date = adapter.parse('invalid-date');
      expect(date).toBeNull();
    });
  });

  describe('format', () => {
    it('should format a date into German format', () => {
      const date = new Date(2024, 11, 25); // December 25, 2024
      const formatted = adapter.format(date, {});
      expect(formatted).toBe('25.12.2024');
    });
  });
});

describe('provideGermanDate', () => {
  it('should provide the correct providers', () => {
    const providers = provideGermanDate(); // This is an array of providers
    const matDateLocaleProvider = providers.find(
      (p): p is { provide: typeof MAT_DATE_LOCALE; useValue: string } =>
        (p as any).provide === MAT_DATE_LOCALE
    );
    const dateAdapterProvider = providers.find(
      (p): p is { provide: typeof DateAdapter; useClass: typeof GermanDateAdapter } =>
        (p as any).provide === DateAdapter
    );
    const matDateFormatsProvider = providers.find(
      (p): p is { provide: typeof MAT_DATE_FORMATS; useValue: any } =>
        (p as any).provide === MAT_DATE_FORMATS
    );

    expect(matDateLocaleProvider?.useValue).toBe('de-DE');
    expect(dateAdapterProvider?.useClass).toBe(GermanDateAdapter);
    expect(matDateFormatsProvider?.useValue).toEqual({
      parse: { dateInput: ['dd.MM.yyyy'] },
      display: {
        dateInput: 'dd.MM.yyyy',
        monthYearLabel: 'DD.MM.yyyy',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM yyyy',
      },
    });
  });
});
