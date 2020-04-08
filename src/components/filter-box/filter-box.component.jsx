import React from 'react'
import { useDispatch } from 'react-redux'

import { cancelFiltering, applyFiltersAsync } from '../../redux/filter/filter.actions'

import { LightBox, Filter, OnsaleFilter, Button } from '..'

import * as S from './filter-box.styles'

const FilterBox = () => {
    const dispatch = useDispatch()
    return  (
        <LightBox>
            <S.Container>
                <Filter filterName='types' />
                <Filter filterName='connectWith' />
                <Filter filterName='colors' />
                <Filter filterName='brands' />
                <OnsaleFilter />
                <S.Actions>
                    <S.Cancel
                    onClick={() => dispatch(cancelFiltering())}
                    > Cancel </S.Cancel>
                    <Button value='Filter'
                    onClick={() => dispatch(applyFiltersAsync())}
                     />
                </S.Actions>
            </S.Container>
        </LightBox>
    )
}

export default FilterBox