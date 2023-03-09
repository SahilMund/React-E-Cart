import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductElement from "./ProductElement";
import { fetchProducts, applySorting } from "./../redux/actions/productActions";
import { showNotification } from "./../Notification/config";

const ProductListing = () => {
  // to check whether the sorted data or unsorted data needs to be displayed
  const [isSorted, setIsSorted] = useState(false);

  const { products, sortedProducts } = useSelector(
    (state) => state.allProducts
  );
  const dispatch = useDispatch();

  //   once this component mounts for the first time , dispatch an action which will fetch all the products
  useEffect(() => {
    dispatch(fetchProducts());
  });

  const handleSorting = () => {
    if (!isSorted) {
      setIsSorted(true);
      //   dispatch an action to get the sorted data
      dispatch(applySorting());
      showNotification("Product Sorted Successfully", "success");
    } else {
      setIsSorted(false);
      showNotification("Sorting Removed Successfully", "success");
    }
  };

  //   By referring to isSorted, selecting the sorted/unsorted data to render
  const productList = isSorted ? sortedProducts : products;

  if (productList.length === 0) {
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
    <div>
      {isSorted ? (
        <>
          <a className="waves-effect waves-light btn-small sort-btn">
            Sort By Price
            {isSorted && (
              <i className="material-icons right" onClick={handleSorting}>
                close
              </i>
            )}
          </a>
        </>
      ) : (
        <>
          <a
            className="waves-effect waves-light btn-small sort-btn"
            onClick={handleSorting}
          >
            Sort By Price
          </a>
        </>
      )}

      <ul className="collection container product-container">
        {productList.map((element, ind) => (
          <ProductElement data={element} key={ind} />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
