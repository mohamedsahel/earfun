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


export const clearItem = itemId => ({
    type: types.CLEAR_ITEM,
    payload: itemId
})