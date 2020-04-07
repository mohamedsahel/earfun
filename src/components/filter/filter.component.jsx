import React from 'react'
import { useSelector, useDispatch } from "react-redux"

import DEFAULT_FILTERS from '../../redux/filter/filter.data'

import { setFilter } from '../../redux/filter/filter.actions'

import SVG from './filter.assests'
import { ColorCheckbox } from '..'

import * as S from './filter.styles'


const Filter = ({ filterName='types', ...otherProps }) => {

    const defaultFilters = {
        types: Array.from(DEFAULT_FILTERS['types']),
        connectWith: Array.from(DEFAULT_FILTERS['connectWith']),
        brands: Array.from(DEFAULT_FILTERS['brands']),
        colors: Array.from(DEFAULT_FILTERS['colors'])
    }
    
    const titles = {
        types: 'Type',
        connectWith: 'Connect with',
        brands: 'Brand',
        colors: 'Color'
    }

    const filter = useSelector(state => state.filter.filters[filterName])
    const dispatch = useDispatch()


    const isAllOptionsSet = () => filter.size === defaultFilters[filterName].length

    const handleAllBoxClick = () => {
        if(isAllOptionsSet()) dispatch(setFilter(filterName, []))
        else dispatch(setFilter(filterName, defaultFilters[filterName]))
    }


    return (
        <S.Container {...otherProps}>
            <S.Title>
                {titles[filterName]}
                <S._BasicCheckbox 
                onClick={handleAllBoxClick}
                checked={isAllOptionsSet()}
                />
            </S.Title>
            <S.Options 
            filterName={filterName}
            >
            {
                filterName === 'colors' ? 
                defaultFilters['colors'].map((color, index) => (
                    <ColorCheckbox 
                    key={index}
                    color={color} 
                    checked={filter.has(color)} 
                    onClick={() => dispatch(setFilter('colors', color))}
                    />
                )) : 
                defaultFilters[filterName].map((option, index) => {
                    const Svg = SVG[option]
                    return (
                    <S._ContentCheckbox 
                    key={index}
                    checked={filter.has(option)} 
                    onClick={() => dispatch(setFilter(filterName, option))}
                    filterName={filterName}
                    coloredSvg={option === 'jbl' || option === 'beats'}
                    >
                        <Svg />
                        {
                            filterName !== 'brands' && option
                        } 
                    </S._ContentCheckbox>
                )})
            }
            </S.Options>
        </S.Container>
    )
    
}

export default Filter