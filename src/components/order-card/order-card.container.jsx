import React from 'react'
import { useSelector } from 'react-redux'

import { cartItemsTotalSelector, shippingCostSelector } from "../../selectors/cart.selectors"

import OrderCard from './order-card.component'

const OrderCardContainer = props => {
    const itemsTotal = useSelector(cartItemsTotalSelector)
    const shipping = useSelector(shippingCostSelector)
    const taxes = Math.floor(itemsTotal * 2.5 / 100) 

    return <OrderCard  
            itemsTotal={itemsTotal} 
            shipping={shipping}
            taxes={taxes}
            {...props} />
}

export default OrderCardContainer