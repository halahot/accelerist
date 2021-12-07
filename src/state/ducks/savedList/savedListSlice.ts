import { SavedListModel } from '../../../types/models/SavedListModel';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SavedListRequest } from '../../../types';
import { createListAPI, deleteListAPI, getListAPI, getListByIdAPI, updateListAPI } from "./api";

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

export const updateList = createAsyncThunk(
    'savedList/update',
    async (data: SavedListRequest) => {
        const request = await updateListAPI(data);
        return request.data;
    }
)

export const deleteList = createAsyncThunk(
    'savedList/delete',
    async (data: SavedListRequest) => {
        const request = await deleteListAPI(data);
        return data.id;
    }
)

export const getList = createAsyncThunk(
    'savedList/get',
    async (data: SavedListRequest) => {
        const request = await getListAPI(data);
        return request.data;
    }
)

export const getListById = createAsyncThunk(
    'savedList/getById',
    async (data: SavedListRequest) => {
        const request = await getListByIdAPI(data);
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
        
        builder.addCase(getListById.fulfilled, (state, action) => {
            state.activeList = action.payload;
        })

        builder.addCase(updateList.fulfilled, (state, action) => {
            const index = state.lists.findIndex((v) => v.id === action.payload.id);
            if (index > -1) {
                state.lists.splice(index, 1, action.payload);
                state.activeList = action.payload;
            }
        }) 
        
        builder.addCase(deleteList.fulfilled, (state, action) => {
            const index = state.lists.findIndex((v) => v.id === action.payload);
            if (index > -1) {
                state.lists.splice(index, 1);
                state.activeList = null;
            }
        })
    }
});

export default savedListSlice.reducer;
