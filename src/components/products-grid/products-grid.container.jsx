import React from 'react'
import { useSelector } from "react-redux";

import { shopItemsSelector } from "../../selectors/shop.selectors";
import ProductsGrid from './products-grid.component'

const ProductsGridContainer = () => {
    const items = useSelector(shopItemsSelector)
    
    return <ProductsGrid items={items} />
}

export default ProductsGridContainer