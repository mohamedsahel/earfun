import React from 'react'
import PropTypes from 'prop-types'

import * as S from './product-card.styles'


const ProductCard = ({ item }) => {
    return(
        <S.Container color={item.color} >
            <S.Image src={item.imageUrl} alt={item.title} />
            <S.Title> {item.title} </S.Title>
            <S.Price> $ {item.price} </S.Price>
            <S.PlusIcon icon='plus' size='6rem' svgSize='25%' />
        </S.Container>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductCard