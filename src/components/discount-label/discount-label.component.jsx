import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as DiscountLabelIcon } from '../../assests/icons/discount-label-icon.svg'

import * as S from './discount-label.styles'

const DiscountLabel = ({ discount, className }) => {
    return (
        <S.Container className={className} >
            <S.Discount>{discount} %</S.Discount>
            <DiscountLabelIcon />
        </S.Container>
    )
}

DiscountLabel.propTypes= {
    discount: PropTypes.number.isRequired
}

export default DiscountLabel