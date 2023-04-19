import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('vi');
    this.translateService.use('vi');
  }

  ngOnInit(): void {
  }

  setLanguge(language: string) {
    this.translateService.use(language)
  }

}
