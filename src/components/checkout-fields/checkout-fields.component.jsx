import React from 'react'

import { Input } from '..'

const CheckoutFields = () => {
    return (
        <>
            <Input
            label='Full Name'
            name='name'
            required
             />
            <Input
            label='Email'
            type='email'
            name='email'
            required
             />
            <Input 
            label='Phone Number'
            name='phone'
            required
            />
            <Input
            label='Address'
            name='address'
            required
             />
             <Input 
             label='Zip Code'
             name='zip'
             required
             />
        </>
    )
}

export default CheckoutFields