import React from 'react'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'

import { Button } from '..'

import * as S from './checkout-success.styles'

const CheckoutSuccess = props => {
    return (
        <S.Container {...props} >
        <Confetti />
        <S.Content>
            <S.BigTitle>Congratulation !!</S.BigTitle>
            <S.SmallTitle>Your order has been recieved</S.SmallTitle>
            <Link to='/shop' >
                <Button>Shopping More</Button>
            </Link>
        </S.Content>
        </S.Container>
    )
}

export default CheckoutSuccess