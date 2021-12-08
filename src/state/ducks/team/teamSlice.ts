import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthSignData } from "../../../types";
import { UserModel } from "../../../types/models";
import { lastLoginAPI } from "./api";

interface State {
    lastLogin: string | null;
}

const initialState: State = {
    lastLogin: null,
};

export const getLastLogin = createAsyncThunk(
    'team/lastLogin',
    async (token: string) => {
        const request = await lastLoginAPI(token);
        return request.data;
    }
)

const teamSlice = createSlice({
    name: 'team',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLastLogin.fulfilled, (state, action) => {
            const items = action.payload;
            // items.map()
            state.lastLogin = action.payload;
        })
    }
});

export default teamSlice.reducer;
