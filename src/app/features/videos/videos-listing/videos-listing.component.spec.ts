import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { mockedVideoItems } from 'src/app/core/mocks/video-item.mock';
import { VideosActiveDateService } from './services/videos-active-date.service';
import { VideosListingService } from './services/videos-listing.service';
import { VideosListingComponent } from './videos-listing.component';

describe('VideosListingComponent', () => {
  let component: VideosListingComponent;
  let fixture: ComponentFixture<VideosListingComponent>;
  let videosListingService: VideosListingService;
  let videosActiveDateService: VideosActiveDateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosListingComponent, HttpClientTestingModule],
      providers: [
        VideosListingService,
        VideosActiveDateService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosListingComponent);
    component = fixture.componentInstance;
    videosListingService = TestBed.inject(VideosListingService);
    videosActiveDateService = TestBed.inject(VideosActiveDateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and set videos', fakeAsync(() => {
    const videos = mockedVideoItems;
    spyOn(videosListingService, 'getVideos').and.returnValue(of(videos));
    spyOn(videosActiveDateService.activeDate$, 'pipe').and.callThrough();
    videosActiveDateService.setActiveDate(new Date());
    component.ngOnInit();
    fixture.detectChanges();
    tick(200);
    expect(component.videos).toEqual(videos);
    expect(component.genres).toEqual(['Genre 1', 'Genre 2']);
    expect(component.loading$.getValue()).toBeFalsy();
    expect(videosListingService.getVideos).toHaveBeenCalled();
    expect(videosActiveDateService.activeDate$.pipe).toHaveBeenCalled();
  }));

  it('should filter videos by genre', () => {
    component.videos = mockedVideoItems;
    component.filterByGenre('Genre 1');
    expect(component.filteredVideos).toEqual([mockedVideoItems[0]]);
  });

  it('should clear filter', () => {
    component.videos = mockedVideoItems;
    component.filterByGenre('Genre 1');
    component.clearFilter();
    expect(component.filteredVideos).toEqual(mockedVideoItems);
  });
});
