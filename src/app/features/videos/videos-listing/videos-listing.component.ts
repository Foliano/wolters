import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, catchError, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { VideoListingItem } from 'src/app/core/interfaces/video-listing-item';
import { VideoActiveDateComponent } from './components/video-active-date/video-active-date.component';
import { VideoGenresComponent } from './components/video-genres/video-genres.component';
import { VideoItemComponent } from './components/video-item/video-item.component';
import { VideoItemsComponent } from './components/video-items/video-items.component';
import { VideosActiveDateService } from './services/videos-active-date.service';
import { VideosListingService } from './services/videos-listing.service';

@Component({
  selector: 'app-videos-listing',
  standalone: true,
  imports: [CommonModule, VideoItemComponent, FormsModule, RouterModule, VideoActiveDateComponent, VideoItemsComponent, VideoGenresComponent],
  templateUrl: './videos-listing.component.html',
  styleUrls: ['./videos-listing.component.scss'],
})
export class VideosListingComponent implements OnInit {

  videos: VideoListingItem[] = [];
  filteredVideos: any[] = [];
  genres: string[] = [];
  loading$ = new BehaviorSubject(false);

  constructor(
    private videosListingService: VideosListingService,
    private videosActiveDateService: VideosActiveDateService
  ) {}

  ngOnInit() {
    this._observeDate();
  }

  private _observeDate() {
    this.videosActiveDateService.activeDate$.pipe(
      distinctUntilChanged(),
      debounceTime(100),
      tap(() => this.loading$.next(true)),
      switchMap((selectedDate) => this.videosListingService.getVideos(selectedDate)),
      catchError(() => {
        return of([]);
      })
    ).subscribe({
      next: this._setVideos.bind(this)
    })
  }

  private _setVideos(videos: VideoListingItem[]) {
    this.videos = videos;
    this.clearFilter();
    this.genres = Array.from(new Set(videos.flatMap((item: VideoListingItem) => item.genres)));
    this.loading$.next(false);
  }

  filterByGenre(genre: string) {
    this.filteredVideos = this.videos.filter((show: any) => show.genres.includes(genre));
  }

  clearFilter() {
    this.filteredVideos = this.videos;
  }

}
