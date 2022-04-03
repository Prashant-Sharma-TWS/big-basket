import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdminUserCart = () => {
  var { id } = useParams();
  var [items, setItems] = useState([]);
  var [check, setCheck] = useState(false);

  useEffect(() => {
    axios.get(`/items?cart=${id}`).then((data) => setItems(data.data));
  }, [check, id]);

  const updateQuantity = (iid, qty) => {
    axios.patch(`/items/${iid}`, { quantity: qty });
    setCheck(!check);
  };
  return (
    <div>
      {items.map((item) => {
        return (
          <>
            <p>
              <img src={item.product.photo} alt="" />
              <span>{item.product.name}</span>
              <span>{item.quantity}</span>
              <span>Total Price = {item.quantity * item.product.price}</span>
              <span>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity + 1)}
                >
                  Inc
                </button>
                <button
                  onClick={() => updateQuantity(item._id, item.quantity - 1)}
                >
                  Dec
                </button>
              </span>
            </p>
            <p></p>
          </>
        );
      })}
    </div>
  );
};

export default AdminUserCart;
