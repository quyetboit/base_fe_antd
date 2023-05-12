import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { HeaderDirective } from './header.directive';
import { CellDirective } from './cell.directive';

@Directive({
  selector: 'table-column',
  standalone: true
})
export class ColumnDirective {
  @Input() header = '';
  @Input() field = '';
  @Input() sortField = '';
  @Input() sortable = false;
  @Input() align: 'left' | 'center' | 'right' = 'left';
  @Input() width = '';

  @ContentChild(HeaderDirective, { static: true, read: TemplateRef }) headerTemplate: TemplateRef<HeaderDirective> | null = null;
  @ContentChild(CellDirective, { static: true, read: TemplateRef }) cellTemplate: TemplateRef<CellDirective> | null = null;

  constructor() { }

}
