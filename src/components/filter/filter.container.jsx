import React from 'react'
import { useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'

import { filterSelectorFunc } from "../../selectors/filter.selectors"

import DEFAULT_FILTERS from '../../redux/filter/filter.data'

import Filter from './filter.component'


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


const FilterContainer = ({ filterName='colors' ,...otherProps}) => {
    const filter = useSelector(filterSelectorFunc(filterName))
    const isAllOptionsSet = () => filter.size === defaultFilters[filterName].length

    return <Filter 
    filterName={filterName}
    filter={filter} 
    isAllOptionsSet={isAllOptionsSet} 
    titles={titles}
    defaultFilters={defaultFilters}
    {...otherProps} 
    />
}

FilterContainer.propTypes = {
    filterName: PropTypes.oneOf(['types', 'connectWith', 'colors', 'brands'])
}

export default FilterContainer