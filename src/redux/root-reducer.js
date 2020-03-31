import { combineReducers } from 'redux'
import themeReducer from './theme/theme.reducer'
import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer'

const rootReducer = combineReducers({
    theme: themeReducer,
    shop: shopReducer,
    cart: cartReducer
})

export default rootReducer;