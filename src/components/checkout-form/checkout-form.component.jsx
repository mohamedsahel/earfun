import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { clearCart } from '../../redux/cart/cart.actions'

import { CheckoutFields, Button } from '..'

import * as S from './checkout-form.styles'

const CheckoutForm = ({ amount }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()
        history.push('./checkout', {checkout: 'success'})
        dispatch(clearCart())
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