import { SavedListModel } from './../../../types/models/SavedListModel';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SavedListRequest } from './../../../types';
import { createListAPI, getListAPI } from "./api";

interface State {
    lists: SavedListModel[];
    activeList: SavedListModel | null;
}

const initialState: State = {
    lists: [],
    activeList: null
};

export const createList = createAsyncThunk(
    'savedList/create',
    async (data: SavedListRequest) => {
        const request = await createListAPI(data);
        return request.data;
    }
)

export const getList = createAsyncThunk(
    'savedList/get',
    async (data: SavedListRequest) => {
        const request = await getListAPI(data);
        return request.data;
    }
)

const savedListSlice = createSlice({
    name: 'savedList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, action) => {
            state.lists = action.payload;
        })
        
        builder.addCase(createList.fulfilled, (state, action) => {
            state.activeList = action.payload;
        })
    }
});

export default savedListSlice.reducer;
