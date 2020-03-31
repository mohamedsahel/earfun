import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as DiscountLabelIcon } from '../../assests/icons/discount-label-icon.svg'

import * as S from './discount-label.styles'

const DiscountLabel = percentage => {
    return (
        <S.Container>
            <S.Discount>30 %</S.Discount>
            <DiscountLabelIcon />
        </S.Container>
    )
}

export default DiscountLabel