import types from './cart.types'

import { addItemToCart,
        changeCartItemCount,
        clearItemFromCart
    } from './cart.utils'

const INITIAL_STATE = {
    items: [
        {
            id: 56,
            title: "Apple Beats Powerbeats3 Headphones Wireless",
            price: 80,
            discount: 0,
            imageUrl: "https://i.imgur.com/O7R2332.png",
            color: "gray",
            brand:"beats",
            type: "earphones",
            connectWith: 'bluetooth',
            count: 1
        },
        {
            id: 60,
            title: "Beats lite K25",
            price: 130,
            discount: 0,
            imageUrl: "https://i.imgur.com/NWxu1kG.png?1",
            color: "red",
            brand:"beats",
            type: "headphones",
            connectWith: 'bluetooth',
            count: 1
        },
    ],
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADD_ITEM : 
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }

        case types.CHANGE_ITEM_COUNT : 
            return {
                ...state,
                items: changeCartItemCount(state.items, action.payload.itemId, action.payload.amount)
            }

        case types.CLEAR_ITEM : 
            return {
                ...state,
                items: clearItemFromCart(state.items, action.payload)
            }
        
        default :
            return state 
    }
}

export default cartReducer