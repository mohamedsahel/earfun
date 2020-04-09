import React from 'react'

import { CheckoutFields, Button } from '..'

import * as S from './checkout-form.styles'

const CheckoutForm = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <S.Container onSubmit={handleSubmit} >
            <CheckoutFields />
            <Button
            type='submit'
            style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                width: '100%',
                marginTop: '6rem',
                padding: '1.6rem'
            }}
            >Pay $23</Button>
        </S.Container>
    )
}

export default CheckoutForm