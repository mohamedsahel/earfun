import React from 'react'
import { useSelector } from "react-redux"

import { sortRandomly } from "../../utils"

import { shopItemsSelector } from "../../selectors/shop.selectors";
import ProductsGrid from './products-grid.component'

const ProductsGridContainer = () => {
    const items = useSelector(shopItemsSelector)
    
    return <ProductsGrid items={sortRandomly
        (items)} />
}

export default ProductsGridContainer