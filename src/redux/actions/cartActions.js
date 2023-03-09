import { CartActionTypes } from "../constants/action-types";

// To add a product to the cart
export const addItemToCart = (data) => async (dispatch) => {
    dispatch({ type: CartActionTypes.ADD_TO_CART, payload: data });
  };
  
//   To remove a product from the cart
  export const removeItemFromCart = (id) => async (dispatch) => {
    dispatch({ type: CartActionTypes.REMOVE_FROM_CART, payload: id });
  };
  
//   To increase the quantity of the product present in the cart
  export const increaseQty = (id) => async (dispatch) => {
    dispatch({ type: CartActionTypes.INCREASE_PROD_QUANTITY, payload: id });
  };

//   To decrease the quantity of the product present in the cart
  export const decreaseQty = (id) => async (dispatch) => {
    dispatch({ type: CartActionTypes.DECREASE_PROD_QUANTITY, payload: id });
  };