//In Redux, the Reducers are the only elements that are authorised to introduce changes in the state of our application.

import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

export const initialState = 0;

//Every time the 'increment' action is called, we take our current state and increase it by the number specified
// in the parameters in counter.ts. It works in a similar way to a switch case.
//The payload is an object, and so it can be destructured. There are two ways of using the object: both examples below.
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, payload) => state + payload.add),
  on(decrement, (state, { subtrct }) => state - subtrct),
  on(reset, (state) => 0)
)
