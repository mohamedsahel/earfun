import React from 'react'
import { useLocation } from 'react-router-dom'

import { CheckoutForm, CheckoutSuccess } from '../../components'


const CheckoutPage = () => {
    const location = useLocation()
    return (
        <div >
            {
                location.state.checkout === 'success' ? 
                <CheckoutSuccess />
                : <CheckoutForm amount={location.state.amount} />
            }
        </div>
    )
}

export default CheckoutPage