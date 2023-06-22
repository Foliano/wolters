import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class VideosActiveDateService {

  private readonly _activeDate$: BehaviorSubject<string> = new BehaviorSubject(this._formatDate(new Date()));

  get activeDate$(): BehaviorSubject<string> {
    return this._activeDate$;
  }

  setActiveDate(date: Date) {
    this._activeDate$.next(this._formatDate(date));
  }

  constructor() { }

  private _formatDate(date: Date): string {
    return date.toISOString().slice(0, 10);
  }

  changeByDay(day: -1 | 1) {
    const date = new Date(this.activeDate$.value);
    const formattedDate = this._formatDate(new Date(date.setDate(date.getDate() + day)));
    this._activeDate$.next(formattedDate);
  }
}
