import { Component } from '@angular/core';
import { SIDEBAR_IMPORT } from './sidebar.import';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: SIDEBAR_IMPORT,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}
