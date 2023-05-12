import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkInclude',
  standalone: true
})
export class CheckIncludePipe implements PipeTransform {

  transform(obj: any, list: any[], uniqueField: string): boolean {
    console.log({obj, list, uniqueField})
    return list.some(item => item[uniqueField] === obj[uniqueField]);
  }
}
