import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { VideoApiItem } from 'src/app/core/interfaces/video-api-item';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';
import { VideosListingService } from './videos-listing.service';

describe('VideosListingService', () => {
  let service: VideosListingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideosListingService]
    });

    service = TestBed.inject(VideosListingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve videos successfully', () => {
    const date = '2023-06-21';

    const mockResponse: VideoApiItem[] = [];

    const expectedMappedResponse: VideoListingItem[] = [];

    service.getVideos(date).subscribe((videos: any) => {
      expect(videos).toEqual(expectedMappedResponse);
    });

    const request = httpMock.expectOne(`https://api.tvmaze.com/schedule/web?country=US&date=${date}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  it('should handle errors when retrieving videos', () => {
    const date = '2023-06-21';

    service.getVideos(date).subscribe(
      () => {
        fail('Expected an error, but the request succeeded');
      },
      (error: any) => {
        expect(error).toBeTruthy();
      }
    );

    const request = httpMock.expectOne(`https://api.tvmaze.com/schedule/web?country=US&date=${date}`);
    expect(request.request.method).toBe('GET');
    request.error(new ErrorEvent('Network error'));
  });
});
