import { configureStore } from '@reduxjs/toolkit'
import cart from './features/cart';

export const store = configureStore({
    reducer:{
        cart,
    },
    devTools:process.env.NODE_ENV !== 'development',
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;