import Types from './shop.types'
import { getFilteredItems, getNextPage, sortRandomly } from './shop.utils'

import SHOP_ITEMS from "./shop.data"

const INITIAL_STATE = {
    shopItems: sortRandomly(SHOP_ITEMS),
    displayedItems: [],
    currentPage: 0
}


const shopReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action
    const { shopItems, displayedItems, currentPage } = state
    switch(type) {
        case Types.FILTER_ITEMS :
            const filterdItems = sortRandomly(getFilteredItems(SHOP_ITEMS, payload))
            return {
                ...state,
                shopItems: filterdItems,
                displayedItems: getNextPage(filterdItems, 1),
                currentPage: 1,
            }

        case Types.LOAD_NEXT_PAGE :
            return {
                ...state,
                displayedItems: displayedItems.concat(getNextPage(shopItems, currentPage + 1)),
                currentPage: currentPage + 1
            }

        default :
            return state
    }
}

export default shopReducer