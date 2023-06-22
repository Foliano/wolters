import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGenresComponent } from './video-genres.component';

describe('VideoGenresComponent', () => {
  let component: VideoGenresComponent;
  let fixture: ComponentFixture<VideoGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VideoGenresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
