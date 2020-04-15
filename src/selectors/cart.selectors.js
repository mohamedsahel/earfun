import { createSelector } from 'reselect';
import { getDiscountedValue } from '../utils'


export const cartSelector = state => state.cart

export const cartItemsSelector = createSelector(
    cartSelector,
    cart => cart.items
)

export const cartItemsCountSelector = createSelector(
    cartItemsSelector,
    cartItems => cartItems.length
)

export const itemCountSelector = itemId => createSelector(
    cartItemsSelector,
    cartItems => cartItems.find(item => item.id === itemId).count
)

export const itemToClearSelector = createSelector(
    cartSelector,
    cart => cart.itemToClear
)


// coupon
export const couponSelector = createSelector(
    cartSelector,
    cart => cart.coupon
)

// order card
export const cartItemsTotalSelector = createSelector(
    [cartSelector, cartItemsSelector],
    (cart, items) => {
        const originTotal = items.reduce((acc, item) => acc + getDiscountedValue(item.price * item.count,  item.discount) 
        , 0)

        return cart.coupon && cart.coupon.discount ? getDiscountedValue(originTotal, cart.coupon.discount)
        : originTotal
    }
)

export const shippingCostSelector = createSelector(
    cartItemsSelector,
    items => items.reduce((acc, item) => acc + item.count, 0) * 3
)



