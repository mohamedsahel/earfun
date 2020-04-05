import React from 'react'

import { LightBox, TypesFilter } from '..'

import * as S from './filter-box.styles'

const FilterCard = () => {
    return  (
        <LightBox>
            <S.Container>
                <TypesFilter />
            </S.Container>
        </LightBox>
    )
}

export default FilterCard