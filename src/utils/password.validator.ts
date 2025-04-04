import { compileNgModule } from '@angular/compiler';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    console.log("calling password:", password);
    console.log("calling confirm password:", confirmPassword);

    
    
    if (password && confirmPassword && password !== confirmPassword) {
        console.log("mismatching");
        
      return { passwordMismatch: true };
    }
   
    return null;
  };
}
