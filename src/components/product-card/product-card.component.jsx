import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { cartItemsSelector } from "../../selectors/cart.selectors";
import { getDiscountedValue } from '../../utils'
import { addItem, clearItem } from '../../redux/cart/cart.actions'

import * as S from './product-card.styles'

const ProductCard = ({ item }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(cartItemsSelector)
    return(
        <S.Container color={item.color} >
            <S.Image src={item.imageUrl} alt={item.title} />
            {
                item.discount > 0 && <S.DiscountLabelIcon discount={item.discount} />
            }
            <S.Title> {item.title} </S.Title>
            <S.Price>
                $ {
                    item.discount > 0 ? getDiscountedValue(item.price, item.discount) : item.price
                }
                
            </S.Price>
            {
                item.discount > 0 && 
                    <S.OldPrice>
                        $ {item.price}
                    </S.OldPrice>
            }
            {
                !cartItems.find(cartItem => cartItem.id === item.id) ? 
                <S.PlusIcon onClick={() => dispatch(addItem(item))} > &#43; </S.PlusIcon>
                : <S.PlusIcon onClick={() => dispatch(clearItem(item.id))} > &#8722; </S.PlusIcon>
            }
        </S.Container>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductCard