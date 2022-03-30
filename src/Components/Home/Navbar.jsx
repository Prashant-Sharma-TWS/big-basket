import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowDown } from "../../Elements/Element";
import { Nav } from "../../Elements/NavbarElement";
import { Shop, ShopByCategory } from "./ShopByCategory";
import { SignIn } from "./Signin";

export const Navbar = () => {
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const [cart, setCart] = useState(0);
  const [user, setUser] = useState("Prashant Sharma");
  const [location, setLocation] = useState({
    city: "Bangalore",
    pincode: 560004,
  });
  const [sidebar, setSidebar] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  return (
    <>
      <Nav className="nav-sticky">
        <div>
          <div>
            <div>
              <div className="hamburger" onClick={() => setSidebar(!sidebar)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="user" onClick={() => setIsSigning(!isSigning)}>
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
            {isUserLoggedIn ? (
              <li className="user user-onlogin">
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
            ) : (
              <li className="user" onClick={() => setIsSigning(!isSigning)}>
                <i></i>
                <span>Login/Sign Up</span>
              </li>
            )}
          </ul>
        </div>
        <div>
          <ShopByCategory sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <SignIn isSigning={isSigning} setIsSigning={setIsSigning} />
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
