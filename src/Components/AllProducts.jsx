import React from "react";
import "./allproducts.css";

const AllProducts = ({ product }) => {
  return (
    <div className="product-display">
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

              <span className="qty-card-span">
                <button className="btn-qty">Qty</button>
                <input type="number" defaultValue="1" disabled />

                <button className="add-to-cart-btn">
                  <span>ADD</span>
                  <span className="bskt-icon"></span>
                </button>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
