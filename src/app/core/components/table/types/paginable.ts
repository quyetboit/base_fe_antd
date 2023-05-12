export class Pagination {
  pageIndex: number;
  pageSize: number;
  totalRecord: number;

  constructor (
    pageIndex = 0,
    pageSize = 10,
    totalRecord = 0,
  ) {
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.totalRecord = totalRecord;
  }
}
