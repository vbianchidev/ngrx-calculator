/* eslint-disable prettier/prettier */
import { createAction, props } from '@ngrx/store';
import { MathOperation } from 'src/app/types/calc.type';

export const add = createAction(
  '[Calculator] Add', 
  props<{ operation: MathOperation }>()
);

export const subtract = createAction(
  '[Calculator] Subtract',
  props<{ operation: MathOperation }>()
);

export const multiply = createAction(
  '[Calculator] Multiply',
  props<{ operation: MathOperation }>()
);

export const divide = createAction(
  '[Calculator] Divide',
  props<{ operation: MathOperation }>()
);

export const reset = createAction('[Calculator] Reset');
