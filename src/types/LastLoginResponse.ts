import { UserModel } from "./models";

export interface LastLoginResponse {
    user: UserModel,
    id: string;
    loggedInAt: string;    
}