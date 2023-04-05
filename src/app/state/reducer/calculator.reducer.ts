import { createReducer, on } from '@ngrx/store';
import {
  add,
  divide,
  multiply,
  reset,
  subtract,
} from '../actions/calculator.actions';

export interface CalculatorState {
  result: number;
}

export const initialState: CalculatorState = {
  result: 0,
};

export const calculatorReducer = createReducer(
  initialState,
  on(
    add,
    (state, { operation }): CalculatorState => ({
      result: state.result + (operation.base + operation.mutation),
    })
  ),
  on(
    subtract,
    (state, { operation }): CalculatorState => ({
      result: state.result - (operation.base + operation.mutation),
    })
  ),
  on(
    multiply,
    (state, { operation }): CalculatorState => ({
      result: state.result * (operation.base * operation.mutation),
    })
  ),
  on(
    divide,
    (state, { operation }): CalculatorState => ({
      result: state.result / (operation.base / operation.mutation),
    })
  ),
  on(reset, (): CalculatorState => initialState)
);
