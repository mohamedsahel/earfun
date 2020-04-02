import React from 'react'

import * as S from './cart-items-wrapper.styles'

import { CartItem } from '..'

const CartItemsWrapper = ({ items, className }) => {
    return (
        <S.Wrapper className={className}>
            {
                items.map(item => <CartItem key={item.id} item={item} />)
            }
        </S.Wrapper>
    )
}

export default CartItemsWrapper