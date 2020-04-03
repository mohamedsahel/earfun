import types from './cart.types'

export const addItem = item => ({
    type: types.ADD_ITEM,
    payload: item
})


export const changeItemCount = (itemId, amount) => ({
    type: types.CHANGE_ITEM_COUNT,
    payload: {
        itemId: itemId,
        amount: amount
    }
})


export const startClearItem = (item) => ({
    type: types.START_CLEAR_ITEM,
    payload: item
})

export const clearItem = itemId => ({
    type: types.CLEAR_ITEM,
    payload: itemId
})

export const cancelClearItem = (item) => ({
    type: types.CANCEL_CLEAR_ITEM
})



export const changeItemCountAsync = (itemId, amount) => (dispatch, getState) => {
    const cartItem = getState().cart.items.find(item => item.id === itemId)
    if(amount === -1 && cartItem.count === 1) {
        dispatch(startClearItem(cartItem))
    } else {
        dispatch(changeItemCount(itemId, amount))
    }
}