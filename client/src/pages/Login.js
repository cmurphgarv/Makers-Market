import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

import Auth from "../utils/auth";
import Signup from "./Signup";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form to login
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      console.log(Auth.isLoggedIn());
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div class="">
      <div class="logincard">
        <h4 class="logintitle">Login</h4>

        <div class="">
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <br></br>
              <input
                className="form-input"
                placeholder="Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <br></br>
              <button
                className="loginButton"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && <div>{error.message}</div>}
        </div>
      </div>

      <Signup />
    </div>
  );
};

export default Login;
