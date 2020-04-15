import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loadNextPage } from '../../redux/shop/shop.actions'
import { shopItemsSelector, displayedItemsSelector } from "../../selectors/shop.selectors"

import { useIntersection } from '../../hooks'

import ProductsGrid from './products-grid.component'


const ProductsGridContainer = () => {
    const items = useSelector(displayedItemsSelector)
    const shopItems = useSelector(shopItemsSelector)
    const dispatch = useDispatch()
    const observerRef = useRef(null)
    let isIntersection = useIntersection(observerRef)
    

    useEffect(() => {
        if(isIntersection) dispatch(loadNextPage())
    }, [isIntersection, dispatch])
    
    useEffect(() => {
        window.scrollTo({top: 0})
    }, [shopItems])
        
        
    return (
    <div >
        <ProductsGrid  items={items} noResults={!shopItems.length} />
        <div
        style={{ height: '1rem' }}
        ref={observerRef} />
    </div>
    )
}

export default ProductsGridContainer
