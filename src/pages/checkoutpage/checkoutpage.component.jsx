import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { CheckoutForm, CheckoutSuccess } from '../../components'



const CheckoutPage = () => {
    const location = useLocation()
    const checkoutSuccess = useSelector(state => state.cart.checkoutSuccess)
    return (
        <div >{
            !checkoutSuccess ? 
            <CheckoutForm amount={location.state.amount} />
            : <CheckoutSuccess />
            }
        </div>
    )
}

export default CheckoutPage