import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  // Getting the cart products from redux store using useSelector hooks
  const { cartProducts } = useSelector((state) => state.cart);

  //   Keeping track of total price of all the products present in the cart
  let totalPrice = 0;
  cartProducts?.forEach((ele) => {
    ele.quantity &&
      ele.price &&
      (totalPrice += Number(ele.quantity) * Number(ele.price));
  });

  


  return (
    <div style={{ display: "flex" }}>
      {totalPrice === 0 ? (
        <a className="btn-large disabled no-item">
          No Item Present in the Cart, Add products to your cart !!!
        </a>
      ) : (
        <>
          {" "}
          <ul className="collection cart-collection">
            {/* CartItem component is used to dispaly the cart Items */}
            {cartProducts.map((element, ind) => (
              <CartItem data={element} key={ind} />
            ))}
          </ul>
          <div className="row container">
            <div className="col s12 m6 cart-tot-container">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">
                    {" "}
                    <p>
                      Total :{" "}
                      <span>{totalPrice ? Math.round(totalPrice, 3) : 0}</span>
                    </p>
                  </span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
