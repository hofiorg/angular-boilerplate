import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {DEMO_FEATURE_KEY} from './demo.state';
import {demoReducer} from './demo.reducer';
import {DemoFacade} from './demo.facade';
import {EffectsModule} from '@ngrx/effects';
import {DemoEffects} from './demo.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(DEMO_FEATURE_KEY, demoReducer),
    EffectsModule.forFeature([DemoEffects]) //
  ],
  providers: [DemoFacade]
})
export class DemoModule {}
