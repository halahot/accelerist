import { RootState } from "../../store";

export const companies = (state: RootState) => state.company;
export const getCurrentPage = (state: RootState) => state.company.currentPage;
export const getCount = (state: RootState) => state.company.count;
export const getMaxPages = (state: RootState) => state.company.maxPages;
export const getFavorites = (state: RootState) => state.company.favorites;