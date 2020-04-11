import React from 'react'
import PropTypes from 'prop-types'

import { getDiscountedValue } from '../../utils'

import { AddToCartButton } from '..'

import * as S from './product-card.styles'

const ProductCard = ({ item }) => {
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
            <AddToCartButton item={item} />
        </S.Container>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductCard