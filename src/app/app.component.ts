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
  constructor (
    private translateService: TranslateService,
    private i18nService: NzI18nService,
  ) {
    this.translateService.setDefaultLang('vi');
    this.translateService.use('vi');
  }

  ngOnInit(): void {

  }

  setLanguge(language: string) {
    this.translateService.use(language);
    if (language === 'vi') {
      this.i18nService.setLocale(vi_VN);
    } else {
      this.i18nService.setLocale(en_US);
    }
  }

}
