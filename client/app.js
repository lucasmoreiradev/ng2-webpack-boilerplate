///<reference path="../typings/index.d.ts" />

import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/AppComponent';
if (module.hot) {
  module.hot.accept();
}
bootstrap(AppComponent);
