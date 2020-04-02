import React from 'react'
import { useSelector } from 'react-redux'

import CartItemsWrapper from './cart-items-wrapper.component'

const CartItemsWrapperContainer = () => {
    const cartItems = useSelector(state => state.cart.items)

    return <CartItemsWrapper items={cartItems} />
}

export default CartItemsWrapperContainer