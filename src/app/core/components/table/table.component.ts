import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableImport } from './table.import';
import { ColumnDirective } from './directives/column.directive';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: TableImport,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource: any[] = [];

  @ContentChildren(ColumnDirective) columns!: QueryList<ColumnDirective>;
}
