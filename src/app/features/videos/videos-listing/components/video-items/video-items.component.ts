import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';
import { VideoItemComponent } from '../video-item/video-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-video-items',
  templateUrl: './video-items.component.html',
  styleUrls: ['./video-items.component.scss'],
  standalone: true,
  imports: [CommonModule, VideoItemComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemsComponent {
  @Input() videoItems: VideoListingItem[] = [];

  public trackVideos(_: number, video: VideoListingItem): number {
    return video.embeddedId;
  }
}
