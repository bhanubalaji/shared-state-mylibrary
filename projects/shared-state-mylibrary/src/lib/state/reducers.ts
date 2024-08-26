// projects/shared-state/src/lib/state/reducers.ts
import { createReducer, on } from '@ngrx/store';
import { updateSomeState } from './actions';

export interface State {
  someState: string;
}

export const initialState: State = {
  someState: 'test'
};

const _appReducer = createReducer(
  initialState,
  on(updateSomeState, (state, { newValue }) => {
    // Log the newValue for debugging purposes
    console.log('State updated with newValue:', newValue);
    
    // Return the updated state with the new value
    return { ...state, someState: newValue };
  })
);

export function appReducer(state: State | undefined, action: any) {
  return _appReducer(state, action);
}
