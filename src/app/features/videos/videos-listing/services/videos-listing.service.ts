import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { VideoApiItem } from 'src/app/core/interfaces/video-api-item';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';

@Injectable()
export class VideosListingService {

  constructor(private httpClient: HttpClient) { }


  getVideos(date: string): Observable<any> {
    return this.httpClient.get<VideoApiItem[]>('https://api.tvmaze.com/schedule/web', {
      params: {
        country: 'US',
        date
      }
    }).pipe(
      map((videos: VideoApiItem[]): VideoListingItem[] => {
        return videos.map((video: VideoApiItem): VideoListingItem => {
          const { id, name, season, airstamp, image, summary, _embedded } = video;
          return {
            id,
            name,
            season,
            genres: _embedded.show.genres,
            embeddedId: _embedded.show.id,
            airstamp,
            image: image?.medium || 'https://thenounproject.com/api/private/icons/3473802/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0',
            summary
          }
        })
      })
    );
  }
}
