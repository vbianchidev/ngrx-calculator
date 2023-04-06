import { createAction, props } from '@ngrx/store';
import { MathOperator } from 'src/app/types/calc.type';

export const typeDigit = createAction(
  '[Calculator] Digit',
  props<{ digit: number }>()
);

export const typeOperator = createAction(
  '[Calculator] Operator',
  props<{ operator: MathOperator }>()
);

export const calculate = createAction('[Calculator] Calculate');

export const reset = createAction('[Calculator] Reset');
