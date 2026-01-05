import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnap
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
}
