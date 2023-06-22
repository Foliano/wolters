import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mockVideo } from 'src/app/core/mocks/video.mock';
import { VideoDetailsComponent } from './video-details.component';

describe('VideoDetailsComponent', () => {
  let component: VideoDetailsComponent;
  let fixture: ComponentFixture<VideoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VideoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDetailsComponent);
    component = fixture.componentInstance;
    component.video = mockVideo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
