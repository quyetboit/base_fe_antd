import { CommonModule } from "@angular/common";
import { CellDirective } from "./directives/cell.directive";
import { ColumnDirective } from "./directives/column.directive";
import { HeaderDirective } from "./directives/header.directive";
import { NzTableModule } from "ng-zorro-antd/table";
import { TranslateModule } from "@ngx-translate/core";
import { NzPaginationModule } from "ng-zorro-antd/pagination";
import { CheckIncludePipe } from "./pipes/check-include.pipe";

export const TableImport = [
  ColumnDirective,
  HeaderDirective,
  CellDirective,

  CommonModule,
  NzTableModule,
  NzPaginationModule,
  TranslateModule,
  CheckIncludePipe,
]
