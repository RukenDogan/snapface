import { Component, signal, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  
  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'My first snap',
      'This is my first snap description',
      'https://angular.io/assets/images/logos/angular/angular.png',
      new Date(),
      0
    );
  }
}
