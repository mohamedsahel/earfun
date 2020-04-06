import React from 'react'

import { LightBox, Filter, OnsaleFilter, Button } from '..'

import * as S from './filter-box.styles'

const FilterCard = () => {
    return  (
        <LightBox>
            <S.Container>
                <Filter filterName='types' />
                <Filter filterName='connectWith' />
                <Filter filterName='colors' />
                <Filter filterName='brands' />
                <OnsaleFilter  />
                <S.Actions>
                    <S.Cancel>Cancel</S.Cancel>
                    <Button value='Apply' />
                </S.Actions>
            </S.Container>
        </LightBox>
    )
}

export default FilterCard