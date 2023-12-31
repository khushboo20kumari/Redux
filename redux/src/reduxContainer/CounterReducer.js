
import { increment } from "./CounterType";

const initialState = {
  count: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default CounterReducer;
