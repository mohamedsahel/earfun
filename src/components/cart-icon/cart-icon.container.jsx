import React from 'react'
import { useSelector } from 'react-redux'

import { cartItemsCountSelector } from "../../selectors/cart.selectors"

import CartIcon from './cart-icon.component'

const CartIconContainer = () => {
    const cartItemsCount = useSelector(cartItemsCountSelector)
    return <CartIcon cartCount={cartItemsCount} />
}

export default CartIconContainer