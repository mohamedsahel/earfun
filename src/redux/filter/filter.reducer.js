import Types from "./filter.types"
import { toggleInSet } from './filter.utils'


const INITIAL_STATE = {
    filters: {
        types: new Set(['headphones', 'earphones']),
        connectWith: new Set(['bluetooth', 'cable']),
        priceRange: [20, 120],
        colors: new Set(['red', 'blue', 'black', 'white', 'pink', 'gray', 'gold']),
        brands: new Set(['jbl', 'akg', 'sony', 'bose', 'beats']),
        onSale: false
    }
}

const filterReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action

    switch(type) {
        case Types.SET_FILTER : 
            const { filterName, option } = payload 
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [filterName]: toggleInSet(state.filters[filterName], option)
                }
            }

        case Types.SET_PRICE_RANGE: 
            return {
                ...state,
                priceRange: [...payload]
            }

        case Types.SET_COLORS: 
            return {
                ...state,
                colors: new Set(payload)
            }

        case Types.SET_ONSALE: 
            return {
                ...state,
                onSale: payload
            }

        default :
            return state
    }
}


export default filterReducer