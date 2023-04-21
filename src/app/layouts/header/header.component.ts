import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HEADER_IMPORT } from './header.import';
import { LANGUAGE_ENUM } from 'src/app/core/models/enums/language.enum';
import { AuthService } from 'src/app/services/auth.service';
import { COUNTRYS } from 'src/app/configs/country.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: HEADER_IMPORT,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isOpenSidebar = true;
  @Output() isOpenSidebarChange = new EventEmitter<boolean>();

  LANGUAGE_ENUM = LANGUAGE_ENUM;
  COUNTRYS = COUNTRYS;

  constructor (
    private authService: AuthService,
  ) {}

  toggleSidebar(isOpenSiderbar: boolean) {
    this.isOpenSidebarChange.emit(isOpenSiderbar);
  }

  changeLanguage(lang: LANGUAGE_ENUM) {
    this.authService.setLanguge(lang);
  }
}
