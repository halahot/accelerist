import { RootState } from "../../store";

export const companies = (state: RootState) => state.company;
export const getCurrentPage = (state: RootState) => state.company.currentPage;