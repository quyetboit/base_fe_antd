export class Pagination {
  pageIndex: number;
  pageSize: number;
  totalRecord: number;
  sortKey: string;
  sortDirection: string;

  constructor (
    pageIndex = 0,
    pageSize = 10,
    totalRecord = 0,
    sortKey = '',
    sortDirection = '',
  ) {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.totalRecord = totalRecord;
    this.sortKey = sortKey;
    this.sortDirection = sortDirection;
  }
}
