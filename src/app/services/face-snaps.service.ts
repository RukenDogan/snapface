import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Injectable({
  providedIn: 'root',
})
export class faceSnapsService {
  private faceSnaps: FaceSnap[] = [
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
    ).withLocation('à la montagne'),
    new FaceSnap(
      'My last snap',
      'This is my last snap description',
      'https://i.pinimg.com/originals/af/e2/85/afe28514458b03c68eea289007a326e6.jpg',
      new Date(),
      26
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }
}
