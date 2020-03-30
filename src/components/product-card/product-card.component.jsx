import React from 'react'
import PropTypes from 'prop-types'


import * as S from './product-card.styles'

const ProductCard = ({ item }) => {
    return(
        <div>
            {item.title}
        </div>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default ProductCard