import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./checkoutcard.module.css";
import { EmptyBasketModel } from "./EmptyBasketModel";

export const CheckoutCards = ({ obj }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let subtotal = 0;
  let categories = Object.keys(obj);
  categories.forEach((key) => {
    if (typeof obj[key] === typeof []) subtotal += obj[key].total;
  });

  return (
    <div className={styles.container}>
      <div className={styles.buttondiv}>
        {categories.length !== 0 ? <EmptyBasketModel /> : null}
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
      <div className={styles.checkoutcardDiv}>
        {categories.length !== 0 ? (
          <div className={styles.checkoutcard}>
            <div className={styles.chargesDiv}>
              <div className={styles.chargesSection1}>
                <div>
                  <p>Subtotal</p>
                  <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div>
                  <p>Delivery Charges</p>
                  <span>**</span>
                </div>
                <div className={styles.totalDiv}>
                  <p>TOTAL</p>
                  <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
              </div>
              <div className={styles.savingDiv}>
                <img
                  src="https://www.bbassets.com/static/v2531/uiv2/css/images/your_saved_icon.png"
                  alt=""
                />
                <span>You saved!</span>
                <span>Rs. {obj.totalSaving.toFixed(2)}</span>
              </div>
            </div>
            <div className={styles.coupondiv}>
              <p>
                * For this order: Accepted food coupon is {subtotal.toFixed(2)}
              </p>
            </div>
            <div className={styles.buttonSection}>
              <div>
                <button className={styles.checkoutButton}>
                  <p>CHECKOUT</p> <span></span>
                </button>
              </div>
            </div>
            <div className={styles.warning}>
              <p>** Actual delivery charges computed at checkout time</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
