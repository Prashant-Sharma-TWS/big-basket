import { SET_CART, SET_QUANTITY } from "./CartActionTypes"


export const addQuantity = (payload) =>{
    return {
        type:SET_QUANTITY,
        payload
    }
}

export const setCart = () =>{
    // let payload = [
    //     {
    //         brand: "FRESHO",
    //         name: "Bitter Gourd 250 g",
    //         mrp: "10.31",
    //         price: "8.25",
    //         quantity: 3,
    //         category: "Fruits & Vegetables"
    //     },
    //     {
    //         brand: "FRESHO",
    //         name: "Carrot - Orange 500 g",
    //         mrp: "66.88",
    //         price: "53.50",
    //         quantity: 3,
    //         category: "Fruits & Vegetables"
    //     }
    // ]
    return{
        type:SET_CART,
        payload
    }
}