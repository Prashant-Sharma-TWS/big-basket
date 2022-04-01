import { EMPTY_CART, REMOVE_ITEM, SET_QUANTITY } from "./CartActionTypes"

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
        },
        {
            id:3,
            brand: "FRESHO",
            name: "Bitter Gourd 250 g",
            mrp: "10.31",
            price: "8.25",
            quantity: 3,
            category: "Fruits & Vegetables"
        },
        {
            id:4,
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

            return {
                ...state,
                cart: state.cart.map(item =>{
                    if(item.id === payload.id){
                        item.quantity = payload.quantity
                    }
                    return item
                })
            }
        }
        case REMOVE_ITEM:{
            return {
                ...state,
                cart:state.cart.filter(item => item.id !== payload.id)
            }
        }
        case EMPTY_CART:{
            return {
                ...state,
                cart:[]
            }
        }
        default:{
            return state
        }
    }
}