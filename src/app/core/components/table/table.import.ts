import { CommonModule } from "@angular/common";
import { CellDirective } from "./directives/cell.directive";
import { ColumnDirective } from "./directives/column.directive";
import { HeaderDirective } from "./directives/header.directive";
import { NzTableModule } from "ng-zorro-antd/table";

export const TableImport = [
  ColumnDirective,
  HeaderDirective,
  CellDirective,

  CommonModule,
  NzTableModule,
]
