import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthSignData } from "../../../types";
import { UserModel } from "../../../types/models";
import { changePassAPI, signInAPI, signUpAPI } from "./api";

interface State {
    token: string | null;
    user: UserModel | null;
}

const initialState: State = {
    token: null,
    user: null,
};

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (data: AuthSignData) => {
        const request = await signUpAPI(data);
        return request.data;
    }
)

export const signIn = createAsyncThunk(
    'auth/signIn',
    async (data: AuthSignData) => {
        const request = await signInAPI(data);
        return request.data;
    }
)

export const changePass = createAsyncThunk(
    'auth/changePass',
    async (data: AuthSignData) => {
        const request = await changePassAPI(data);
        return request.data;
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload;
            state.token = accessToken;
            state.user = user;
        })
        
        builder.addCase(signIn.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload;
            state.token = accessToken;
            state.user = user;
        })
    }
});

export default authSlice.reducer;
