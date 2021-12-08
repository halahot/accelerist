import { RootState } from "../../store";

export const getLastLogins = (state: RootState) => state.team.lastLogin;