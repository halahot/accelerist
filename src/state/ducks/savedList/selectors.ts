import { RootState } from "../../store";

export const getActiveList = (state: RootState) => state.lists.activeList;
export const getLists = (state: RootState) => state.lists.lists;