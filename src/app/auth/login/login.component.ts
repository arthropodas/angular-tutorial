import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
        ]
      ]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    // if (this.loginForm.valid) {
    //   console.log("Form Submitted:", this.loginForm.value);
    // } else {
    //   console.log("Form is invalid.");
    // }
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user:any = userCredential.user;
    console.log("success user", user);
    localStorage.setItem("accessToken",user['stsTokenManager'].accessToken)
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("invalid user", error);
    
    
  });
  }
}

