import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoItemImageComponent } from './video-item-image.component';
import { mockedVideoItems } from 'src/app/core/mocks/video-item.mock';

describe('VideoItemImageComponent', () => {
  let component: VideoItemImageComponent;
  let fixture: ComponentFixture<VideoItemImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VideoItemImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoItemImageComponent);
    component = fixture.componentInstance;
    component.videoItem = mockedVideoItems[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
