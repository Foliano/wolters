import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mockedVideoItems } from 'src/app/core/mocks/video-item.mock';
import { VideoItemComponent } from './video-item.component';

describe('VideoItemComponent', () => {
  let component: VideoItemComponent;
  let fixture: ComponentFixture<VideoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, VideoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoItemComponent);
    component = fixture.componentInstance;
    component.videoItem = mockedVideoItems[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the videoItem input correctly', () => {
    expect(component.videoItem).toEqual(mockedVideoItems[0]);
  });

});
