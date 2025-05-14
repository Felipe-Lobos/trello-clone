import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const fetchBoards = createAsyncThunk(
    'boards/fetchBoards',
    async () => {
        const response = await api.get('boards/');
        return response.data
    }
);

const boardsSlice = createSlice({
    name: 'boards',
    initialState: { items: [], status: 'idle' },
    extraReducers: builder => {
        builder
            .addCase(fetchBoards.pending, state => { state.status = 'loading'; })
            .addCase(fetchBoards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            });
    }
})
export default boardsSlice.reducer