import React from 'react'
import { useDispatch } from "react-redux"
import { PropTypes } from "prop-types"

import { setFilter } from '../../redux/filter/filter.actions'

import SVG from './filter.assests.js'
import { ColorCheckbox } from '..'

import * as S from './filter.styles'


const Filter = ({ filterName, filter, isAllOptionsSet, titles, defaultFilters, ...otherProps }) => {

    const dispatch = useDispatch()

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


Filter.propTypes = {
    filterName: PropTypes.oneOf(['types', 'connectWith', 'colors', 'brands']),
    filter: PropTypes.object.isRequired,
    isAllOptionsSet: PropTypes.func.isRequired,
    titles: PropTypes.object.isRequired,
    defaultFilters: PropTypes.object.isRequired
}

export default Filter