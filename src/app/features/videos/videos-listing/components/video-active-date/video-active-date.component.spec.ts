import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideosActiveDateService } from '../../services/videos-active-date.service';
import { VideoActiveDateComponent } from './video-active-date.component';

describe('VideoActiveDateComponent', () => {
  let component: VideoActiveDateComponent;
  let fixture: ComponentFixture<VideoActiveDateComponent>;
  let videosActiveDateService: VideosActiveDateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoActiveDateComponent],
      providers: [VideosActiveDateService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoActiveDateComponent);
    component = fixture.componentInstance;
    videosActiveDateService = TestBed.inject(VideosActiveDateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call changeByDay method of videosActiveDateService with -1', () => {
    spyOn(videosActiveDateService, 'changeByDay');
    component.changeDay(-1);
    expect(videosActiveDateService.changeByDay).toHaveBeenCalledWith(-1);
  });

  it('should call changeByDay method of videosActiveDateService with 1', () => {
    spyOn(videosActiveDateService, 'changeByDay');
    component.changeDay(1);
    expect(videosActiveDateService.changeByDay).toHaveBeenCalledWith(1);
  });
});
