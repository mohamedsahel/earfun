import Types from './filter.types'
import { filterItems } from "../shop/shop.actions"


export const startFiltering = () => ({
    type: Types.START_FILTERING
})

export const cancelFiltering = () => ({
    type: Types.CANCEL_FILTERING
})

export const applyFilters = () => ({
    type: Types.APPLY_FILTERS
})

export const applyFiltersAsync = () => (dispatch, getState) => {
    dispatch(applyFilters())
    return dispatch(filterItems(getState().filter.applyedFilters))
}

export const setFilter = (filterName, option) => ({
    type: Types.SET_FILTER,
    payload: { filterName, option }
})

export const toggleOnSale = () => ({
    type: Types.TOGGLE_ON_SALE
})

