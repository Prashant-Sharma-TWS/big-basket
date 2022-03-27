import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "../Elements/Element";
import { Nav } from "../Elements/NavbarElement";
import { Shop, ShopByCategory } from "./ShopByCategory";

export const Navbar = () => {
  const [cart, setCart] = useState(0);
  const [user, setUser] = useState("Prashant Sharma");
  const [location, setLocation] = useState({
    city: "Bangalore",
    pincode: 560004,
  });
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Nav className="nav-sticky">
        <div>
          <div>
            <div>
              <div className="hamburger" onClick={() => setSidebar(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="user">
                <i></i>
                <ul className="user-option">
                  <li>My Account</li>
                  <li>My Basket</li>
                  <li>My Orders</li>
                  <li>My Membership</li>
                  <li>Wallet</li>
                  <li>Ask Us</li>
                  <li>Customer Service</li>
                  <li>Logout</li>
                </ul>
              </div>
              <div className="big-basket-logo">
                <Link to="/big-basket">
                  <i className="big-basket-logo"></i>
                </Link>
              </div>
              <div className="shop-on-scroll">
                <Shop />
              </div>
              <div className="location">
                <i></i>
              </div>
              <div className="search-bar big-screen">
                <input type="text" placeholder="Search for Products.." />
                <button type="submit">
                  <i className="search-icon"></i>
                </button>
              </div>
              <div className="empty-divs"></div>
              <div className="empty-divs"></div>
              <div className="basket">
                <span>
                  <i className="basket-image"></i>
                  <b className="cart-count">{cart}</b>
                </span>
                <div>
                  <span className="my-basket">My Basket</span>
                  <span className="cart-value">
                    {cart}
                    <span>items</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="search-bar small-screen">
              <input type="text" placeholder="Search for Products.." />
              <button type="submit">
                <i className="search-icon"></i>
              </button>
            </div>
          </div>
          <ul className="nav-top">
            <li className="telephone">
              <i></i>
              <span>1860 123 1000</span>
            </li>
            <li className="location">
              <i></i>
              <span>
                {location.pincode}, {location.city}
              </span>
              <ArrowDown top="-3px" color="#4a4a4a" />
            </li>
            <li className="user">
              <i></i>
              <span>{user}</span>
              <ArrowDown className="arrow-down" top="-3px" color="#4a4a4a" />
              <ul className="user-option">
                <li>My Account</li>
                <li>My Basket</li>
                <li>My Orders</li>
                <li>My Membership</li>
                <li>Wallet</li>
                <li>Ask Us</li>
                <li>Customer Service</li>
                <li>Logout</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <ShopByCategory className={sidebar ? "show-sidebar" : ""} />
        </div>
      </Nav>
    </>
  );
};

setTimeout(() => {
  //applying a class to nav after scrolling y-axis
  window.addEventListener("scroll", () => {
    var nav = document.querySelector(".nav-sticky");
    var windowPosition = window.scrollY > 90;

    nav.classList.toggle("scrolling-active", windowPosition);
  });
}, 1000);
