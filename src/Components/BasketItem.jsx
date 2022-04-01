import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, deleteItem } from '../Redux/cart/CartAction'
import styles from './basket.module.css'

export const BasketItem = ({item}) => {
    let dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart);
    let saving = item.quantity * item.mrp - item.quantity * item.price

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

    return (
        <div className={styles.listItems}>
            <img src="https://via.placeholder.com/100x100" alt="" />
            <div className={styles.nameDiv}>
                <span>{item.brand}</span>
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price}</span>
            </div>
            <div className={styles.quantityDiv}>
                <span onClick={handleDecrease}>-</span>
                <p>{item.quantity}</p>
                <span onClick={handleIncrease}>+</span>
            </div>
            <div className={styles.priceDiv}>
                <span>Rs. {item.price}</span>
                <span>Saved Rs. {saving.toFixed(2)}</span>
            </div>
            <div className={styles.crossDiv} onClick={handleDelete}>
                X
            </div>
        </div>
    )
}
