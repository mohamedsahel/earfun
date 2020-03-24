import shopActionsTypes from './shop.types'

export const filterItems = filters => ({
    type: shopActionsTypes.FILTER_ITEMS,
    payload: filters
})


const filtersExample = {
    types: ['headphones', 'earphones'],
    connectWith: ['cable', 'bluethooth'],
    priceRange: [20, 80],
    colors: ['red', 'blue', 'black'],
    brands: ['jbl', 'beats', 'sony', 'bose', 'akg'],
    onSale: true
}