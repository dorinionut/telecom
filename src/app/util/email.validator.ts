import { AbstractControl} from '@angular/forms';

export function emailValidator(c: AbstractControl) {

  const regexp = /^[A-Za-z0-9_.-]+@[a-z0-9-]{2,}.{1}[a-z]{2,3}(.{1}[a-z]{2,3})?$/i;

  return regexp.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}
