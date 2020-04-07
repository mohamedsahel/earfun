import shopActionsTypes from './shop.types'

export const filterItems = filters => ({
    type: shopActionsTypes.FILTER_ITEMS,
    payload: filters
})
