import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-video-genres',
  templateUrl: './video-genres.component.html',
  styleUrls: ['./video-genres.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoGenresComponent {
  @Input() genres: string[] = [];
  @Output() clearFilter$ = new EventEmitter<void>();
  @Output() filterByGenre$ = new EventEmitter<string>();

  activeGenre!: string;

  clearFilter() {
    this.activeGenre = '';
    this.clearFilter$.emit();
  }

  filterByGenre(genre: string) {
    this.activeGenre = genre;
    this.filterByGenre$.emit(genre);
  }
}
