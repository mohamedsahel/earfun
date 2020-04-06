import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { toggleOnSale } from '../../redux/filter/filter.actions'


import * as S from './on-sale-filter.styles'


const OnsaleFilter = () => {
    const onSale = useSelector(state => state.filter.filters.onSale)
    const dispatch = useDispatch( )
    return (
        <S.Container>
            <S._BasicCheckbox 
            checked={onSale}
            onClick={() => dispatch(toggleOnSale())}
            />
            On sale
        </S.Container>
    )
}

export default OnsaleFilter