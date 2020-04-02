import React from 'react'
import { useSelector } from 'react-redux'

import CartItemsWrapper from './cart-items-wrapper.component'

const CartItemsWrapperContainer = props => {
    const cartItems = useSelector(state => state.cart.items)

    return <CartItemsWrapper items={cartItems} {...props} />
}

export default CartItemsWrapperContainer