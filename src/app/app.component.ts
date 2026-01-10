import { Component } from '@angular/core';
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
