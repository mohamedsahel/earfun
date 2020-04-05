import types from "./filter.types"


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
        case types.SET_TYPES: 
            return {
                ...state,
                filters: {
                    ...state.filters,
                    types: new Set(payload)
                }
            }

        case types.SET_CONNECT_WITH: 
            return {
                ...state,
                connectWith: new Set(payload)
            }

        case types.SET_PRICE_RANGE: 
            return {
                ...state,
                priceRange: [...payload]
            }

        case types.SET_COLORS: 
            return {
                ...state,
                colors: new Set(payload)
            }

        case types.SET_BRANDS: 
            return {
                ...state,
                brads: new Set(payload)
            }

        case types.SET_ONSALE: 
            return {
                ...state,
                onSale: payload
            }

        default :
            return state
    }
}


export default filterReducer