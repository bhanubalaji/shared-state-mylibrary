// projects/shared-state/src/lib/state/actions.ts
import { createAction, props } from '@ngrx/store';

export const updateSomeState = createAction(
  '[Shared] Update Some State',
  props<{ newValue: string }>()
);
