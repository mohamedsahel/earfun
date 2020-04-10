import Types from './cart.types'

export const addItem = item => ({
    type: Types.ADD_ITEM,
    payload: item
})


export const changeItemCount = (itemId, amount) => ({
    type: Types.CHANGE_ITEM_COUNT,
    payload: {
        itemId: itemId,
        amount: amount
    }
})


export const startClearItem = (item) => ({
    type: Types.START_CLEAR_ITEM,
    payload: item
})

export const clearItem = itemId => ({
    type: Types.CLEAR_ITEM,
    payload: itemId
})

export const cancelClearItem = (item) => ({
    type: Types.CANCEL_CLEAR_ITEM
})



export const changeItemCountAsync = (itemId, amount) => (dispatch, getState) => {
    const cartItem = getState().cart.items.find(item => item.id === itemId)
    if(amount === -1 && cartItem.count === 1) {
        dispatch(startClearItem(cartItem))
    } else {
        dispatch(changeItemCount(itemId, amount))
    }
}


export const applyCoupon = couponCode => ({
    type: Types.APPLY_COUPON,
    payload: couponCode
})


export const checkoutSuccess = () => ({
    type: Types.CHECKOUT_SUCCESS
})