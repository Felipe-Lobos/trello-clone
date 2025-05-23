import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from '.slices/boardsSlice';

export const store = configureStore({
    reducer: {
        boards: boardsReducer,
    }
})