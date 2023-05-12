import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[tableCell]',
  standalone: true
})
export class CellDirective {

  constructor( ) { }

}
