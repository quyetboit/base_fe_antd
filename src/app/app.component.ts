import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    NzButtonModule,
  ]
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
