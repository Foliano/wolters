import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';

@Component({
  selector: 'app-video-item-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-item-image.component.html',
  styleUrls: ['./video-item-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoItemImageComponent {
  @Input() videoItem!: VideoListingItem;
}
