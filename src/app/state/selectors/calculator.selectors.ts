import { createSelector } from '@ngrx/store';
import { CalculatorState } from '../reducer/calculator.reducer';

export const selectCalculatorState = (state: { calculator: CalculatorState }) =>
  state.calculator;

export const selectBaseNumber = createSelector(
  selectCalculatorState,
  (state: CalculatorState) => state.baseNumber
);

export const selectMutationNumber = createSelector(
  selectCalculatorState,
  (state: CalculatorState) => state.mutationNumber
);

export const selectResult = createSelector(
  selectCalculatorState,
  (state: CalculatorState) => state.result
);

export const selectOperator = createSelector(
  selectCalculatorState,
  (state: CalculatorState) => state.operator
);
