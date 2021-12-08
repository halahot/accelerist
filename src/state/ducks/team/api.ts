import { AuthSignData } from "../../../types";
import API from '../../axios';


export const signInAPI = async(data: AuthSignData) => {
    return await API.post(
        '/api/v1/auth/sign_in',
        data
    );
}

export const signUpAPI = async(data: AuthSignData) => {
    return await API.post(
        '/api/v1/auth/sign_up',
        data
    );
}

export const changePassAPI = async(data: AuthSignData) => {
    return await API.post(
        '/api/v1/auth/change_password/send_mail',
        data
    );
}