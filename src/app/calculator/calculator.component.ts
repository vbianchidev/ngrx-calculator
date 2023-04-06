/* eslint-disable @ngrx/no-typed-global-store */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  calculate,
  reset,
  typeDigit,
  typeOperator,
} from '../state/actions/calculator.actions';
import {
  selectBaseNumber,
  selectMutationNumber,
  selectOperator,
  selectResult,
} from '../state/selectors/calculator.selectors';
import { CalculatorState } from '../state/reducer/calculator.reducer';
import { MathOperator } from '../types/calc.type';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  baseNumber$: Observable<number | undefined>;
  mutationNumber$!: Observable<number | undefined>;
  operator$!: Observable<MathOperator | undefined>;
  result$!: Observable<number | undefined>;

  constructor(private store: Store<{ calculator: CalculatorState }>) {
    this.baseNumber$ = store.select(selectBaseNumber);
    this.mutationNumber$ = store.select(selectMutationNumber);
    this.operator$ = store.select(selectOperator);
    this.result$ = store.select(selectResult);
  }

  onTypeNumber(digit: number) {
    this.store.dispatch(typeDigit({ digit }));
  }

  onTypeOperator(operator: MathOperator) {
    this.store.dispatch(typeOperator({ operator }));
  }

  onCalculate() {
    this.store.dispatch(calculate());
  }

  onClear() {
    this.store.dispatch(reset());
  }
}
