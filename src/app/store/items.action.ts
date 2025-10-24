import { createAction, props } from "@ngrx/store";

//We could've called this action simply 'add', but instead we decided to give it a more descriptive name.
//This action will always be invoked from a component object.
export const increment = createAction('[Counter Component] Increment', props<{add: number}>());

export const decrement = createAction('[Counter Component] Decrement', props<{subtrct: number}>());
export const reset = createAction('[Counter Component] Reset');
