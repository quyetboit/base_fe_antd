import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { NzI18nService, en_US, vi_VN } from 'ng-zorro-antd/i18n';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private translateService: TranslateService,
    private i18nService: NzI18nService,
  ) { }

  setLanguge(language: string) {
    this.translateService.use(language);
    if (language === 'vi') {
      this.i18nService.setLocale(vi_VN);
    } else {
      this.i18nService.setLocale(en_US);
    }
  }
}
