import React from 'react'

import * as S from './order-card.styles'

const OrderCard = ({ className }) => {
    return (
        <S.Container className={className} >
            <OrderCard.Row title='Items Total' total='$ 120' />
            <OrderCard.Row title='Shipping' total='$ 19' />
            <OrderCard.Row title='Taxes (5%)' total='$ 8' />
            <S.ValideCoupon>
                <S.Code>&#10003; EN12dd</S.Code>
                <S.Discount>-50 %</S.Discount>
            </S.ValideCoupon>
            <S.Coupon>
                <S.Input placeholder='Coupon code ..' />
                <S.Submit value='Apply' />
            </S.Coupon>
            <div>
                <S.BigTitle>Order total</S.BigTitle>
                <S.Total>$ 90</S.Total>
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