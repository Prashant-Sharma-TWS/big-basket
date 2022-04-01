import { Alert, Snackbar } from "@mui/material";
import axios from "axios";

import React, { useState, useEffect } from "react";
import "../Css/allproducts.css";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../Redux/cart/CartAction";

const AllProducts = ({ product }) => {
  const [userid, setUserId] = useState("62435193c1dab43bbce3f6eb");
  const vertical = "top";
  const horizontal = "center";
  const [up, setUp] = useState(true);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    axios.get(`/items?user=${userid}&product=${product._id}`).then((data) => {
      setProducts(data.data);
    });
  }, [up, cart]);

  useEffect(() => {
    const fetchcart = async () => {
      const res = await fetch("/items/?user=62435193c1dab43bbce3f6eb");
      const json = await res.json();
      dispatch(setCart(json));
    };
    fetchcart();
  }, [up]);

  const updateQuantity = (id, newQty) => {
    if (newQty === 0) {
      axios
        .delete(`/items/${id}`)
        .then()
        .catch((err) => alert(err.message));
    } else {
      axios
        .patch(`/items/${id}`, { quantity: newQty })
        .then()
        .catch((err) => alert(err.message));
    }

    setUp(!up);
  };

  const addtocart = (id) => {
    if (qty <= 0) {
      alert("qunatity can not be less than 1");
    } else {
      axios
        .post("/items", {
          product: id,
          quantity: qty,
          user: userid,
        })
        .then(() => setOpen(true))
        .catch((err) => alert(err.message));
      setUp(!up);
    }
  };

  

  return (
    <div className="product-display">
      <div>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Product Successfully Added To Cart
          </Alert>
        </Snackbar>
      </div>

      <div className="save-price">
        <input
          type="hidden"
          value="Discount"
          id="snowplow_offer_type_10000266"
          autoComplete="off"
        />
        <div className="ng-scope">
          <div>
            GET <span className="ng-binding">{product.discount}</span>% OFF
            <span className="asterisk-icon"></span>
          </div>
        </div>
      </div>

      <div className="pic-brand-name">
        <img src={product.photo[0]} alt="" />
        <div>
          <div>
            <p className="brand">{product.brand}</p>
            <p className="name">{product.name}</p>
          </div>
          <div className="weight">1 {product.quantityType}</div>
        </div>
      </div>

      <div className="price-details">
        <div qa="price" className="po-markup">
          <h5>
            <span>MRP: </span>
          </h5>
          <h4>
            <span className="mp-price">
              Rs <span>{product.mrp} </span>
            </span>
            <span className="discnt-price">
              Rs <span>{product.price}</span>
            </span>
          </h4>
        </div>

        <div>
          {product.stock === 0 ? (
            <>
              <br />
              <button className="notify-btn">Notify Me</button>
            </>
          ) : (
            <>
              <p className="ptag">
                <span className="exp-icon"></span>

                <span className="delivery">
                  Standard Delivery: Tomorrow 8:00AM - 10:00AM
                </span>
              </p>
              <br />
              <br />

              {products.length !== 0 ? (
                <span className="qty-card-span  qty-card-span-1">
                  <button
                    className="min-btn"
                    onClick={() =>
                      updateQuantity(products[0]._id, products[0].quantity - 1)
                    }
                  >
                    <i className="fa fa-minus" style={{ fontSize: "10px" }}></i>
                  </button>
                  <button className="add-to-cart-btn add-to-cart-btn-1">
                    {products[0].quantity} in basket
                  </button>
                  <button
                    className="max-btn"
                    onClick={() =>
                      updateQuantity(products[0]._id, products[0].quantity + 1)
                    }
                  >
                    <i className="fa fa-plus" style={{ fontSize: "10px" }}></i>
                  </button>
                </span>
              ) : (
                <span className="qty-card-span">
                  <button className="btn-qty">Qty</button>
                  <input
                    type="number"
                    min="1"
                    defaultValue={qty}
                    onChange={(e) => setQty(e.target.value)}
                  />

                  <button
                    className="add-to-cart-btn"
                    onClick={() => addtocart(product._id)}
                    disabled={products.length !== 0 ? true : false}
                  >
                    <span>{products.length !== 0 ? "Added" : "Add"}</span>
                    <span className="bskt-icon"></span>
                  </button>
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
