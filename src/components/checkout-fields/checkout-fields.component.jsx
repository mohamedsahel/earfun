import React from 'react'

import { Input } from '..'

import * as S from './checkout-fields.styles'

const CheckoutFields = () => {
    return (
        <>
            <S.Title>
                Personal Details
            </S.Title>
            <Input
            label='Full Name'
            name='name'
            // required
             />
            <Input
            label='Email'
            type='email'
            name='email'
            // required
             />
            <Input 
            label='City'
            name='city'
            // required
            />
            <Input
            label='Address'
            name='address'
            // required
             />
             <Input 
             label='Zip Code'
             name='zip'
            //  required
             />
             <S.Title>
                 Credit Card
             </S.Title>
            <Input 
            label='Card number'
            // required
            />
            <Input 
            label='MM/YY'
            // required
            />
            <Input 
            label='CVC'
            // required
            />
        </>
    )
}

export default CheckoutFields