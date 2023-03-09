import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { saveTOLocalState } from "./local-storage";

import Navbar from "./components/Navbar";
import ProductListing from "./components/ProductListing";
import CreateProduct from "./components/CreateProduct";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  const store = useSelector((state) => state);

  // Storing redux store to local storage for persistent data
  saveTOLocalState("state", store);

  return (
    <Router basename="/React-E-Cart">
      <Navbar />

      <ToastContainer />
      <Switch>
        <Route path="/" exact element={<ProductListing />} />
        <Route path="/create-products" exact element={<CreateProduct />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route>404 Not Found!</Route>
      </Switch>
    </Router>
  );
}

export default App;
