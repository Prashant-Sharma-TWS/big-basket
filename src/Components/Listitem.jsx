import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addQuantity, deleteItem } from '../Redux/cart/CartAction'
import styles from './checkout.module.css'

export const Listitem = ({item}) => {

    const dispatch = useDispatch();

    const handleIncrease = () =>{
        dispatch(addQuantity({id:item.id,quantity:item.quantity +1}))
    }

    const handleDelete = () =>{
        dispatch(deleteItem({id:item.id}))
    }

    const handleDecrease = () =>{
        let quantity = item.quantity -1
        if(quantity < 0){
            quantity = 0
        }
        dispatch(addQuantity({id:item.id,quantity}))
    }

    const handleChange = (e) =>{
        let {value} = e.currentTarget
        value = +value && +value > 0? value : 0
        let quantity = value
        dispatch(addQuantity({id:item.id,quantity}))
    }
    

  return (
    <div className={styles.listItemDiv}>
        <div>&nbsp;</div>
        <div className={styles.description}>
            <div className={styles.fade}>{item.brand}</div>
            <div>{item.name}</div>
        </div>
        <div>
            <div>Rs: {item.price}</div>
            <div className={styles.fade}><strike>Rs: {item.mrp}</strike></div>
        </div>
        <div>
            <div className={styles.quantitydiv}>
                <button onClick={handleDecrease}>-</button>
                <input type={"text"} id={item.id} value={item.quantity} onChange={handleChange}/>
                <button onClick={handleIncrease}>+</button>
            </div>
        </div>
        <div>
            <div>Rs. {item.subtotal}</div>
        </div>
        <div className={styles.crossSign} onClick={handleDelete} >
            <img src="https://www.bigbasket.com/static/uiv2/css/images/close_grid_icon.png" />
        </div>
        <div>
            <div className={styles.savings}>Rs. {item.saving.toFixed(2)}</div>
        </div>
    </div>
  )
}
