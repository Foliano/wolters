import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';
import { mockedVideoItems } from 'src/app/core/mocks/video-item.mock';
import { VideoItemsComponent } from './video-items.component';

@Component({
  selector: 'app-video-item',
  template: ''
})
class MockVideoItemComponent {
  @Input() videoItem!: VideoListingItem;
}

describe('VideoItemsComponent', () => {
  let component: VideoItemsComponent;
  let fixture: ComponentFixture<VideoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RouterModule, VideoItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use trackVideos function for tracking the video items', () => {
  
    const result = component.trackVideos(0, mockedVideoItems[0]);
    expect(result).toBe(mockedVideoItems[0].embeddedId);
  });
});
