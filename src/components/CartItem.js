import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { showNotification } from "./../Notification/config";
import { Link, useNavigate } from "react-router-dom";
import {
  decreaseQty,
  increaseQty,
  removeItemFromCart,
} from "../redux/actions/cartActions";

const CartItem = ({ data }) => {
  const { cartProducts } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   To remove the product from the cart
  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
    showNotification("Product Removed From Cart", "success");
  };

  //   To increase the quantity of the product by 1 when clicked on + button
  const handleQtyIncrement = () => {
    dispatch(increaseQty(data.id));
  };

  //   To decrease the quantity of the product by 1 when clicked on - button
  const handleQtyDecrement = () => {
    dispatch(decreaseQty(data.id));
    const arr = cartProducts.filter((ele) => ele.id === data.id);

    // If the quantity is zero then, directly remove it from the cart
    if (arr[0].quantity === 1) {
      dispatch(removeItemFromCart(data.id));
      showNotification("Product Removed From Cart", "success");
    }
  };

  // Navigate to product details page when click on the product image
  const handleNavigateToProductDetailsPage = () => {
    return navigate(`/product/${data.id}`);
  };

  return (
    <div>
      {" "}
      <div className="col s12 m7">
        <div className="card horizontal cart-horizontal">
          <div
            className="card-image cart-image"
            onClick={handleNavigateToProductDetailsPage}
          >
            <img
              src={
                data.image ||
                "data:image/png;base64,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"
              }
            />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{data.title}</p>
              <p>Quantity : {data.quantity}</p>
              <p>Price : {data.price}</p>
              <p>Total : {data.price * data.quantity}</p>

              <a
                className="btn-floating btn-small waves-effect waves-light blue increase-cart-btn"
                onClick={handleQtyIncrement}
              >
                <i className="material-icons">add</i>
              </a>

              <a
                className="btn-floating btn-small waves-effect waves-light blue"
                onClick={handleQtyDecrement}
              >
                <i className="material-icons">remove</i>
              </a>
            </div>
            <a
              className="waves-effect waves-light btn cart-remove-btn"
              onClick={() => handleRemoveFromCart(data.id)}
            >
              Remove From Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
