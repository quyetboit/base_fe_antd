import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { TranslateService } from '@ngx-translate/core';
import { TableCommonModule } from 'src/app/core/components/table';
import { Pagination } from 'src/app/core/components/table/types/paginable';
import { TableQueryParamsChange } from 'src/app/core/components/table/types/table-query-params-change.interface';

@Component({
  selector: 'app-show-table',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    TableCommonModule,
  ],
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent implements OnInit {

  dataSource = [
    { stt: 1, name: 'Lê Văn Quyết', age: 22, address: 'Ha Noi' },
    { stt: 1, name: 'Lê Văn Quyết', age: 22, address: 'Ha Noi' },
    { stt: 1, name: 'Lê Văn Quyết', age: 22, address: 'Ha Noi' },
    { stt: 1, name: 'Lê Văn Quyết', age: 22, address: 'Ha Noi' },
    { stt: 1, name: 'Lê Văn Quyết', age: 22, address: 'Ha Noi' },
  ]

  paginate = new Pagination();

  constructor (
    private breadcrumbService: BreadcrumbService,
    private translate: TranslateService,
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.setBreadcrumb([
      {
        title: this.translate.instant('show_table.title'),
        router: '/admin/show-table',
        isDisable: true,
      }
    ])

    this.paginate.totalRecord = 93;
  }

  onTableQueryChange(data: TableQueryParamsChange) {
    console.log('Data: ', data)
  }
}
