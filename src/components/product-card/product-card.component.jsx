import React from 'react'
import PropTypes from 'prop-types'

import { DiscountLabel } from '..'

import * as S from './product-card.styles'


const ProductCard = ({ item }) => {
    return(
        <S.Container color={item.color} >
            <S.Image src={item.imageUrl} alt={item.title} />
            <DiscountLabel />
            <S.Title> {item.title} </S.Title>
            <S.Price> {item.id} </S.Price>
            <S.PlusIcon icon='plus' size='6rem' svgSize='25%' />
        </S.Container>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductCard