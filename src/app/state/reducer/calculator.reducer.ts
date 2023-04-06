import { createReducer, on } from '@ngrx/store';

import {
  calculate,
  reset,
  typeDigit,
  typeOperator,
} from '../actions/calculator.actions';
import { MathOperator } from 'src/app/types/calc.type';

export const initialState: CalculatorState = {
  baseNumber: undefined,
  mutationNumber: undefined,
  result: undefined,
  operator: undefined,
};

export interface CalculatorState {
  baseNumber?: number;
  mutationNumber?: number;
  result?: number;
  operator?: MathOperator;
}

export const calculatorReducer = createReducer(
  initialState,

  on(typeDigit, (state, { digit }): CalculatorState => {
    if (!state.operator) {
      return {
        ...state,
        baseNumber: !state.baseNumber
          ? digit
          : DigitToInteger(state.baseNumber, digit),
      };
    }
    return {
      ...state,
      mutationNumber: !state.mutationNumber
        ? digit
        : DigitToInteger(state.mutationNumber, digit),
    };
  }),

  on(
    typeOperator,
    (state, { operator }): CalculatorState => ({
      ...state,
      operator: state.operator ? state.operator : operator,
    })
  ),

  on(
    calculate,
    (state): CalculatorState => ({
      ...state,
      result: Calculate(
        state.baseNumber as number,
        state.mutationNumber as number,
        state.operator as MathOperator
      ),
    })
  ),

  on(reset, (state): CalculatorState => initialState)
);

const DigitToInteger = (value: number, digit: number): number => {
  if (value === 0) return digit;
  return Number.parseInt(`${value}${digit}`);
};

const Calculate = (
  x: number,
  y: number,
  operator: MathOperator
): number | undefined => {
  if (operator === '+') return x + y;
  if (operator === '-') return x - y;
  if (operator === '*') return x * y;
  if (operator === '/') return y === 0 ? undefined : x / y;
  return undefined;
};
