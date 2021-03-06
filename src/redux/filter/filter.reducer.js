import Types from "./filter.types"
import { toggleInSet } from './filter.utils'

const DEFAULT_FILTERS = {
        types: new Set(['headphones', 'earphones']),
        connectWith: new Set(['bluetooth', 'cable']),
        colors: new Set(['red', 'blue', 'black', 'white', 'pink', 'gray', 'green', 'gold']),
        brands: new Set(['jbl', 'akg', 'sony', 'bose', 'beats']),
        onSale: false
    }

const INITIAL_STATE = {
    applyedFilters: {...DEFAULT_FILTERS},
    filters: {
        types: new Set(),
        connectWith: new Set(),
        colors: new Set(),
        brands: new Set(),
        onSale: false
    },
    isFiltering: false
}



const filterReducer = (state=INITIAL_STATE, action) => {
    const { type, payload } = action

    switch(type) {
        case Types.START_FILTERING : 
            return {
                ...state,
                isFiltering: true
            }

        case Types.APPLY_FILTERS:
            return {
                ...state,
                applyedFilters: {...state.filters},
                isFiltering: false
            }

        case Types.CANCEL_FILTERING:
            return {
                ...state,
                isFiltering: false
            } 
            
        case Types.SET_FILTER : 
            const { filterName, option } = payload 
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [filterName]: toggleInSet(state.filters[filterName], option)
                }
            }

        case Types.TOGGLE_ON_SALE: 
            return {
                ...state,
                filters: {
                    ...state.filters,
                    onSale: !state.filters.onSale
                }
            }

        default :
            return state
    }
}


export default filterReducer