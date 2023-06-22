import { Injectable } from '@angular/core';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError, timer } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptorService {
  private interceptCounter = 0;

  private async showLoading(): Promise<void> {
    ++this.interceptCounter;
    if (this.interceptCounter === 1) {
      document.body.classList.add('onLoading');
    }
  }

  private howLongLoader(): void {
    timer(200).subscribe(() => {
      --this.interceptCounter;
      if (this.interceptCounter > 0) {
        return;
      }
      document.body.classList.remove('onLoading');
      this.interceptCounter = 0;
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.showLoading();

    const request = req.clone();

    return next.handle(request).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          this.howLongLoader();
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.howLongLoader();
        return throwError(error);
      })
    );
  }
}
