import React from 'react'
import { useDispatch } from 'react-redux'

import { checkoutSuccess } from '../../redux/cart/cart.actions'

import { CheckoutFields, Button } from '..'

import * as S from './checkout-form.styles'

const CheckoutForm = ({ amount }) => {
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(checkoutSuccess())
    }

    return (
        <S.Container onSubmit={handleSubmit} >
            <CheckoutFields />
            <Button
            type='submit'
            style={{
                fontSize: '1.6rem',
                width: '100%',
                marginTop: '6rem',
                padding: '1.2rem',
                letterSpacing: '0.15rem'
            }}
            >Pay ${amount} </Button>
        </S.Container>
    )
}

export default CheckoutForm