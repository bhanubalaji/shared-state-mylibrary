// projects/shared-state/src/lib/state/state.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './state/reducers';
import { AppEffects } from './state/effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects])
  ],
  exports: [
    StoreModule,
    EffectsModule
  ]
})
export class StateModule {}
