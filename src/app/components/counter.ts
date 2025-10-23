import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html'
})
export class CounterComponent {

  title: String = 'Counter using Redux';

  counter: number;

  //Instead of initialising the counter variable in the variables declaration, we initialise it in the constructor.
  constructor() {
    this.counter = 0;
  }

  increase(): void {
    this.counter++;
    console.log('increasing ...');
  }

  decrease(): void {
    this.counter--;
    console.log('decreasing ...');
  }

  reset(): void {
    this.counter = 0;
    console.log('resetting counter ...');
  }
}
