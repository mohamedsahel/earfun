import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import { setTypes } from '../../redux/filter/filter.actions'

import { BasicCheckbox, Icon, ContentCheckbox } from ".."
import * as S from './types-filter.styles'

const TypesFilter = () => {
    const typesFilter = useSelector(state => state.filter.filters.types)
    const dispatch = useDispatch()

    const handleAllBoxClick = () => {
        if(typesFilter.size === 2) dispatch(setTypes(new Set()))
        else dispatch(setTypes(new Set(['Headphones', 'Earphones'])))
    }

    return (
        <S.Container>
            <S.Title>
                Type
                <S._BasicCheckbox 
                onClick={handleAllBoxClick}
                checked={typesFilter.size === 2}
                />
            </S.Title>
            <S.Options>
                <ContentCheckbox>
                    <Icon icon='headphones'  size='2rem' svgSize='100%' />
                    Headphones
                </ContentCheckbox>

                <ContentCheckbox>
                    {/* <Icon icon='earphones' /> */}
                    <S.Label>Earphones</S.Label>
                </ContentCheckbox>
            </S.Options>    
        </S.Container>
    )
}

export default TypesFilter