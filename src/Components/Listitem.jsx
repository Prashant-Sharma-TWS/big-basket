import React from 'react'
import styles from './checkout.module.css'

export const Listitem = ({item}) => {
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
            <div>{item.quantity}</div>
        </div>
        <div>
            <div>{item.total}</div>
        </div>
        <div>
            <div>{item.saving.toFixed(2)}</div>
        </div>
    </div>
  )
}
