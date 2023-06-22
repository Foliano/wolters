import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { VideoService } from './video.service';
import { VideoApi } from 'src/app/core/interfaces/video';
import { of } from 'rxjs';
import { mockVideo } from 'src/app/core/mocks/video.mock';
import { HttpErrorResponse } from '@angular/common/http';

describe('VideoService', () => {
  let service: VideoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VideoService]
    });
    service = TestBed.inject(VideoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve video details', () => {
    const videoId = '123';
    const mockResponse: VideoApi = mockVideo;

    service.getVideoDetails(videoId).subscribe((response: VideoApi) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`https://api.tvmaze.com/shows/${videoId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should handle error when retrieving video details', () => {
    const videoId = '123';
    const errorMessage = 'Error retrieving video details.';

    service.getVideoDetails(videoId).subscribe(
      () => fail('The request should have failed.'),
      (error: any) => {
        expect(error).toBeInstanceOf(HttpErrorResponse);
      }
    );

    const req = httpTestingController.expectOne(`https://api.tvmaze.com/shows/${videoId}`);
    expect(req.request.method).toEqual('GET');
    req.error(new ErrorEvent('Network error', { message: errorMessage }));
  });
});
