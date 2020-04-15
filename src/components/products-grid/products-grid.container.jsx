import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loadNextPage } from '../../redux/shop/shop.actions'
import { shopItemsSelector, displayedItemsSelector } from "../../selectors/shop.selectors";

import ProductsGrid from './products-grid.component'


const ProductsGridContainer = () => {
    const items = useSelector(displayedItemsSelector)
    const dispatch = useDispatch()
    const shopItems = useSelector(shopItemsSelector)
    const observerRef = useRef()
    

    useEffect(() => {

        const scrollObserver = node => {
        const func = enteries => {
            enteries.forEach(entery => {
                if(entery.isIntersecting) {
                    dispatch(loadNextPage())
                }
                })
            } 

            let observer = new IntersectionObserver(func)
            observer.observe(node)
        }

        scrollObserver(observerRef.current)
    }, [dispatch])
    
    
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
