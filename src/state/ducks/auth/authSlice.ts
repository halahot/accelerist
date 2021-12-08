import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthSignData } from "../../../types";
import { UserModel } from "../../../types/models";
import { changePassAPI, signInAPI, signUpAPI } from "./api";

interface State {
    token: string | null;
    user: UserModel | null;
    err: boolean;
}

const initialState: State = {
    token: null,
    user: null,
    err: false,
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
    reducers: {
        resetError(state, action) {
            state.err = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload;
            state.token = accessToken;
            state.user = user;
            state.err = false;
        })

        builder.addCase(signUp.rejected, (state, action) => {
            state.err = true;
        })

        builder.addCase(signIn.rejected, (state, action) => {
            state.err = true;
        })

        builder.addCase(signIn.fulfilled, (state, action) => {
            const { accessToken, user } = action.payload;
            state.token = accessToken;
            state.user = user;
            state.err = false;
        })
    }
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
