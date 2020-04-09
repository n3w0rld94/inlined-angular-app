import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

if (!window['angulr-app-started-already']) {
  console.log("Bootstrapped")
  window['angulr-app-started-already'] = true;
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
}