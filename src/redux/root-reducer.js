import { combineReducers } from 'redux'
import themeReducer from './theme/theme.reducer'
import shopReducer from './shop/shop.reducer'

const rootReducer = combineReducers({
    theme: themeReducer,
    shop: shopReducer,
})

export default rootReducer;