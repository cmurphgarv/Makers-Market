import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div class="nav">
      <div class="navlogo">
        <Link to={`/`}>
          {" "}
          <h1>🧶 MAKER'S MARKET</h1>{" "}
        </Link>
      </div>
      <div class="navlogin">
        <Link to={`/login`}>
          <h5>Login/Signup </h5>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
