import types from './cart.types'

import { addItemToCart,
        changeCartItemCount,
        clearItemFromCart,
        getCoupon
    } from './cart.utils'

const INITIAL_STATE = {
    items: [],
    itemToClear: null,
    coupon: '',
    checkoutSuccess: false
}

const VALIDE_COUPONS = {
    new2020: 50,
    a2a3for: 20,
    thank40: 40
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

        case types.APPLY_COUPON : 
            return {
                ...state,
                coupon: getCoupon(payload, VALIDE_COUPONS)
            }
        
        case types.CHECKOUT_SUCCESS : 
            return {
                ...INITIAL_STATE,
                checkoutSuccess: true
            }
        
        default :
            return state 
    }
}

export default cartReducer