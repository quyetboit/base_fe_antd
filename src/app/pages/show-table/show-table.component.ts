import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { TranslateService } from '@ngx-translate/core';
import { TableCommonModule } from 'src/app/core/components/table';
import { Pagination } from 'src/app/core/components/table/types/paginable';
import { MockDataService, User } from 'src/app/mock/mock-data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-show-table',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TableCommonModule,
  ],
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss'],
})
export class ShowTableComponent implements OnInit {

  dataSource: User[] = [];
  paginate = new Pagination();
  isLoading = false;

  constructor (
    private breadcrumbService: BreadcrumbService,
    private translate: TranslateService,
    private mockData: MockDataService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumb([
      {
        title: this.translate.instant('show_table.title'),
        router: '/admin/show-table',
        isDisable: true,
      }
    ])
  }

  getData() {
    this.isLoading = true;

    this.mockData
      .getUser(
        this.paginate.pageIndex,
        this.paginate.pageSize,
      )
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe((users) => {
        this.dataSource = users;
        this.paginate.totalRecord = this.mockData.users.length;
      })
  }

  onTableQueryChange(data: Pagination) {
    this.getData();
  }
}
