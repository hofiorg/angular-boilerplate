import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DateAdapter} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideMockStore} from '@ngrx/store/testing';
import {provideGermanDate} from './providers/german-date.provider';
import {NgxDatatableDblClickDirective} from './directive/ngx-datatable-doubleclick.directive';
import {FootnoteComponent} from './component/footer/footnote.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    provideGermanDate()
  ],
  imports: [RouterOutlet, NgxDatatableDblClickDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-boilerplate';

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('de');
  }
}

export const globalModules = [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatIconModule, MatButtonModule, MatTooltip, NgxDatatableModule, ReactiveFormsModule, FootnoteComponent];
export const globalProviders = [];

export const globalTestProviders = [
  provideHttpClient(withFetch()),
  provideAnimations(),
  provideMockStore(),
  provideGermanDate()
]
