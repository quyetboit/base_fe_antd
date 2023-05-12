import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/core/components/table/table.component';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-show-table',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    CardComponent,
  ],
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent implements OnInit {

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
  }

}
