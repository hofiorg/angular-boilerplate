import { FormBuilder, FormGroup } from '@angular/forms';
import { dateRangeValidator } from './date-range.validator';

describe('dateRangeValidator', () => {
  let fb: FormBuilder;

  beforeEach(() => {
    fb = new FormBuilder();
  });

  const createForm = (fromValue: string | null, tillValue: string | null): FormGroup => {
    return fb.group(
      {
        fromDate: [fromValue],
        tillDate: [tillValue]
      },
      { validators: dateRangeValidator('fromDate', 'tillDate') }
    );
  };

  it('should return an error if the "till" date is earlier than the "from" date', () => {
    const form = createForm('2024-11-10', '2024-11-05');
    form.updateValueAndValidity();
    expect(form.hasError('dateRangeInvalid')).toBeTrue();
  });

  it('should return null (no error) if the "till" date is equal to the "from" date', () => {
    const form = createForm('2024-11-10', '2024-11-10');
    form.updateValueAndValidity();
    expect(form.hasError('dateRangeInvalid')).toBeFalse();
  });

  it('should return null (no error) if the "till" date is later than the "from" date', () => {
    const form = createForm('2024-11-05', '2024-11-10');
    form.updateValueAndValidity();
    expect(form.hasError('dateRangeInvalid')).toBeFalse();
  });

  it('should return null (no error) if the "from" date is empty', () => {
    const form = createForm(null, '2024-11-10');
    form.updateValueAndValidity();
    expect(form.hasError('dateRangeInvalid')).toBeFalse();
  });

  it('should return null (no error) if the "till" date is empty', () => {
    const form = createForm('2024-11-05', null);
    form.updateValueAndValidity();
    expect(form.hasError('dateRangeInvalid')).toBeFalse();
  });

  it('should return null (no error) if both dates are empty', () => {
    const form = createForm(null, null);
    form.updateValueAndValidity();
    expect(form.hasError('dateRangeInvalid')).toBeFalse();
  });
});
