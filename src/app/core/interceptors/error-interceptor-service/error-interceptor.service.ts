import { Injectable } from '@angular/core';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptorService {

  constructor(
    private _router: Router
  ) {}


  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const request = req.clone();

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (!(error instanceof HttpErrorResponse)) {
          return throwError(error);
        }
        if (error.status == 404) {
          alert('Nie znaleziono');
          this._router.navigateByUrl('/video');
        } else if (error.status == 500) {
          alert('Błąd serwera. Spróbuj ponownie później');
        }
        return throwError(error);
      })
    );
  }
}
