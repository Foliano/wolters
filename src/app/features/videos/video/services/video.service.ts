import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoApi } from 'src/app/core/interfaces/video';

@Injectable()
export class VideoService {

  constructor(private _httpClient: HttpClient) { }

  getVideoDetails(videoId: string | null): Observable<VideoApi> {
    return this._httpClient.get<VideoApi>(`https://api.tvmaze.com/shows/${videoId}`);
  }
}
