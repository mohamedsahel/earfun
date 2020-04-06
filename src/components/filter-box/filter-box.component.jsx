import React from 'react'

import { LightBox, Filter } from '..'

import * as S from './filter-box.styles'

const FilterCard = () => {
    return  (
        <LightBox>
            <S.Container>
                <Filter filterName='brands' /> 
            </S.Container>
        </LightBox>
    )
}

export default FilterCard