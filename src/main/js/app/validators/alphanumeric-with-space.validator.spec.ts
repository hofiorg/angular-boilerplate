import { alphanumericWithSpaceValidator } from './alphanumeric-with-space.validator';
import { FormControl } from '@angular/forms';

describe('alphanumericWithSpaceValidator', () => {

  let validator: ReturnType<typeof alphanumericWithSpaceValidator>;

  beforeEach(() => {
    validator = alphanumericWithSpaceValidator();
  });

  it('should return null for valid alphanumeric string with spaces', () => {
    const control = new FormControl('John Doe 123');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return an error object for invalid characters (e.g., special symbols)', () => {
    const control = new FormControl('John@Doe!');
    const result = validator(control);
    expect(result).toEqual({ alphanumericWithSpace: true });
  });

  it('should return null for empty input', () => {
    const control = new FormControl('');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return an error object for input with non-alphanumeric characters (e.g., punctuation)', () => {
    const control = new FormControl('John.Doe, 123');
    const result = validator(control);
    expect(result).toEqual({ alphanumericWithSpace: true });
  });

  it('should return null for a string with only spaces', () => {
    const control = new FormControl('   ');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return an error object for input with numbers only', () => {
    const control = new FormControl('123456');
    const result = validator(control);
    expect(result).toBeNull();
  });

  it('should return an error object if input contains newlines or tabs', () => {
    const control = new FormControl('John\tDoe\n');
    const result = validator(control);
    expect(result).toEqual({ alphanumericWithSpace: true });
  });

});
