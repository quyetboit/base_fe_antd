import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { importProvidersFrom } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NZ_I18N, vi_VN } from "ng-zorro-antd/i18n";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { registerLocaleData } from "@angular/common";
import vi from "@angular/common/locales/vi";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideRouter } from "@angular/router";
import { APP_ROUTES } from "./app/app.routing";
import { InterceptorConfig } from "./app/core/interceptors";

registerLocaleData(vi);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    provideRouter(APP_ROUTES),
    importProvidersFrom([
      HttpClientModule,
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }),
    ]),
    ...InterceptorConfig,
  ]
})
