// tslint:disable:no-console
import { APP_BASE_HREF } from '@angular/common';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const baseHref = document.getElementsByTagName('base')[0].getAttribute('href');

platformBrowserDynamic([
  { provide: APP_BASE_HREF, useValue: baseHref },
])
  .bootstrapModule(AppModule)
  .catch(error => console.error(error));
