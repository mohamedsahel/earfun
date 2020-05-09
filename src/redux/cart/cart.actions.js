import Types from './cart.types'
import { showSnackbar, hideSnackbar } from '../snackbar/snackbar.actions'

export const addItem = item => ({
    type: Types.ADD_ITEM,
    payload: item
})


const showHideSnackbar = (dispatch, message) => {
    const showSnackbarAsync = new Promise(resolve => {
        setTimeout(() => {
            dispatch(showSnackbar(message))
            resolve()
        }, 300)
    })
    
    showSnackbarAsync.then(() => setTimeout(() => dispatch(hideSnackbar()), 4000))
    
}

export const addItemAsync = item => (dispatch, getState) => {
    if(getState().snackbar.isShown) dispatch(hideSnackbar()) 

    dispatch(addItem(item))
    showHideSnackbar(dispatch, 'Item successfuly added to your bag')
}


export const changeItemCount = (itemId, amount) => ({
    type: Types.CHANGE_ITEM_COUNT,
    payload: {
        itemId: itemId,
        amount: amount
    }
})


export const startClearItemAsync = (item) => ({
    type: Types.START_CLEAR_ITEM,
    payload: item
})

export const startClearItem = item => (dispatch, getState) => {
    if(getState().snackbar.isShown) dispatch(hideSnackbar()) 
    dispatch(startClearItemAsync(item))
}

export const clearItem = itemId => ({
    type: Types.CLEAR_ITEM,
    payload: itemId
})

export const clearItemAsync = itemId => dispatch => {
    dispatch(clearItem(itemId))
    showHideSnackbar(dispatch, 'Item cleared from your bag')
}


export const cancelClearItem = () => ({
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

export const clearCart = () => ({
    type: Types.CLEAR_CART
})