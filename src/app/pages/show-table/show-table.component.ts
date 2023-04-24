import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/core/components/table/table.component';
import { CardComponent } from 'src/app/core/components/card/card.component';

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
export class ShowTableComponent {

}
