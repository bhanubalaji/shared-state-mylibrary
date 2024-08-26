// projects/shared-state/src/lib/state/reducers.ts
import { createReducer, on } from '@ngrx/store';
import { updateSomeState } from './actions';

export interface State {
  someState: string;
}

export const initialState: State = {
  someState: ''
};

const _appReducer = createReducer(
  initialState,
  on(updateSomeState, (state, { newValue }) => ({ ...state, someState: newValue }))
);

export function appReducer(state: State | undefined, action: any) {
  return _appReducer(state, action);
}
