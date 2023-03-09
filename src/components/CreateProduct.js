import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createNewProduct } from "../redux/actions/productActions";
import { showNotification } from './../Notification/config';

const CreateProduct = () => {
  // Using useState hook to keep track of the below states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [rate, setRate] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   Setting state
  const handleStateValue = (e, setValue) => {
    setValue(e.target.value);
  };

  //   To handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, price, rating: { rate } };
    console.log(rate,data);

    if (!price || price === '0') {
      showNotification("Price of a product cannot be zero",'error');
      return;
    }

    
    if (rate < 0 || rate > 5) {
      showNotification("Invalid Input !! MAX Available Rating is Five Star", "error");
      return;
    }

    
    // dispatching the action which will create a new product
    dispatch(createNewProduct(data));
    // Navigate back to home page
    showNotification("New Product Added Successfully", "success");
    navigate("/");
  };

  return (
    <div className="container card create-product-card">
      <div className="row" style={{    'padding': '10px'}}>
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">account_circle</i>
              <input
                id="icon_prefix"
                type="text"
                className="validate"
                onChange={(e) => handleStateValue(e, setTitle)}
              />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">description</i>
              <input
                id="icon_telephone"
                type="text"
                className="validate"
                onChange={(e) => handleStateValue(e, setDescription)}
              />
              <label htmlFor="icon_telephone">Description</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">attach_money</i>
              <input
                id="icon_price"
                type="number"
                className="validate"
                onChange={(e) => handleStateValue(e, setPrice)}
              />
              <label htmlFor="icon_price">Price</label>
            </div>
            <div className="input-field col s12">
              <i className="material-icons prefix">star</i>
              <input
                id="icon_rating"
                type="text"
                className="validate"
                onChange={(e) => handleStateValue(e, setRate)}
              />
              <label htmlFor="icon_rating">Rating</label>
            </div>

            <button
              className="btn waves-effect waves-light add-product-btn"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
