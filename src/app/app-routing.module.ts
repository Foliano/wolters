import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'video',
    loadChildren: () =>
    import('./features/videos/videos.module').then(
      (m) => m.VideosModule
    ),
  },
  {
    path: '**',
    redirectTo: 'video'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
