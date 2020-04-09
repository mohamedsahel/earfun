import React from 'react'

import { Input } from '../../components'

import * as S from './checkoutpage.styles'

const CheckoutPage = () => {
    return (
        <S.Container>
            <Input label='Coupon code' />
        </S.Container>
    )
}

export default CheckoutPage