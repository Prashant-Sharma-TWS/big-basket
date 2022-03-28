import { SET_QUANTITY } from "./CartActionTypes"

const initialState = {
    cart:[
        {
            id:1,
            brand: "FRESHO",
            name: "Bitter Gourd 250 g",
            mrp: "10.31",
            price: "8.25",
            quantity: 3,
            category: "Fruits & Vegetables"
        },
        {
            id:2,
            brand: "FRESHO",
            name: "Carrot - Orange 500 g",
            mrp: "66.88",
            price: "53.50",
            quantity: 3,
            category: "Fruits & Vegetables"
        }
    ],
    haveitems:false
}


export const CartReducer = (state = initialState,{type,payload}) =>{
    switch (type){
        case SET_QUANTITY:{
            state.cart.map(item =>{
                if(item.id === payload.id){
                    item.quantity = payload.quantity
                }
            })
            return{
                state
            }
        }
        default:{
            return state
        }
    }
}