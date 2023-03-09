import { ProductActionTypes } from "../constants/action-types";
import axios from "axios";
import { API_URI } from "../../api";

// Action Creators for the product

// Fetch all the products
export const fetchProducts = () => async (dispatch, getState) => {
  const data = getState().allProducts;
  console.log(data.products.length);
  if (data.products.length !== 0) {
    //if Data is already present in the store, don't fetch it again
    return;
  }
  //   If data is not present, then fetch the products form the API and pass the response as payload to reducer
  
  const response = await axios.get(API_URI);
  dispatch({ type: ProductActionTypes.FETCH_PRODUCTS, payload: response.data });
};

// To create a new product, passing the new data as payload
export const createNewProduct = (data) => (dispatch) => {
  dispatch({ type: ProductActionTypes.CREATE_PRODUCT, payload: data });
};

// To remove a product , passing the product ID as payload
export const removeProduct = (id) => (dispatch) => {
  dispatch({ type: ProductActionTypes.REMOVE_PRODUCT, payload: id });
};

// To update/edit the product details, passing the data and id as payload
export const editProduct = (id, data) => (dispatch) => {
  dispatch({
    type: ProductActionTypes.UPDATE_PRODUCT,
    payload: {
      id,
      data,
    },
  });
};

// To apply sorting
export const applySorting = () => (dispatch) => {
  dispatch({
    type: ProductActionTypes.APPLY_SORTING,
    payload: null,
  });
};

// Fetch the product details by ID for showing the product details
export const fetchProductById = (id) => (dispatch, getState) => {
  const data = getState().allProducts.products.filter(
    (ele) => ele.id === Number(id)
  );

  dispatch({ type: ProductActionTypes.FETCH_PRODUCT_BY_ID, payload: data[0] });
};
