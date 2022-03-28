import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Components/checkout.module.css'
import { Listitem } from '../Components/Listitem'

export const Checkout = () => {
    let list = [
        {
            brand: "FRESHO",
            name: "Bitter Gourd 250 g",
            mrp: "10.31",
            price: "8.25",
            quantity: 3,
            category: "Fruits & Vegetables"
        },
        {
            brand: "FRESHO",
            name: "Carrot - Orange 500 g",
            mrp: "66.88",
            price: "53.50",
            quantity: 3,
            category: "Fruits & Vegetables"
        }
    ]

    let obj = {}

    //sepration of categories
    list.map((item) => {
        if (obj[item.category] === undefined) {
            obj[item.category] = [item]
        }
        else {
            obj[item.category].push(item)
        }
        item.total = item.quantity * item.price
        item.saving = (item.quantity * item.mrp) - item.total
    })

    console.log(obj)

    return (
        <div className={styles.checkoutdiv}>
            <div className={styles.container}>
                <div className={styles.heading}>
                    Your Basket ({list.length} items)
                </div>
                <div className={styles.checkoutTable}>
                    <div className={styles.tableHeading}>
                        <div className={styles.emptySpace}></div>
                        <div className={styles.descriptio}>ITEM DESCRIPTION</div>
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
                                <span>{obj[category].length} items: Rs <span>123</span> </span>
                            </div>
                            {obj[category].map((item) => <Listitem item={item} />)}
                        </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
