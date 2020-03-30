import React from 'react'
import { useSelector } from "react-redux";

import ProductsGrid from './products-grid.component'

const ProductsGridContainer = () => {
    const items = useSelector(state => state.shop.shopItems)
    
    return <ProductsGrid items={items} />
}

export default ProductsGridContainer