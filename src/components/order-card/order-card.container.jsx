import React from 'react'
import { useSelector } from 'react-redux'

import { getItemsTotal } from './utils'

import OrderCard from './order-card.component'

const OrderCardContainer = props => {
    const cartItems = useSelector(state => state.cart.items)
    const itemsTotal = getItemsTotal(cartItems)
    const shipping = cartItems.length * 4
    const taxes = 3.2

    return <OrderCard  
            itemsTotal={itemsTotal} 
            shipping={shipping}
            taxes={taxes}
            {...props} />
}

export default OrderCardContainer