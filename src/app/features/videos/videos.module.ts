import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from 'src/app/core/header/header.component';
import { VideosActiveDateService } from './videos-listing/services/videos-active-date.service';
import { VideosListingService } from './videos-listing/services/videos-listing.service';
import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';

@NgModule({
  declarations: [
    VideosComponent,
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    HeaderComponent
  ],
  providers: [
    VideosListingService,
    VideosActiveDateService,
    DatePipe
  ]
})
export class VideosModule { }
