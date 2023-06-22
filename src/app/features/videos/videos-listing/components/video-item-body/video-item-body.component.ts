import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';

@Component({
  selector: 'app-video-item-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-item-body.component.html',
  styleUrls: ['./video-item-body.component.scss']
})
export class VideoItemBodyComponent {
  @Input() videoItem!: VideoListingItem;
}
