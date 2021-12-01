import { RootState } from "../../store";

export const isAuthorized = (state: RootState) => state.auth.user?.isAuthorized;