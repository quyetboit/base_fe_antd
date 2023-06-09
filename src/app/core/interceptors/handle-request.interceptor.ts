import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  finalize,
  Observable,
  switchMap,
  take,
  tap,
  throwError
} from 'rxjs';

@Injectable()
export class HandleRequestInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const accessToken = JSON.parse(localStorage.getItem('user') || '')?.token;
    if (
      accessToken &&
      request.url.includes('api/') &&
      !request.headers.has('Authorization')
    ) {
      return this.addTokenToRequest(request, next, accessToken).pipe(
        catchError((error) => {
          // Handle errors
          return throwError(() => error);
        }),
      );
    }
    return next.handle(request);
  }

  private addTokenToRequest(
    request: HttpRequest<any>,
    next: HttpHandler,
    accessToken: string,
  ): Observable<HttpEvent<any>> {
    const headers = request.headers.set(
      'Authorization',
      `Bearer ${accessToken}`,
    );
    const reqClone = request.clone({
      headers,
    });
    return next.handle(reqClone);
  }
}
