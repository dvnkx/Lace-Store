import React from "react";
import "./styles.css";

import { CustomLink } from "../ui/index.js";

import { instagram, twitter, telegram, linked_in } from "../../assets/index";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="brand">
        <h1>Lace Store</h1>
      </div>
      <div className="footer">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <CustomLink>About us</CustomLink>
            </li>
            <li>
              <CustomLink>Faq</CustomLink>
            </li>
            <li>
              <CustomLink>Contact us</CustomLink>
            </li>
            <li>
              <CustomLink>Products</CustomLink>
            </li>
            <li>
              <CustomLink>Career</CustomLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get help</h4>
          <ul>
            <li>
              <CustomLink>Private policy</CustomLink>
            </li>
            <li>
              <CustomLink>Refund policy</CustomLink>
            </li>
            <li>
              <CustomLink>Terms of service</CustomLink>
            </li>
            <li>
              <CustomLink>Customer care</CustomLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>How to</h4>
          <ul>
            <li>
              <CustomLink>How to order</CustomLink>
            </li>
            <li>
              <CustomLink>How to refund</CustomLink>
            </li>
            <li>
              <CustomLink>Track your order</CustomLink>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <div className="linked-list">
            <CustomLink>
              <img src={instagram} />
            </CustomLink>
            <CustomLink>
              <img src={twitter} />
            </CustomLink>
            <CustomLink>
              <img src={telegram} />
            </CustomLink>
            <CustomLink>
              <img src={linked_in} />
            </CustomLink>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="hr-div">
          <hr />
        </div>
        <h3>© 2023 LACESTORE. All right reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
