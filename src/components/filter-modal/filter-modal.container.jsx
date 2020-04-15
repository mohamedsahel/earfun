import React from 'react'
import { useSelector } from 'react-redux'

import { isFilteringSelector } from "../../selectors/filter.selectors";

import FilterModal from './filter-modal.component'


const FilterModalContainer = props => {
    const isFiltering = useSelector(isFilteringSelector)
    return isFiltering ? <FilterModal {...props} /> : null
}

export default FilterModalContainer