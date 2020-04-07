import React from 'react'
import { useSelector } from 'react-redux'

import FilterBox from './filter-box.component'


const FilterBoxContainer = props => {
    const isFiltering = useSelector(state => state.filter.isFiltering)
    return isFiltering ? <FilterBox {...props} /> : null
}

export default FilterBoxContainer