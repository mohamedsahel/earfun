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
        }
    ],
    itemToClear: null,
}


const cartReducer = (state=INITIAL_STATE, action) => {
    const {type, payload} = action
    switch(type) {
        case types.ADD_ITEM : 
            return {
                ...state,
                items: addItemToCart(state.items, payload)
            }

        case types.CHANGE_ITEM_COUNT : 
            return {
                ...state,
                items: changeCartItemCount(state.items, payload.itemId, payload.amount)
            }

        case types.START_CLEAR_ITEM : 
            return {
                ...state,
                itemToClear: payload
            }

        case types.CLEAR_ITEM : 
            return {
                ...state,
                items: clearItemFromCart(state.items, payload),
                itemToClear: null
            }

        case types.CANCEL_CLEAR_ITEM : 
            return {
                ...state,
                itemToClear: null
            }
        
        default :
            return state 
    }
}

export default cartReducer