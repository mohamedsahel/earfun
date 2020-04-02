import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

import * as S from './product-card.styles'

const ProductCard = ({ item }) => {
    const dispatch = useDispatch()

    return(
        <S.Container color={item.color} >
            <S.Image src={item.imageUrl} alt={item.title} />
            {
                item.discount > 0 && <S.DiscountLabelIcon discount={item.discount} />
            }
            <S.Title> {item.title} </S.Title>
            <S.Price>
                $ {
                    item.discount > 0 ? 
                        (Math.floor(item.price * item.discount / 30))
                    : item.price
                }
                
            </S.Price>
            {
                item.discount > 0 && 
                    <S.OldPrice>
                        $ {item.price}
                    </S.OldPrice>
            }
            <S.PlusIcon 
              icon='plus' 
              size='6rem' 
              svgSize='25%' 
              onClick={() => dispatch(addItem(item))}
              />
        </S.Container>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductCard