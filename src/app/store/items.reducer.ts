//In Redux, the Reducers are the only elements that are authorised to introduce changes in the state of our application.

import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";

export const initialState = 0;

//Every time the 'increment' action is called, we take our current state and increase it by 1. It works in a similar way to a switch case.
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state++),
  on(decrement, (state) => state--),
  on(reset, (state) => 0)
)
