import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos.component';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent,
    children: [
      {
        path: '',
        title: 'Listing video',
        loadComponent: () => import('./videos-listing/videos-listing.component').then((c) => c.VideosListingComponent),
      },
      {
        path: 'details/:videoId',
        title: 'Video - szczegóły',
        loadComponent: () => import('./video/video.component').then((c) => c.VideoComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
