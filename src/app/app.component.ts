import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService, en_US, vi_VN } from 'ng-zorro-antd/i18n';
import { APP_IMPORT } from './app.import';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: APP_IMPORT,
})
export class AppComponent implements OnInit {
  isOpenSidebar = true;

  constructor (
    private translateService: TranslateService,
  ) {
    this.translateService.setDefaultLang('vi');
  }

  ngOnInit(): void {

  }

}
