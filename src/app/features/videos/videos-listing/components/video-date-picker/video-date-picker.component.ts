import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VideosActiveDateService } from '../../services/videos-active-date.service';

@Component({
  selector: 'app-video-date-picker',
  templateUrl: './video-date-picker.component.html',
  styleUrls: ['./video-date-picker.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class VideoDatePickerComponent {
  activeDate$!: Observable<string>;

  constructor(private videosActiveDateService: VideosActiveDateService) {
    this.activeDate$ = this.videosActiveDateService.activeDate$;
  }

  public getVideos(event: Event) {
    const value = (event?.target as HTMLInputElement).value;
    if (!value) {
      alert('Ej no, nie usuwaj');
      return;
    }
    this.videosActiveDateService.setActiveDate(new Date(value));
  }
}
