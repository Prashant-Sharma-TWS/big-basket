import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowDown } from "../../Elements/Element";
import { Nav } from "../../Elements/NavbarElement";
import { logoutRequest, logoutSuccess } from "../../Redux/Auth/auth.actions";
import { Shop, ShopByCategory } from "./ShopByCategory";
import { SignIn } from "./Signin";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state.auth);
  const [cart, setCart] = useState(0);
  const [user, setUser] = useState("Prashant Sharma");
  const [location, setLocation] = useState({
    city: "Bangalore",
    pincode: 560004,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  const handleSearch = function (e) {
    setSearchTerm(e.target.value);
    fetch("http://localhost:8000/searchterm", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ searchTerm }),
    })
      .then((response) => {
        return response.json();
      })
      .then((results) => setSearchData(results.results));
  };

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
                <input
                  type="text"
                  placeholder="Search for Products.."
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyUp={handleSearch}
                />
                <button type="submit">
                  <i className="search-icon"></i>
                </button>
                {searchTerm && <SearchItemList itemList={searchData} />}
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
                  <li
                    onClick={() => {
                      dispatch(logoutRequest());
                      dispatch(logoutSuccess());
                    }}
                  >
                    Logout
                  </li>
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

const SearchItemList = ({ itemList }) => {
  return (
    <>
      <ul className="search-item-list">
        {itemList.map((item) => (
          <li key={item._id}>
            <div className="search-result-left">
              <div className="image">
                <img src={item.photo[0]} alt={item.name} />
              </div>
              <div className="name">
                <span>{item.brand}</span>
                <span>{item.name}</span>
              </div>
            </div>
            <div className="search-result-right">
              <div className="curr-qty">5 {item.quantityType}</div>
              <div className="price">Rs. {item.price * 5}</div>
              <div className="qty">1 qty</div>
              <div className="cart-btn">
                <button>
                  Add<i></i>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
