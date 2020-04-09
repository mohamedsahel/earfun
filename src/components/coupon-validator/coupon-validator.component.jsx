import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { applyCoupon } from '../../redux/cart/cart.actions'

import * as S from './coupon-validator.styles'


const CouponValidator = () => {

    const coupon = useSelector(state => state.cart.coupon)
    const dispatch = useDispatch()

    const handleCodeSubmit = e => {
        e.preventDefault()
        const code = e.target.couponCode.value
        
        if(code !== '') {
            e.target.couponCode.value = ''
            dispatch(applyCoupon(code))
        } 
    }


    return (
        <S.Container>
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
            
            <S.CouponForm onSubmit={handleCodeSubmit} >
                <S.Input 
                placeholder='Coupon code ..' 
                name='couponCode' />
                <S.Submit 
                type='submit'
                value='Apply' 
                />
            </S.CouponForm>
        </S.Container>
    )
}


export default CouponValidator