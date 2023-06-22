import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoApi } from 'src/app/core/interfaces/video';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoService } from './services/video.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, VideoDetailsComponent],
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [VideoService]
})
export class VideoComponent implements OnInit {

  private readonly _paramId;
  public video!: VideoApi;

  constructor(private _videoService: VideoService, _route: ActivatedRoute) {
    this._paramId = _route.snapshot.paramMap.get('videoId');
  }
  
  ngOnInit() {
    this._getVideo();
  }

  private _getVideo() {
    this._videoService.getVideoDetails(this._paramId).subscribe({
      next: (video: VideoApi) => {
        this.video = video;
      },
      error: () => {}
    });
  }
}
