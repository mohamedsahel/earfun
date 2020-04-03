import React from 'react'
import { useSelector } from 'react-redux'

import { cartItemsSelector } from "../../selectors/cart.selectors";

import CartIcon from './cart-icon.component'

const CartItemContainer = () => {
    const cartItems = useSelector(cartItemsSelector)
    return <CartIcon cartCount={cartItems.length} />
}

export default CartItemContainer