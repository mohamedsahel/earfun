
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
        case SET_TYPES: 
            return {
                ...state,
                types: new Set(payload)
            }

        case SET_CONNECT_WITH: 
            return {
                ...state,
                connectWith: new Set(payload)
            }

        case SET_PRICE_RANGE: 
            return {
                ...state,
                priceRange: [...payload]
            }

        case SET_COLORS: 
            return {
                ...state,
                colors: new Set(payload)
            }

        case SET_BRANDS: 
            return {
                ...state,
                brads: new Set(payload)
            }

        case SET_ONSALE: 
            return {
                ...state,
                onSale: payload
            }

        default :
            return state
    }
}