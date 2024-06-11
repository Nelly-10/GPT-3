import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../asset/logo.svg";

// BEM => Block Element Modifier
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is gpt?</a>
    </p>
    <p>
      <a href="#possibility">Open Ai</a>
    </p>
    <p>
      <a href="#features">Case Studies </a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      {/* LINKS */}
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

      {/* LINKS CONTAINER */}
      <div className="gpt3__navbar-links_container">
        <Menu />
      </div>

      {/* LINKS SIGN UP */}
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>

      {/* ---FUNCTIONALITY--- */}
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Fill
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-link">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
