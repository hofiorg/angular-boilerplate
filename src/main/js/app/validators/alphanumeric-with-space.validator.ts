import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function alphanumericWithSpaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const regex = /^[a-zA-Z0-9 ]*$/;

    if (!regex.test(control.value)) {
      return { alphanumericWithSpace: true };
    }

    return null;
  };
}
