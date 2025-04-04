import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/utils/password.validator';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$') // At least 1 uppercase, 1 lowercase, 1 number
          ]
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
          ]
        ]
      },
      { validators: passwordMatchValidator } // Remove parentheses
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log("Form is invalid");
      return;
    }

    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User Registered Successfully", userCredential.user);
      })
      .catch((error) => {
        console.error("Error:", error.code, error.message);
      });
  }
}
