import React from 'react'
import PropTypes from 'prop-types'

import { ProductCard } from '..'

import * as S from './products-grid.styles'

const ProductsGrid = ({ items }) => {
    return (
        <S.Container>
        {
            !items.length ? <S.NoResults>No Results Found !!</S.NoResults>
            : items.map((item, index) => <ProductCard key={index} item={item} />)
        }
        </S.Container>
    )
}


ProductsGrid.propTypes = {
    items: PropTypes.array
}


export default ProductsGrid