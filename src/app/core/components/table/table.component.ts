import { Component, ContentChildren, Input, Output, QueryList, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { TableImport } from './table.import';
import { ColumnDirective } from './directives/column.directive';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Pagination } from './types/paginable';
import { difference, isEqual } from 'lodash';

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
  @Input() showCheckbox = false;
  @Input() uniqueField = '';

  @Output() tableQueryChange = new EventEmitter<Pagination>();

  @ContentChildren(ColumnDirective, { read: ColumnDirective }) columns!: QueryList<ColumnDirective>;

  isCheckedAll = false;
  isIndeterminate = false;
  listCheckedChange: any[] = [];

  handleCheckedAllChange(checkedAll: boolean) {
    if (checkedAll) {
      this.listCheckedChange.push(...this.dataSource);
      this.listCheckedChange = [...this.listCheckedChange];
    }

    else {
      this.listCheckedChange
        = this.listCheckedChange.filter(item => {
          !this.dataSource.some(each => item[this.uniqueField] === each[this.uniqueField])
        });
    }
  }

  onCheckedSingleChange(isChecked: boolean, data: any) {
    if (isChecked) {
      this.listCheckedChange.push(data);
    }

    else {
      this.listCheckedChange.filter(item => {
        console.log({item, data});

        return item[this.uniqueField] !== data[this.uniqueField]
      });
    }

    console.log('New data: ', this.listCheckedChange)

    this.refreshCheckedAllStatus();
  }

  refreshCheckedAllStatus () {
    if (this.listCheckedChange.length === 0) {
      this.isCheckedAll = false;
      this.isIndeterminate = false;
      console.log('Return here')
      return;
    }

    this.isCheckedAll
      = this.listCheckedChange
        .every(item => {
          return this.dataSource.some(each => each[this.uniqueField] === item[this.uniqueField])
        });

    this.isIndeterminate
      = this.listCheckedChange
        .some(item => {
          return this.dataSource.some(each => each[this.uniqueField] === item[this.uniqueField])
        });
  }

  onQueryParamChange(queryParams: NzTableQueryParams) {
    const currentFieldSort = queryParams.sort.find(item => !!item.value);

    if (currentFieldSort) {
      this.paginate.sortKey = currentFieldSort.key;
      this.paginate.sortDirection = currentFieldSort.value || 'descend';
    }

    this.tableQueryChange.emit(this.paginate);
  }

  onPageIndexChange (index: number) {
    this.paginate.pageIndex = index - 1;
    this.tableQueryChange.emit(this.paginate);
  }

  onPageSizeChange (size: number) {
    this.paginate.pageSize = size;
    this.tableQueryChange.emit(this.paginate);
  }
}
