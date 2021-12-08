import { AuthSignData } from "../../../types";
import API from '../../axios';


export const lastLoginAPI = async(token: string) => {
    API.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    return await API.get(
        '/api/v1/team/last_logins'
    );
}