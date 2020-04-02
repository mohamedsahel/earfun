import React, { useRef, useState } from 'react'

import * as S from './order-card.styles'

const VALIDE_COUPON_CODES = {
    new2020: 50,
    a2a3for: 20,
    thank40: 40
}

const OrderCard = ({ itemsTotal, shipping, taxes, className }) => {
    const input = useRef()
    const [coupon, setCoupon] = useState(null)
    let orderTotal = itemsTotal + shipping + taxes

    if(coupon) {
        orderTotal = !coupon.discount ? orderTotal : orderTotal * coupon.discount / 100 
    }

    const handleCodeSubmit = e => {
        e.persist()
        e.preventDefault()
        const code = e.target.elements[0].value
        
        if(code !== '') {
            setCoupon({
                code: code,
                discount: VALIDE_COUPON_CODES[code]
            })
            input.current.value = ''
        } 
    }

    return (
        <S.Container className={className} >
            <OrderCard.Row title='Items Total' total={'$ ' + itemsTotal} />
            <OrderCard.Row title='Shipping' total={'$ ' + shipping} />
            <OrderCard.Row title='Taxes (5%)' total={'$ ' + taxes} />
            {
                coupon && (
                    coupon.discount ? 
                    <div>
                        <S.Code>&#10003; {coupon.code}</S.Code>
                        <S.Discount>-{coupon.discount} %</S.Discount>
                    </div>
                    : <S.UnvalideCoupon>Unvalide coupon code : {coupon.code} </S.UnvalideCoupon>
                )
            }
            
            <S.CouponForm onSubmit={e => handleCodeSubmit(e)} >
                <S.Input placeholder='Coupon code ..' ref={input} />
                <S.Submit 
                type='submit'
                value='Apply' 
                />
            </S.CouponForm>
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