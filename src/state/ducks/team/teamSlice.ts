import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthSignData } from "../../../types";
import { UserModel } from "../../../types/models";
import { changePassAPI, signInAPI, signUpAPI } from "./api";

interface State {
    lastLogin: string | null;
}

const initialState: State = {
    lastLogin: null,
};

export const getLastLogin = createAsyncThunk(
    'team/lastLogin',
    async (data: AuthSignData) => {
        const request = await signUpAPI(data);
        return request.data;
    }
)

const teamSlice = createSlice({
    name: 'team',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getLastLogin.fulfilled, (state, action) => {
            state.lastLogin = action.payload;
        })
    }
});

export default teamSlice.reducer;
