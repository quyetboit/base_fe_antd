import { Component, ContentChildren, Input, Output, QueryList, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { TableImport } from './table.import';
import { ColumnDirective } from './directives/column.directive';
import { BehaviorSubject } from 'rxjs';
import { TableQueryParamsChange } from './types/table-query-params-change.interface';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Pagination } from './types/paginable';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: TableImport,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() showNO = true;
  @Input() paginate: Pagination = new Pagination();

  @Output() tableQueryChange = new EventEmitter<TableQueryParamsChange>();

  @ContentChildren(ColumnDirective, { read: ColumnDirective }) columns!: QueryList<ColumnDirective>;

  sort: { key: string, direction: string } = {
    key: '',
    direction: '',
  }

  onSortOrderChange(field: string, direction: string | null) {
    this.sort = {
      key: field,
      direction: direction || 'ascend'
    }
  }

  onQueryParamChange(queryParams: NzTableQueryParams) {
    this.tableQueryChange.emit({
      pageIndex: queryParams.pageIndex,
      pageSize: queryParams.pageSize,
      sortField: this.sort.key,
      sortDirection: this.sort.direction,
    })
  }

  onPageIndexChange (index: number) {
    console.log({index});
  }

  onPageSizeChange (size: number) {
    console.log({size});

  }
}
