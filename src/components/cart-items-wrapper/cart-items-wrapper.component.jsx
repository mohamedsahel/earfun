import React from 'react'

import * as S from './cart-items-wrapper.styles'


import { DiscountLabel } from "..";

console.log(DiscountLabel)

const CartItemsWrapper = ({ items, className }) => {
    console.log('hi')
    return (
        <S.Wrapper className={className}>
            {
                items.map(item => <div>{item.title}</div>)
            }
        </S.Wrapper>
    )
}

export default CartItemsWrapper