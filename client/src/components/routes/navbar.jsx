import React from "react";
import { useSelector } from "react-redux";

import { selectIsAuth } from "../../redux/slices/auth.js";

import { basket, account, logo, menu } from "../../assets/index.js";
import { CustomLink } from "../ui/index.js";

import "./styles.css";

const Navbar = () => {
  const isAuth = useSelector(selectIsAuth);
  const userData = useSelector((state) => state.auth.data);

  const toggleBtn = document.querySelector(".toggle-btn");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const toggleIcon = document.querySelector(".toggle-btn_i");

  toggleBtn
    ? (toggleBtn.onclick = () => {
        dropdownMenu.classList.toggle("open");
        toggleIcon.classList.toggle("open");
      })
    : null;

  return (
    <nav className="navbar-container">
      <CustomLink to="/">
        <img className="logo" alt="logo" src={logo} />
      </CustomLink>
      <div className="brand">
        <h1>Lace Store</h1>
        <CustomLink to={"/"}>
          <img src={logo} />
        </CustomLink>
      </div>
      <CustomLink to="/products/men">
        <p>Men</p>
      </CustomLink>
      <CustomLink to="/products/women">
        <p>Women</p>
      </CustomLink>
      <CustomLink to="/products/kids">
        <p>Kids</p>
      </CustomLink>
      <CustomLink to={isAuth ? "/products/favorites" : "/login"}>
        <p>Favorites</p>
      </CustomLink>
      <CustomLink className="icons" to={isAuth ? "/user/account" : "/login"}>
        <img className="icon" alt="account-icon" src={account} />
      </CustomLink>
      <CustomLink className="icons2" to={isAuth ? "/user/basket" : "/login"}>
        {userData !== null && userData.basket.length !== 0 && (
          <div className="basket-counter">
            <p>{userData.basket?.length}</p>
          </div>
        )}
        <img className="icon" alt="basket-icon" src={basket} />
      </CustomLink>
      <div className="dropdown">
        <div className="dropdown-menu">
          <div className="categories">
            <CustomLink to="/products/men">
              <p>Men</p>
            </CustomLink>
            <CustomLink to="/products/women">
              <p>Women</p>
            </CustomLink>
            <CustomLink to="/products/kids">
              <p>Kids</p>
            </CustomLink>
            <CustomLink to={isAuth ? "/products/favorites" : "/login"}>
              <p>Favorites</p>
            </CustomLink>
          </div>
          <div className="account-i">
            <CustomLink to={isAuth ? "/user/account" : "/login"}>
              <img className="icon" alt="account-icon" src={account} />
            </CustomLink>
            <CustomLink to={isAuth ? "/user/basket" : "/login"}>
              <img className="icon" alt="basket-icon" src={basket} />
            </CustomLink>
          </div>
        </div>
        <button className="toggle-btn">
          <img alt="menu" className="toggle-btn_i" src={menu} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
