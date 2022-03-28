import React from 'react'
import styles from './checkoutcard.module.css'

export const CheckoutCards = ({obj}) => {

    let subtotal = 0;

    Object.keys(obj).forEach((key) =>{
        subtotal += obj[key].total
    })

  return (
    <div className={styles.container}>
        <div className={styles.buttondiv}>
            <button>EMPTY BASKET</button>
            <button>CONTINUE SHOPPING</button>
        </div>
        <div>
            <div className={styles.checkoutcard}>
                <div>
                    <div>
                        <div>
                            <p>Subtotal</p>
                            <span>Rs. {subtotal}</span>
                        </div>
                        <div>
                            <p>Delivery Charges </p>
                            <span>**</span>
                        </div>
                        <div>
                            <p>TOTAL</p>
                            <span>Rs. {subtotal}</span>
                        </div>
                    </div>
                    <div>
                        {/* image */}
                    </div>
                </div>
                <div>
                    <p>* For this order: Accepted food coupon is {subtotal}</p>
                </div>
                <div>
                    <div>
                        <button>CHECKOUT</button>
                    </div>
                    <div>
                        <p>** Actual delivery charges computed at checkout time</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
