import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { cartItemsSelector } from "../../selectors/cart.selectors"
import { addItemAsync, startClearItem } from '../../redux/cart/cart.actions'

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
            onClick={() => dispatch(addItemAsync(item))} 
            {...otherProps}
            > &#43; 
            </S.PlusIcon>
            : 
            <S.PlusIcon 
            onClick={() => dispatch(startClearItem(item))} 
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