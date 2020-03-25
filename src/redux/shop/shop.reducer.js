import shopActionsTypes from './shop.types'
import { getFilteredItems } from './shop.utils'

import SHOP_ITEMS from "./shop.data"

const INITIAL_STATE = {
    shopItems: SHOP_ITEMS
}


const shopReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type) {
        case shopActionsTypes.FILTER_ITEMS :
            return {
                ...state,
                shopItems: getFilteredItems(state.shopItems, payload)
            }
        default :
            return state
    }
}

export default shopReducer