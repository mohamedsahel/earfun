import React from 'react'

import { LightBox, OnsaleFilter } from '..'

import * as S from './filter-box.styles'

const FilterCard = () => {
    return  (
        <LightBox>
            <S.Container>
                <OnsaleFilter  /> 
            </S.Container>
        </LightBox>
    )
}

export default FilterCard