import { createSelector } from '@ngrx/store';
import { State } from './reducers'; // Adjust import path as necessary

// Define the feature state selector
export const selectFeatureState = (state: any): State => {
  console.log('selectFeatureState:', state);
  return state.someFeature; // Adjust 'someFeature' to match your feature key
};

// Create the selector to get the 'someState' property
export const selectSomeState = createSelector(
  selectFeatureState,
  (state: State) => {
    console.log('selectSomeState:', state);
    return state.someState;
  }
);
