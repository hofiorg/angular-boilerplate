import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DateFnsAdapter, MAT_DATE_FNS_FORMATS, provideDateFnsAdapter} from '@angular/material-date-fns-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'de-DE' },
    { provide: DateAdapter, useClass: DateFnsAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS },

    // date-fns can be provided globally to your app by adding `provideDateFnsAdapter`
    // to your app config. We provide it at the component level here, due to limitations
    // of our example generation script.
    provideDateFnsAdapter(),
  ],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-boilerplate';

  constructor(private _adapter: DateAdapter<any>) {
    this._adapter.setLocale('de');
  }

}

export const globalModules = [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule];
export const globalProviders = [provideNativeDateAdapter()];
