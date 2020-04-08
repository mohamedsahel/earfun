import React from 'react'

import { CouponValidator } from '..'

import * as S from './order-card.styles'


const OrderCard = ({ itemsTotal, shipping, taxes, className }) => {
    let orderTotal = itemsTotal + shipping + taxes

    return (
        <S.Container className={className} >
            <OrderCard.Row title='Items Total' total={'$ ' + itemsTotal} />
            <OrderCard.Row title='Shipping' total={'$ ' + shipping} />
            <OrderCard.Row title='Taxes (2.5%)' total={'$ ' + taxes} />
            <CouponValidator />
            <div>
                <S.BigTitle>Order total</S.BigTitle>
                <S.Total>$ {orderTotal} </S.Total>
            </div>
            <S._CheckoutButton value='Checkout Now' />
        </S.Container>
    )
}


OrderCard.Row = ({ title, total }) => (
    <div>
        <S.RowTitle>{title}</S.RowTitle>
        <S.RowTotal>{total} </S.RowTotal>
    </div>
)

export default OrderCard;