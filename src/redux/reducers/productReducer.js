import { ProductActionTypes } from "../constants/action-types";
import { loadFromLocalState } from "./../../local-storage";

const localData = loadFromLocalState("state");

// Taking data from localStorage and setting it as initial value for the state
const initialState = localData?.allProducts || {
  products: [], // Stores all the product details
  sortedProducts: [], // stores all the product details in a sorted order i.e. by price
  prodDetails: {}, // stores the single product details to show it on the product details page
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.FETCH_PRODUCTS:
      // Fetch products
      return { ...state, products: payload, prodDetails: [] };
    case ProductActionTypes.CREATE_PRODUCT:
      // Create a product with id equals to the length of the products array + 1
      payload.id = state.products.length + 1;
      return { ...state, products: [payload, ...state.products] };
    case ProductActionTypes.REMOVE_PRODUCT:
      // remove a product from the store
      return {
        ...state,
        products: state.products.filter((ele) => ele.id !== payload),
      };
    case ProductActionTypes.UPDATE_PRODUCT:
      //   Updating the product details
      state.products.map((ele) => {
        if (ele.id === payload.id) {
          ele.price = payload.data.price;
          ele.rating.rate = payload.data.rate;
          ele.title = payload.data.title;
        }
      });
      return {
        ...state,
      };

    case ProductActionTypes.APPLY_SORTING:
      const newArr = [...state.products];
      return {
        ...state,
        // sorting the products array according to price and storing it in sortedProducts
        sortedProducts: newArr.sort((prev, curr) => prev.price - curr.price),
      };

    // Fetching the product details by it's id
    case ProductActionTypes.FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        prodDetails: payload,
      };

    default:
      return state;
  }
};
