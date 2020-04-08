import React from 'react'
import { useSelector } from 'react-redux'

import { isFilteringSelector } from "../../selectors/filter.selectors";

import FilterBox from './filter-box.component'


const FilterBoxContainer = props => {
    const isFiltering = useSelector(isFilteringSelector)
    return isFiltering ? <FilterBox {...props} /> : null
}

export default FilterBoxContainer