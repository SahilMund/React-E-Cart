import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

// Using combined reducer to be able to use multiple reducers
const reducers = combineReducers({
  allProducts: productReducer,
  cart: cartReducer,
});

export default reducers;
