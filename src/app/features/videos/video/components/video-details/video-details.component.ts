import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VideoApi } from 'src/app/core/interfaces/video';
import { JoinPipe } from 'src/app/core/pipes/split-pipe/join.pipe';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
  standalone: true,
  imports: [CommonModule, JoinPipe]
})
export class VideoDetailsComponent {
  @Input() video!: VideoApi;
}
