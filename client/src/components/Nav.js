import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { getSavedProductList } from "../utils/localStorage";

let loginButton;
let cartButton;
let historyButton;

let cartView;
// console.log(getSavedProductList());
if (getSavedProductList().length > 0) {
  cartView = (
    <Link to={`/cart`}>
      <h5>View Cart({getSavedProductList().length})</h5>
    </Link>
  );
} else {
  cartView = (
    <Link to={`/cart`}>
      <h5>View Cart</h5>
    </Link>
  );
}

const handleLogOut = () => {
  Auth.logout();
};

if (Auth.loggedIn()) {
  loginButton = (
    <Link to={`/`}>
      <h5 onClick={() => handleLogOut()}>Logout</h5>
    </Link>
  );
} else {
  loginButton = (
    <Link to={`/login`}>
      <h5>Login/Sign Up</h5>
    </Link>
  );
}
if (Auth.loggedIn()) {
  cartButton = (
    <Link to={`/cart`}>
      <h5>View Cart</h5>
    </Link>
  );
} else {
  cartButton = "";
}
if (Auth.loggedIn()) {
  historyButton = (
    <Link to={`/history`}>
      <h5>Order History</h5>
    </Link>
  );
} else {
  historyButton = "";
}

if (getSavedProductList().length > 0) {
  cartView = `View Cart(${getSavedProductList().length})`;
} else {
  cartView = "View Cart";
}

const Nav = () => {
  return (
    <div class="navcard">
      <div class="nav">
        <div class="navlogo">
          <Link to={`/`}>
            {" "}
            <h1>🧶 MIDWEST MAKER'S MARKET</h1>{" "}
          </Link>
        </div>
        <div class="navlogin">
          <ul>
            <li>{cartView}</li>
            <li>{historyButton}</li>
            <li>{loginButton}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
