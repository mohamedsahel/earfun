import React from 'react'
import { useSelector } from 'react-redux'

import { cartItemsSelector } from "../../selectors/cart.selectors";

import CartItemsWrapper from './cart-items-wrapper.component'

const CartItemsWrapperContainer = props => {
    const cartItems = useSelector(cartItemsSelector)

    return <CartItemsWrapper items={cartItems} {...props} />
}

export default CartItemsWrapperContainer