import { createSelector } from 'reselect';
import { getDiscountedValue } from '../utils'


export const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
    cartSelector,
    cart => cart.items
)

export const cartItemsTotalSelector = createSelector(
    cartItemsSelector,
    items => items.reduce((acc, item) => acc + getDiscountedValue(item.price * item.count,  item.discount)
    , 0)
)

export const itemToClearSelector = createSelector(
    cartSelector,
    cart => cart.itemToClear
)
