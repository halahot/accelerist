import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilterPayload } from "../../../types";
import { LikePayload } from "../../../types/LikePayload";
import { CompanyModel } from "../../../types/models";
import { dislikeCompanyAPI, getCompanyAPI, getCompanyByIdAPI, getFavoritesAPI, likeCompanyAPI } from "./api";

interface State {
    company: CompanyModel[]
    count: number;
    currentPage: number;
    maxPages: number;
    favorites: CompanyModel[];
    currentCompany: CompanyModel | null;
}

const initialState: State = {
    company: [],
    count: 0,
    currentPage: 0,
    maxPages: 0,
    favorites: [],
    currentCompany: null
};

export const getCompanies = createAsyncThunk(
    'company/getCompany',
    async (data: FilterPayload) => {
        const request = await getCompanyAPI(data);
        return request.data;
    }
)

export const getCompanyById = createAsyncThunk(
    'company/getCompanyById',
    async (data: LikePayload) => {
        const request = await getCompanyByIdAPI(data);
        return request.data;
    }
)

export const fetchFavorites = createAsyncThunk(
    'company/getFavorites',
    async (data: FilterPayload) => {
        const request = await getFavoritesAPI(data);
        return request.data;
    }
)

export const like = createAsyncThunk(
    'company/like',
    async (data: LikePayload) => {
        const request = await likeCompanyAPI(data);
        if (request.data) return data.id;
    }
)

export const dislike = createAsyncThunk(
    'company/dislike',
    async (data: LikePayload) => {
        const request = await dislikeCompanyAPI(data);
        if (request.data) return data.id;
    }
)


const companySlice = createSlice({
    name: 'company',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCompanies.fulfilled, (state, action) => {
            const { items, meta } = action.payload;
            state.company = items;
            state.count = +meta.totalItems;
            state.currentPage = +meta.currentPage;
            state.maxPages = +meta.totalPages;
        })
        
        builder.addCase(fetchFavorites.fulfilled, (state, action) => {
            const { items, meta } = action.payload;
            state.favorites = items;
            state.count = meta.totalItems;
            state.currentPage = meta.currentPage;
            state.maxPages = meta.totalPages;
        })

        builder.addCase(like.fulfilled, (state, action) => {
            if (action.payload) {
                const index = state.company.findIndex((v) => v.id === action.payload);
                if (index > -1) {
                    state.company[index].like = true;
                }
            }
        })
        
        builder.addCase(dislike.fulfilled, (state, action) => {
            if (action.payload) {
                const index = state.company.findIndex((v) => v.id === action.payload);
                if (index > -1) {
                    state.company[index].like = false;
                }
            }
        })
        
        builder.addCase(getCompanyById.fulfilled, (state, action) => {
            state.currentCompany = action.payload;
        })

    }
});

export default companySlice.reducer;
