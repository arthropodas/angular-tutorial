import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from 'firebase.config';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    initializeApp(firebaseConfig)
  }
}
