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

  ngOnInit(): void {
      this.title = 'Snapface';
      this.description = 'A simple Angular app to snap your face';
      this.createdAt = new Date();
      this.snaps = 0;
  }

}
