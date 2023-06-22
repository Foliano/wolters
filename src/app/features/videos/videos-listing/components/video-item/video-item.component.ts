import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';
import { VideoItemBodyComponent } from '../video-item-body/video-item-body.component';
import { VideoItemImageComponent } from '../video-item-image/video-item-image.component';

@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [CommonModule, VideoItemBodyComponent, VideoItemImageComponent],
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemComponent {
  @Input() videoItem!: VideoListingItem;
}
