import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateRangeValidator(controlFrom : string, controlTill : string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const controlFromControl = control.get(controlFrom);
    const controlTillControl = control.get(controlTill);

    if (controlFromControl && controlTillControl) {
      const fromDate = controlFromControl.value ? new Date(controlFromControl.value) : null;
      const tillDate = controlTillControl.value ? new Date(controlTillControl.value) : null;

      if (fromDate && tillDate && tillDate < fromDate) {
        return { dateRangeInvalid: true };
      }
    }
    return null;
  };
}
