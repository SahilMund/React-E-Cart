import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // Getting the cart products from redux store using useSelector hooks
  const { cartProducts } = useSelector((state) => state.cart);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <span>&nbsp;E-Cart</span>
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/create-products">
              <i className="material-icons left">add_box</i>Create Item
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons left">shopping_cart</i>
              <span
                className="badge"
                style={{
                  marginLeft: "-30px",
                  fontSize: "larger",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                {/* Showing the cart counts in the navbar */}
                <sup> {cartProducts.length || 0}</sup>
              </span>
              Cart Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
