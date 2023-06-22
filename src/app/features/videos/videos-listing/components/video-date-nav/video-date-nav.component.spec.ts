import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoDateNavComponent } from './video-date-nav.component';

describe('VideoDateNavComponent', () => {
  let component: VideoDateNavComponent;
  let fixture: ComponentFixture<VideoDateNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDateNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit changeDay event when changeDay method is called', () => {
    spyOn(component.changeDay$, 'emit');
  
    component.changeDay();
  
    expect(component.changeDay$.emit).toHaveBeenCalled();
  });
  
});
