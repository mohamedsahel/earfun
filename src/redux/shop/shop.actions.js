import Types from './shop.types'

export const filterItems = filters => ({
    type: Types.FILTER_ITEMS,
    payload: filters
})

export const loadNextPage = () => ({
    type: Types.LOAD_NEXT_PAGE
})