import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideState, provideStore} from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {DEMO_FEATURE_KEY} from './store/demo/demo.state';
import {demoReducer} from './store/demo/demo.reducer';
import {DemoEffects} from './store/demo/demo.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
    provideStore(),
    provideState({ name: DEMO_FEATURE_KEY, reducer: demoReducer }),
    provideEffects(DemoEffects)
]
};
