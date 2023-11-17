
import { increment } from "./CounterType";

const initialState = {
  numberofbook: 20,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        numberofbook: state.numberofbook - 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
