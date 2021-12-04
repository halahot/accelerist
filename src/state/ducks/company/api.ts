import { FilterPayload } from "../../../types";
import API from '../../axios';


export const getCompanyAPI = async ({token, params}: FilterPayload) => {
    console.log(params);
    API.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await API.get(
        '/api/v1/companies', { params }
    );
}
