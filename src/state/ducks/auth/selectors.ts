import { RootState } from "../../store";

export const isAuthorized = (state: RootState) => state.auth.user?.isAuthorized;
export const getToken = (state: RootState) => state.auth.token;