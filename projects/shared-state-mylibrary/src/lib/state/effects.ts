// projects/shared-state/src/lib/state/effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { updateSomeState } from './actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  logStateChange$ = createEffect(
    () => this.actions$.pipe(
      ofType(updateSomeState),
      tap(action => console.log('State updated:', action.newValue))
    ),
    { dispatch: false }
  );
}
