import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HandleRequestInterceptor } from './handle-request.interceptor';

export const InterceptorConfig = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiPrefixInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HandleRequestInterceptor,
    multi: true,
  },
]
