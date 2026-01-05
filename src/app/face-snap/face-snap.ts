import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnap implements OnInit {
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
    this.snaps--;
    this.snapButtonText = 'Oh snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.snaps++;
    this.snapButtonText = 'Oops unSnap!';
    this.userHasSnapped = true;
  }
}
