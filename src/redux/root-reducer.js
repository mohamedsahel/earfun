import { combineReducers } from 'redux'
import themeReducer from './theme/theme.reducer'
import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer'
import filterReducer from './filter/filter.reducer'
import snackbarReducer from './snackbar/snackbar.reducer'
import couponReducer from './coupon/coupon.reducer'

const rootReducer = combineReducers({
    theme: themeReducer,
    shop: shopReducer,
    cart: cartReducer,
    filter: filterReducer,
    snackbar: snackbarReducer,
    coupon: couponReducer,
})

export default rootReducer;