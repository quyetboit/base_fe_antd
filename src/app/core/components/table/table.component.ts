import { Component, ContentChildren, Input, Output, QueryList, ChangeDetectionStrategy, EventEmitter, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { TableImport } from './table.import';
import { ColumnDirective } from './directives/column.directive';
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
export class TableComponent implements OnChanges {
  @Input() dataSource: any[] = [];
  @Input() showNO = true;
  @Input() paginate: Pagination = new Pagination();
  @Input() showCheckbox = false;
  @Input() uniqueField = '';
  @Input() isLoading = false;
  @Input() listDataChecked: any[] = [];

  @Output() tableQueryChange = new EventEmitter<Pagination>();
  @Output() listDataCheckedChange = new EventEmitter<any[]>();;

  @ContentChildren(ColumnDirective, { read: ColumnDirective }) columns!: QueryList<ColumnDirective>;

  isCheckedAll = false;
  isIndeterminate = false;

  constructor(
    private cdf: ChangeDetectorRef,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource']) {
      this.updateChecked();
    }
  }

  handleCheckedAllChange(checkedAll: boolean) {
    this.isCheckedAll = checkedAll;
    if (checkedAll) {
      this.listDataChecked.push(...this.dataSource);
    }

    else {
      this.listDataChecked
        = this.listDataChecked.filter(item => {
          !this.dataSource.some(each => item[this.uniqueField] === each[this.uniqueField])
        });
    }

    this.listDataCheckedChange.emit(this.listDataChecked);
  }

  onCheckedSingleChange(isChecked: boolean, data: any) {
    if (isChecked) {
      this.listDataChecked.push(data);
    }

    else {
      this.listDataChecked = this.listDataChecked.filter(item => {
        return item[this.uniqueField] !== data[this.uniqueField]
      });
    }

    this.listDataCheckedChange.emit(this.listDataChecked);
    this.updateChecked();
  }

  updateChecked () {
    if (this.listDataChecked.length === 0) {
      this.isCheckedAll = false;
      this.isIndeterminate = false;
      return;
    }

    this.isCheckedAll
      = this.dataSource
        .every(item => {
          return this.listDataChecked.some(each => each[this.uniqueField] === item[this.uniqueField])
        });

    this.isIndeterminate
      = this.listDataChecked
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
