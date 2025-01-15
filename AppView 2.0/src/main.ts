import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { appConfig } from './app/app.config';


platformBrowserDynamic().bootstrapModule(AppModule, appConfig)
  .catch(err => console.error(err));
