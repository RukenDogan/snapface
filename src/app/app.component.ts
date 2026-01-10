import { Component, signal, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { FaceSnapList } from './face-snap-list/face-snap-list';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapList
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
