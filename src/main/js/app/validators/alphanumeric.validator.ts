import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom validator that checks if the input is alphanumeric.
 */
export function alphanumericValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const regex = /^[a-zA-Z0-9]*$/;

    if (!regex.test(control.value)) {
      return { alphanumeric: true };
    }

    return null;
  };
}
