import { RootState } from "../../store";

export const companies = (state: RootState) => state.company;
export const getCurrentCompany = (state: RootState) => state.company.currentCompany;
export const getPageInfo = (state: RootState) => state.company.pageInfo;
export const getFavorites = (state: RootState) => state.company.favorites;
export const excel = (state: RootState) => state.company.excel;