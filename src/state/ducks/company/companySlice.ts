import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { count } from "console";
import { FilterPayload } from "../../../types";
import { CompanyModel } from "../../../types/models";
import { getCompanyAPI } from "./api";

interface State {
    company: CompanyModel[]
    count: number;
    currentPage: number;
    maxPages: number
}

const initialState: State = {
    company: [],
    count: 0,
    currentPage: 0,
    maxPages: 0
};

export const getCompanies = createAsyncThunk(
    'company/getCompany',
    async (data: FilterPayload) => {
        const request = await getCompanyAPI(data);
        return request.data;
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
            state.count = meta.totalItems;
            state.currentPage = meta.currentPage;
            state.maxPages = meta.totalPages;
        })

    }
});

export default companySlice.reducer;
