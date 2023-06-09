import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  private readonly baseUrl = environment.baseUrl;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('http')) {
      const reqClone = req.clone({
        url: `${this.baseUrl}/${req.url}`,
      });
      return next.handle(reqClone);
    }
    return next.handle(req);
  }
}
