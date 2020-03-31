import types from './cart.types'

import { addItemToCart,
        changeCartItemCount,
        clearItemFromCart
    } from './cart.utils'

const INITIAL_STATE = {
    items: [],
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
                items: clearItemFromCart(state.items, action.payload.itemId)
            }
        
        default :
            return state 
    }
}

export default cartReducer