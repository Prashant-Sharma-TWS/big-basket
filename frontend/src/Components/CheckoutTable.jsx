import React from 'react'
import styles from './checkout.module.css'
import { Link } from 'react-router-dom'
import { Listitem } from './Listitem'

export const CheckoutTable = ( {obj}) => {
    return (
        <div className={styles.checkoutTable}>
            <div className={styles.tableHeading}>
                <div className={styles.emptySpace}>&nbsp;</div>
                <div className={styles.description}>ITEM DESCRIPTION</div>
                <div className={styles.unitPrice}>UNIT PRICE</div>
                <div className={styles.quantity}>QUANTITY</div>
                <div className={styles.subtotal}>SUBTOTAL</div>
                <div className={styles.cross}></div>
                <div className={styles.saving}>SAVINGS</div>
            </div>
            {Object.keys(obj).map(category => {
                return typeof(obj[category]) === typeof([]) ? (<>
                    <div className={styles.categoryHeading}>
                        <Link to={"#"}>{category}</Link>
                        <span>{obj[category].length} items: Rs <span>{obj[category].total}</span> </span>
                    </div>
                    {obj[category].map((item) => <Listitem key={item.id} item={item} />)}
                </>
                ) : null
            })}
        </div>
    )
}
