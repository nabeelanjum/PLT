import { combineReducers } from "redux";
import cart from "./reducers/cart.reducer";

const rootReducer = combineReducers({
  cart
});

export default rootReducer;
