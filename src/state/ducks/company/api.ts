import { FilterPayload } from "../../../types";
import { LikePayload } from "../../../types/LikePayload";
import API from '../../axios';


export const getCompanyAPI = async ({token, params}: FilterPayload) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await API.get(
        '/api/v1/companies', { params }
    );
}

export const getFavoritesAPI = async ({token, params}: FilterPayload) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await API.get(
        '/api/v1/companies/favorites', { params }
    );
}

export const exportCompanyAPI = async ({token, params}: FilterPayload) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await API.get(
        '/api/v1/companies/excel', { params }
    );
}

export const getCompanyByIdAPI = async ({token, id}: LikePayload) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await API.get(
        `/api/v1/companies/${id}`
    );
}

export const likeCompanyAPI = async ({token, id}: LikePayload) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await API.get(
        `/api/v1/companies/${id}/like`
    );
}

export const dislikeCompanyAPI = async ({token, id}: LikePayload) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return await API.get(
        `/api/v1/companies/${id}/dislike`
    );
}
