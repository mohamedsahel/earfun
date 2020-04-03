import React from 'react'
import PropTypes from 'prop-types'

import * as S from './cart-icon.styles'

const CartIcon = ({ cartCount }) => {
    return (
        <S.Container>
            <S._Icon icon='bag' size='3.8rem' svgSize='45%' />
            {
                !!cartCount && <S.Count>{cartCount}</S.Count>
            }
        </S.Container>
    )
}

CartIcon.propTypes = {
    cartCount: PropTypes.number
}

export default CartIcon