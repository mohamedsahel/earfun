import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './root-reducer'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['theme', 'cart']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middlewares = [ReduxThunk]

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(
    persistedReducer,
    applyMiddleware(...middlewares)
)

export const persistor = persistStore(store)