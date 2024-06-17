import { ApplicationConfig, provideZoneChangeDetection, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { jwtInterceptor } from './utils/jwt.interceptor';
import { JwtModule } from '@auth0/angular-jwt';

export const appConfig: ApplicationConfig = {
  providers: [  
    provideHttpClient(withInterceptors([jwtInterceptor])),
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
            tokenGetter: tokenGetter,
            // allowedDomains: ["example.com"]
        },
    }),
    ),
    provideRouter(routes),
    /*provideHttpClient(), 
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)*/]
};

export function tokenGetter() {
  return localStorage.getItem("access_token");
}
