import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../store/items.action';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html'
})
export class CounterComponent {

  title: String = 'Counter using Redux';

  //This variable has nothing to do with Redux. This is part of the component, and serves as a default value for the component until
  //we update it with the value we get from Redux.
  counter: number;

  //Instead of initialising the counter variable in the variables declaration, we initialise it in the constructor.
  //We declare a variable called 'store' of type Store for different types of data in our application. Inside, there is a state that we call 'counter',
  // and we declare that it is numeric type.
  constructor(private store: Store<{counter: number}>) {
    this.counter = 0;
    this.store.select('counter').subscribe( aaa => {
      this.counter = aaa;
    })
  }

  increase(): void {
    //this.counter++;
    this.store.dispatch(increment());
    console.log('increasing ...');
  }

  decrease(): void {
    //this.counter--;
    this.store.dispatch(decrement());
    console.log('decreasing ...');
  }

  reset(): void {
    //this.counter = 0;
    this.store.dispatch(reset());
    console.log('resetting counter ...');
  }
}
