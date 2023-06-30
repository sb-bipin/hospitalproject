import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

import { AppModule } from './HomeApp/Homeapp.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
