import Types from './filter.types'


export const setFilter = (filterName, option) => ({
    type: Types.SET_FILTER,
    payload: { filterName, option }
})

export const toggleOnSale = () => ({
    type: Types.TOGGLE_ON_SALE
})