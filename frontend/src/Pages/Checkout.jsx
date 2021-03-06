import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from '../Components/checkout.module.css'
import { CheckoutCards } from '../Components/CheckoutCards'
import { CheckoutTable } from '../Components/CheckoutTable'
import { deleteItem } from '../Redux/cart/CartAction'

export const Checkout = () => {
    let dispatch = useDispatch();
    let list = useSelector(state => state.cart.cart)
    let obj = {}

    //sepration of categories
    list.map((item) => {
        if(item.quantity === 0){
            dispatch(deleteItem({id:item.id}))
        }
        if (obj[item.product.category] === undefined) {
            obj[item.product.category] = [item]
            
        }
        else {
            obj[item.product.category].push(item)
        }
        obj[item.product.category].total ? obj[item.product.category].total += item.quantity * item.product.price : obj[item.product.category].total = item.quantity * item.product.price
        item.subtotal = item.quantity * item.product.price
        item.saving = (item.quantity * item.product.mrp) - item.subtotal
        obj.totalSaving ? obj.totalSaving += item.saving : obj.totalSaving = item.saving
    })


    return (
        <div className={styles.checkoutdiv}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    {list.length !== 0? `Your Basket (${list.length} items)` : 'There are no items in your basket.'}
                </div>
                {list.length !== 0 && <CheckoutTable obj={obj}/>}
                <CheckoutCards obj={obj}/>
            </div>
        </div>
    )
}
