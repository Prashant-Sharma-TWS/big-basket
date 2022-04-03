import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuantity, deleteItem, setCart } from "../Redux/cart/CartAction";
import styles from "./checkout.module.css";

export const Listitem = ({ item }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(item.quantity);

  // const handleIncrease = () =>{
  //     dispatch(addQuantity({id:item.id,quantity:item.quantity +1}))
  // }

  // const handleDelete = () =>{
  //     dispatch(deleteItem({id:item.id}))
  // }

  // const handleDecrease = () =>{
  //     let quantity = item.quantity -1
  //     if(quantity < 0){
  //         quantity = 0
  //     }
  //     dispatch(addQuantity({id:item.id,quantity}))
  // }

  const handleIncrease = () => {
    // dispatch(addQuantity({id:item.id,quantity:item.quantity +1}))
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
    };

    updateQuantity(item._id, item.quantity + 1);
  };

  const handleDelete = () => {
    // dispatch(deleteItem({id:item.id}))
    const deleteQuantity = (id) => {
      axios
        .delete(`/items/${id}`)
        .then()
        .catch((err) => alert(err.message));
    };

    deleteQuantity(item._id);
  };

  const handleDecrease = () => {
    // let quantity = item.quantity -1
    // if(quantity < 0){
    //     quantity = 0
    // }
    // dispatch(addQuantity({id:item.id,quantity}))

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
    };

    updateQuantity(item._id, item.quantity - 1);
  };

  useEffect(() => {
    let quantity = value;
    // dispatch(addQuantity({id:item.id,quantity}))
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
    };

    updateQuantity(item._id, quantity);
  }, [value]);

  useEffect(() => {
    const fetchcart = async () => {
      const res = await fetch("/items/?user=62435193c1dab43bbce3f6eb");
      const json = await res.json();
      dispatch(setCart(json));
    };
    fetchcart();
  }, [handleIncrease, handleDelete, handleDecrease, value]);

  return (
    <div className={styles.listItemDiv}>
      <div>&nbsp;</div>
      <div className={styles.description}>
        <div className={styles.fade}>{item.product.brand}</div>
        <div>{item.product.name}</div>
      </div>
      <div>
        <div>Rs: {item.product.price}</div>
        <div className={styles.fade}>
          <strike>Rs: {item.product.mrp}</strike>
        </div>
      </div>
      <div>
        <div className={styles.quantitydiv}>
          <button onClick={handleDecrease}>-</button>
          <input
            type={"number"}
            id={item.id}
            value={item.quantity}
            min={"1"}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      <div>
        <div>Rs. {item.subtotal.toFixed(2)}</div>
      </div>
      <div className={styles.crossSign} onClick={handleDelete}>
        <img src="https://www.bigbasket.com/static/uiv2/css/images/close_grid_icon.png" />
      </div>
      <div>
        <div className={styles.savings}>Rs. {item.saving.toFixed(2)}</div>
      </div>
    </div>
  );
};
