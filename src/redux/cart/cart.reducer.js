import types from './cart.types'

import { addItemToCart,
        changeCartItemCount,
        clearItemFromCart
    } from './cart.utils'

const INITIAL_STATE = {
    items: [],
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