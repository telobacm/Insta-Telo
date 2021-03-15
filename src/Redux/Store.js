import { createStore } from "redux";

//Global State
const initialState = {
  background: "white",
  color: "#000010",
};

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "SWITCH-DARK") {
    return {
      ...state,
      background: action.background,
      color: action.color,
    };
  }
  return state;
};

//Store
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__());
