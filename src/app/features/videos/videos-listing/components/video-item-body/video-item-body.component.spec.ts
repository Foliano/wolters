import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoItemBodyComponent } from './video-item-body.component';
import { mockedVideoItems } from 'src/app/core/mocks/video-item.mock';

describe('VideoItemBodyComponent', () => {
  let component: VideoItemBodyComponent;
  let fixture: ComponentFixture<VideoItemBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VideoItemBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoItemBodyComponent);
    component = fixture.componentInstance;
    component.videoItem = mockedVideoItems[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
