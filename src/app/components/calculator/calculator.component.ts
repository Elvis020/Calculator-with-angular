import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Function to get current number
  getNumber(valueIn: string) {
    console.log(valueIn);
    if (this.waitForSecondNumber) {
      this.currentNumber = valueIn;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0' ? this.currentNumber = valueIn : this.currentNumber += valueIn;
    }
  }

  // Function to append decimal point to current number
  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  doCalculation(operator, secondNum) {
    switch (operator) {
      case '+':
        return this.firstOperand += secondNum;
      case '-':
        return this.firstOperand -= secondNum;
      case '*':
        return this.firstOperand *= secondNum;
      case '/':
        return this.firstOperand /= secondNum;
      case '%':
        return this.firstOperand %= secondNum;
      case '=':
        return secondNum;
    }
  }


  // Function to get the perfomed operation
  getOperation(operatorU: string) {
    console.log(operatorU);
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else {
      if (this.operator) {
        const result = this.doCalculation(this.operator, Number(this.currentNumber));
        this.currentNumber = String(result);
        this.firstOperand = result;
      }
      this.operator = operatorU;
      this.waitForSecondNumber = true;
      console.log(this.firstOperand);
    }
  }

  // Function to clear result area
  clear() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }



}
