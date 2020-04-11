import React, { useEffect } from 'react'

import { ProductsGrid } from '../../components'


const ShopPage = () => {
        
    useEffect(() => {
        console.log('first')
        window.scrollTo({top: 0})
    }, [])

    return (
        <div style={{paddingTop: '5rem'}}>
            <ProductsGrid />
        </div>
    )
}

export default ShopPage