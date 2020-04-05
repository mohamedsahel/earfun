import { combineReducers } from 'redux'
import themeReducer from './theme/theme.reducer'
import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer'
import filterReducer from './filter/filter.reducer'

const rootReducer = combineReducers({
    theme: themeReducer,
    shop: shopReducer,
    cart: cartReducer,
    filter: filterReducer
})

export default rootReducer;