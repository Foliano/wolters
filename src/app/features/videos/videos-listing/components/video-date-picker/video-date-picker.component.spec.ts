import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideosActiveDateService } from '../../services/videos-active-date.service';
import { VideoDatePickerComponent } from './video-date-picker.component';

describe('VideoDatePickerComponent', () => {
  let component: VideoDatePickerComponent;
  let fixture: ComponentFixture<VideoDatePickerComponent>;
  let videosActiveDateService: VideosActiveDateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDatePickerComponent],
      providers: [VideosActiveDateService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDatePickerComponent);
    component = fixture.componentInstance;
    videosActiveDateService = TestBed.inject(VideosActiveDateService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set active date when calling videos fn', () => {
    const setActiveDateSpy = spyOn(videosActiveDateService, 'setActiveDate');
    const dateValue = '2023-06-21';
    const inputElement: HTMLInputElement = document.createElement('input');
    inputElement.value = dateValue;
    const event = { target: inputElement } as unknown as Event;
    component.getVideos(event);
    expect(setActiveDateSpy).toHaveBeenCalledWith(new Date(dateValue));
  });

  it('should show an alert when calling getVideos with empty value', () => {
    const alertSpy = spyOn(window, 'alert');
    const setActiveDateSpy = spyOn(videosActiveDateService, 'setActiveDate');
    const inputElement: HTMLInputElement = document.createElement('input');
    inputElement.value = '';
    const event = { target: inputElement } as unknown as Event;
    component.getVideos(event);
    expect(alertSpy).toHaveBeenCalledWith('Ej no, nie usuwaj');
    expect(setActiveDateSpy).not.toHaveBeenCalled();
  });

});
