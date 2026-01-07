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

  faceSnaps!: FaceSnap[];
  
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
      'My first snap',
      'This is my first snap description',
      'https://tse4.mm.bing.net/th/id/OIP.kCydCYlVcKV4uJQTARLJcAHaHT?pid=Api&P=0&w=300&h=300',
      new Date(),
      0
      ),

      new FaceSnap(
      'My second snap',
      'This is my second snap description',
      'https://imgix.ranker.com/user_node_img/50147/1002928852/original/1002928852-photo-u-27910876?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=200',
      new Date(),
      78

      ),
      new FaceSnap(
      'My last snap',
      'This is my last snap description',
      'https://i.pinimg.com/originals/af/e2/85/afe28514458b03c68eea289007a326e6.jpg',
      new Date(),
      26
      ),
    ];

  

    this.faceSnaps[1].setLocation('à la montagne');
  }
}
