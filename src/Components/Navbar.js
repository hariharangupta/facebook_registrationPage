import React, { useState } from "react";
import "./Styles/navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const dropdown = () => {
    setShow(true);
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-h1">facebook</h1>
        <button className="navbar-signUp"> Sign Up </button>
      </div>
      <div className=" navbar-right">
        <button className="dropdown-btn" onClick={dropdown}>
          Join or log in to Facebook

          

        </button>
        {show ? (
            <form className = "navbar-form">
              <label>Email or phone</label>
              <br></br>
              <input className="navbar-email" type="text" name="email" />
              <br></br>

              <label>password</label>
              <br></br>

              <input
                className="navbar-password"
                type="password"
                name="password"
              />
              <br></br>
              <span className  ="navbar-span">
                <a href="#" className="navbar-link">
                  Forgotten account?
                </a>
              </span>
              <br></br>
              <button className="navbar-btn" type="submit">
                Login
              </button>
              <br></br>
            </form>
        ) : null}


        
      </div>
    </div>
  );
};

export default Navbar;
