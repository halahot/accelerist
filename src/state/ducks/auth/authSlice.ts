import { createSlice } from "@reduxjs/toolkit";

interface State {
    token: string | null
}

const initialState: State = {
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        succesSignIn: (state, action) => {
            state.token = action.payload;
        },
        succesSignUp: (state, action) => {
            state.token = action.payload;
        },
    },
})

export const { succesSignIn, succesSignUp } = authSlice.actions;

export default authSlice.reducer;
