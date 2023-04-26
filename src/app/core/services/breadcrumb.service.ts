import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Breadcrumb } from '../models/interfaces/breakcrumb.interface';

@Injectable({
  providedIn: 'root',
})

export class BreadcrumbService {
  private readonly breadcrumb = new BehaviorSubject<Breadcrumb[]>([]);
  constructor() {}

  get breadcrumb$ (): Observable<Breadcrumb[]> {
    return this.breadcrumb.asObservable();
  }

  setBreadcrumb(data: Breadcrumb[]) {
    this.breadcrumb.next(data);
  }
}
