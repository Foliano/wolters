import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideosActiveDateService } from '../../services/videos-active-date.service';
import { VideoDateNavComponent } from '../video-date-nav/video-date-nav.component';
import { VideoDatePickerComponent } from '../video-date-picker/video-date-picker.component';

@Component({
  selector: 'app-video-active-date',
  templateUrl: './video-active-date.component.html',
  styleUrls: ['./video-active-date.component.scss'],
  standalone: true,
  imports: [CommonModule, VideoDateNavComponent, VideoDatePickerComponent]
})
export class VideoActiveDateComponent {
  
  constructor(private videosActiveDateService: VideosActiveDateService) {}

  changeDay(day: -1 | 1): void {
    this.videosActiveDateService.changeByDay(day);
  }
}
