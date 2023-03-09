import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductById } from "../redux/actions/productActions";
import { addItemToCart } from "../redux/actions/cartActions";
import { showNotification } from "./../Notification/config";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { prodDetails } = useSelector((state) => state.allProducts);

  //   Using useparams hooks to get the productID
  const params = useParams();
  const { id: productId } = params;

  //   Fetching the product details by product ID
  useEffect(() => {
    //   Dispatching the action to fetch the product details by product ID
    dispatch(fetchProductById(productId));
  }, [dispatch]);

  //   Dispatching the action to add the selected item to the cart
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
    showNotification("Item Successfully Added to Cart", "success");
  };

  const { image, title, price, description, rating } = prodDetails;

  //   If the required information is not loaded, show the loader
  if (!title || !price || !description || !rating?.rate) {
    return (
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row container details-container">
      <div className="col s12 m4 l10">
        <div className="card" style={{ display: "flex" }}>
          <div className="card-image" style={{ justifyContent: "center" }}>
            <img
              className="card-image-content"
              src={
                image ||
                "data:image/png;base64,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"
              }
            />
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i
                className="material-icons"
                onClick={() => handleAddToCart(prodDetails)}
              >
                add
              </i>
            </a>
          </div>
          <div className="card-content">
            <h5>{title}</h5>
            <p>{description}</p>

            <p className="product-price-content">
              {" "}
              Price : <span> {price} </span>
            </p>
            <p className="product-rating-content">
              {" "}
              Rating : <span> {rating?.rate} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
