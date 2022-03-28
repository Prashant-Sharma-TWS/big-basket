import React from 'react'
import { useState } from 'react'
import styles from './checkout.module.css'

export const Listitem = ({item}) => {

    const handleIncrease = (e) =>{
        setQuantity(quantity+ 1)
    }

    const handleDecrease = () =>{
        setQuantity(quantity-1)
    }

    const handleChange = (e) =>{
        let {value} = e.currentTarget
        value = +value ? value : 0
        setQuantity(+value)
    }
    

  return (
    <div className={styles.listItemDiv}>
        <div>
            <div>{item.brand}</div>
            <div>{item.name}</div>
        </div>
        <div>
            <div>Rs: {item.price}</div>
            <div><strike>Rs: {item.mrp}</strike></div>
        </div>
        <div>
            <div className={styles.quantitydiv}>
                <button onClick={handleDecrease}>-</button>
                <input type={"text"} value={item.quantity} onChange={handleChange}/>
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
        <div>
            <div>{item.subtotal}</div>
        </div>
        <div>
            <div>{item.saving.toFixed(2)}</div>
        </div>
    </div>
  )
}
