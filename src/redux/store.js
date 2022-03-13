import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cartReducer from './cartRedux'
import userReducer from './userRedux'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const appReducer = combineReducers({
    user: userReducer, 
    cart: cartReducer
})

const rootReducer = (state, action) => {
    if(action.type === "USER_LOGOUT"){
        storage.removeItem('persist:root')
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }
    ),
})

export let persistor = persistStore(store)