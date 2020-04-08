import { createSelector } from 'reselect'

const filterSelector = state => state.filter

export const isFilteringSelector = createSelector(
    filterSelector,
    filter => filter.isFiltering
)

export const onSaleFilterSelector = createSelector(
    filterSelector,
    filter => filter.filters.onSale
)