import { createSelector } from 'reselect';

export const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
    cartSelector,
    cart => cart.items
)

export const itemToClearSelector = createSelector(
    cartSelector,
    cart => cart.itemToClear
)
