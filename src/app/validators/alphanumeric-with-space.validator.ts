import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Custom validator that checks if the input is alphanumeric with spaces.
 */
export function alphanumericWithSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // don't validate if the control is empty (if not required)
    }

    // Regular expression to match alphanumeric characters and spaces
    const regex = /^[a-zA-Z0-9\s]*$/;

    if (!regex.test(control.value)) {
      return { alphanumericWithSpace: true }; // Return an error object if validation fails
    }

    return null; // Return null if validation passes
  };
}
