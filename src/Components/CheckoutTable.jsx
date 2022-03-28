import React from 'react'
import styles from './checkout.module.css'
import { Link } from 'react-router-dom'
import { Listitem } from './Listitem'

export const CheckoutTable = ( {obj}) => {
    return (
        <div className={styles.checkoutTable}>
            <div className={styles.tableHeading}>
                <div className={styles.emptySpace}></div>
                <div className={styles.description}>ITEM DESCRIPTION</div>
                <div>UNIT PRICE</div>
                <div>QUANTITY</div>
                <div>SUBTOTAL</div>
                <div className={styles.cross}></div>
                <div>SAVINGS</div>
            </div>
            {Object.keys(obj).map(category => {
                return (<>
                    <div className={styles.categoryHeading}>
                        <Link to={"#"}>{category}</Link>
                        <span>{obj[category].length} items: Rs <span>{obj[category].total}</span> </span>
                    </div>
                    {obj[category].map((item) => <Listitem item={item} />)}
                </>
                )
            })}
        </div>
    )
}
