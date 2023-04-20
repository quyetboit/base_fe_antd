import { Injector } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Menu } from "../models/interfaces/menu.interface";

const injector = Injector.create({providers: [{provide: TranslateService, useClass: TranslateService}]});
const translate = injector.get(TranslateService);

export const MENU: Menu[] = [
  {
    label: translate.instant('menu.show_case'),
    route: '/show-case',
    isActive: false,
    hasChildren: true,
  }
]
