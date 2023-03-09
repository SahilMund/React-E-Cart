import { CartActionTypes } from "../constants/action-types";
import { loadFromLocalState } from './../../local-storage';

const localData = loadFromLocalState('state');


const initialState = localData?.cart  ||{
  cartProducts: [],
};
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActionTypes.ADD_TO_CART:
      const ind = state.cartProducts.findIndex((ele) => ele.id === payload.id);
      // If the product is already In the cart, just increase the quantity
      if (ind >= 0) {
        state.cartProducts[ind].quantity += 1;
        return {
          ...state,
          cartProducts: [...state.cartProducts],
        };
      } else {
        // else,add it to the cart, with quantity as 1

        return {
          ...state,
          cartProducts: [...state.cartProducts, { ...payload, quantity: 1 }],
        };
      }

    //   To remove the product from the cart
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter((ele) => ele.id !== payload),
      };

    //   To increase the quantity of the product
    case CartActionTypes.INCREASE_PROD_QUANTITY:
      return {
        ...state,
        cartProducts: [...state.cartProducts].map((ele) =>
          ele.id === payload ? { ...ele, quantity: ele.quantity + 1 } : ele
        ),
      };

    //   To decrease the quantity of the product
    case CartActionTypes.DECREASE_PROD_QUANTITY:
      return {
        ...state,
        cartProducts: [...state.cartProducts].map((ele) =>
          ele.id === payload ? { ...ele, quantity: ele.quantity - 1 } : ele
        ),
      };

    default:
      return state;
  }
};
