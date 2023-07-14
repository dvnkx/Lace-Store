import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import { CustomLink } from "../ui/index";

import {
  account,
  account_active,
  sneaker,
  sneaker_active,
  exit,
} from "../../assets/index";

import { getPageName } from "../../helpers/PageName";
import { logout } from "../../redux/slices/auth";

const SideNav = ({ avatar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const href = getPageName();

  const onClickLogout = useCallback(() => {
    if (window.confirm("Are you sure you want to log out?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
      navigate("/");
    }
  }, [dispatch, logout]);

  return (
    <div className="side-nav-container">
      <div className="links">
        <div className="avatar">
          <img alt="avatar" className="image" src={avatar} />
        </div>
        <CustomLink className="account" to={"/user/account"}>
          <img alt="user" src={href !== "Account" ? account : account_active} />
          My Account
        </CustomLink>
        <CustomLink className="orders" to={"/user/orders"}>
          <img alt="ord" src={href !== "Orders" ? sneaker : sneaker_active} />
          My Orders
        </CustomLink>
        <hr />
        <button className="logout" onClick={onClickLogout}>
          <img alt="logout" src={exit} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;
