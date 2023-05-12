import { CellDirective } from './directives/cell.directive';
import { ColumnDirective } from './directives/column.directive';
import { HeaderDirective } from './directives/header.directive';
import { TableComponent } from './table.component';

export * from './directives/cell.directive';
export * from './directives/column.directive';
export * from './directives/header.directive';
export * from './table.component';

export const TableCommonModule = [CellDirective, HeaderDirective, ColumnDirective, TableComponent]
