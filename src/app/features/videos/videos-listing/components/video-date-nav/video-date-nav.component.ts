import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-date-nav',
  templateUrl: './video-date-nav.component.html',
  styleUrls: ['./video-date-nav.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class VideoDateNavComponent {
  @Input() navText!: string;
  @Output() changeDay$ = new EventEmitter();

  public changeDay() {
    this.changeDay$.emit();
  }
}
