import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  users: User[] = [
    { id: 1, name: 'Lê Văn Quyết 1', age: 22, birthdate: new Date(), address: 'Hà Nam 1' },
    { id: 2, name: 'Lê Văn Quyết 2', age: 22, birthdate: new Date(), address: 'Hà Nam 2' },
    { id: 3, name: 'Lê Văn Quyết 3', age: 22, birthdate: new Date(), address: 'Hà Nam 3' },
    { id: 4, name: 'Lê Văn Quyết 4', age: 22, birthdate: new Date(), address: 'Hà Nam 4' },
    { id: 5, name: 'Lê Văn Quyết 5', age: 22, birthdate: new Date(), address: 'Hà Nam 5' },
    { id: 6, name: 'Lê Văn Quyết 6', age: 22, birthdate: new Date(), address: 'Hà Nam 6' },
    { id: 7, name: 'Lê Văn Quyết 7', age: 22, birthdate: new Date(), address: 'Hà Nam 7' },
    { id: 8, name: 'Lê Văn Quyết 8', age: 22, birthdate: new Date(), address: 'Hà Nam 8' },
    { id: 9, name: 'Lê Văn Quyết 9', age: 22, birthdate: new Date(), address: 'Hà Nam 9' },
    { id: 10, name: 'Lê Văn Quyết 10', age: 22, birthdate: new Date(), address: 'Hà Nam 10' },
    { id: 11, name: 'Lê Văn Quyết 11', age: 22, birthdate: new Date(), address: 'Hà Nam 11' },
    { id: 12, name: 'Lê Văn Quyết 12', age: 22, birthdate: new Date(), address: 'Hà Nam 12' },
    { id: 13, name: 'Lê Văn Quyết 13', age: 22, birthdate: new Date(), address: 'Hà Nam 13' },
    { id: 14, name: 'Lê Văn Quyết 14', age: 22, birthdate: new Date(), address: 'Hà Nam 14' },
    { id: 15, name: 'Lê Văn Quyết 15', age: 22, birthdate: new Date(), address: 'Hà Nam 15' },
  ]

  constructor() { }

  getUser (
    page = 0,
    size = 10,
  ) {
    const result = this.users.slice(page * size, page * size + size);
    return of (result).pipe(delay(2000));
  }
}

export interface User {
  id: number,
  name: string,
  age: number,
  birthdate: Date,
  address: string,
}
