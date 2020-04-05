import React from 'react'

import { LightBox, BasicCheckbox } from '..'

import * as S from './filter-box.styles'

const FilterCard = () => {
    return  (
        <LightBox>
            <S.Container>
                <BasicCheckbox />
            </S.Container>
        </LightBox>
    )
}

export default FilterCard