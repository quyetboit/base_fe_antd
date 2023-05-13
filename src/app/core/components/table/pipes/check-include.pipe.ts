import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkInclude',
  standalone: true,
})
export class CheckIncludePipe implements PipeTransform {

  transform(list: any[], obj: any, uniqueField: string): boolean {
    return list.some(item => item[uniqueField] === obj[uniqueField]);
  }
}
