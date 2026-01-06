import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';


@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() FaceSnap!: FaceSnap;


  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.title = 'Snapface';
    this.description = 'A simple Angular app to snap your face';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
    this.snapButtonText = 'Oh snap!';
    this.userHasSnapped = false;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.FaceSnap.removeSnap();
    this.snaps--;
    this.snapButtonText = 'Oh snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.FaceSnap.addSnap();
    this.snaps++;
    this.snapButtonText = 'Oops unSnap!';
    this.userHasSnapped = true;
  }
}
