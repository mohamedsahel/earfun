import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { cartItemsSelector } from "../../selectors/cart.selectors"
import { addItem, clearItem } from '../../redux/cart/cart.actions'

import * as S from './add-to-cart-button.styles'


const AddToCartButton = ({ item, ...otherProps }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(cartItemsSelector)

    const isAddedToCart = cartItems.find(cartItem => cartItem.id === item.id)
    return (
        <>
        {
            !isAddedToCart ? 
            <S.PlusIcon 
            onClick={() => dispatch(addItem(item))} 
            {...otherProps}
            > &#43; 
            </S.PlusIcon>
            : 
            <S.PlusIcon 
            onClick={() => dispatch(clearItem(item.id))} 
            {...otherProps}
            > &#8722; </S.PlusIcon>
        }
        </>
    )
}

AddToCartButton.propTypes = {
    item: PropTypes.object.isRequired
}

export default AddToCartButton