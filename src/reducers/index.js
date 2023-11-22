import { ADD } from "../actions";
import { combineReducers } from "redux";

const initialState = {
  str: 100,
};

const data = (state = initialState, action) => {
  switch (action) {
    case ADD:
      return {
        ...state,
        str: state + 100,
      };
    default:
      return state;
  }
};

const App = combineReducers({
  data,
});
export default App;
