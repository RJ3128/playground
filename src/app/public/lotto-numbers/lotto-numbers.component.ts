import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-lotto-numbers',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './lotto-numbers.component.html',
  styleUrl: './lotto-numbers.component.css',
})
export class LottoNumbersComponent {
  readonly bonusNumberControl = new FormControl();
  readonly bonusNumber = toSignal(
    this.bonusNumberControl.valueChanges.pipe(map((value) => value))
  );
  public lottoForm: FormGroup;
  public lottoNumberCount = [4, 5, 6, 7];
  public lottoNumbers?: string;
  public bonusLottoNumber?: string;

  constructor() {
    this.lottoForm = new FormGroup({
      numberCount: new FormControl(5, Validators.required),
      numberMax: new FormControl(52, Validators.required),
      bonusNumberMax: new FormControl(36, Validators.required),
    });
  }

  get numberCount() {
    return this.lottoForm.get('numberCount');
  }

  get numberMax() {
    return this.lottoForm.get('numberMax');
  }

  get bonusNumberMax() {
    return this.lottoForm.get('bonusNumberMax');
  }

  generateNumbers() {
    const formValues = this.lottoForm.getRawValue();

    if (this.bonusNumber()) {
      this.lottoNumbers = this.randomNumbers(
        formValues.numberCount,
        formValues.numberMax
      );
      this.bonusLottoNumber = this.randomNumbers(1, formValues.bonusNumberMax);
    } else {
      this.lottoNumbers = this.randomNumbers(
        formValues.numberCount,
        formValues.numberMax
      );
      this.bonusLottoNumber = undefined;
    }
  }

  randomNumbers(numberCount: number, max: number) {
    const numbers: number[] | string = [];

    for (let i = 0; i < numberCount; i++) {
      let newRandomNumber = Math.round(Math.random() * max);
      while (numbers.includes(newRandomNumber) || newRandomNumber < 1) {
        newRandomNumber = Math.round(Math.random() * max);
      }
      numbers.push(newRandomNumber);
    }
    return numbers
      .sort((a, b) => a - b)
      .toString()
      .replaceAll(',', ', ');
  }
}
