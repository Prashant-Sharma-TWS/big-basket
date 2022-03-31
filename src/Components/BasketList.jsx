import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../Redux/cart/CartAction';
import { BasketItem } from './BasketItem';
import styles from './Css/basket.module.css'

export const BasketList = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart);
  let subtotal = 0
  cart.map(item => {
    subtotal += item.quantity * item.price
  })

  return (
    <div className={styles.container} >
      <div className={styles.basketItems}>
        {cart.length !== 0 ?
          cart.map(item => item.quantity <= 0? dispatch(deleteItem({id:item.id})) :<BasketItem item={item} /> )
          :
          <div className={styles.emptyBasket}>
            Your basket is empty. Start shopping now!
          </div>
        }
      </div>
      

      {cart.length !== 0 ?
          <div className={styles.checkoutDiv}>
            <div className={styles.warning}>
              <p>**Actual Delivery Charges computed at checkout</p>
            </div>
            <div className={styles.charges}>
              <section>
              <div>
                <p>Subtotal</p>
                <span>Rs. {subtotal}</span>
              </div>
              <div>
                <p>Delivery Charges</p>
                <span>**</span>
              </div>
              </section>
              <div className={styles.buttonDiv}>
                View Basket & Checkout
              </div>
            </div>
          </div>
          : undefined}
    </div>
  )
}
