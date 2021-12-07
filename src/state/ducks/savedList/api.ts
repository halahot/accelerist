import API from '../../axios';
import { SavedListRequest } from './../../../types/SavedListRequest';


export const createListAPI = async(data: SavedListRequest) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
    return await API.post(
        '/api/v1/saved-list',
        JSON.stringify(data.data)
    );
}

export const updateListAPI = async(data: SavedListRequest) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
    return await API.patch(
        `/api/v1/saved-list/${data.id}`,
        JSON.stringify(data.data)
    );
}

export const deleteListAPI = async(data: SavedListRequest) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
    return await API.delete(
        `/api/v1/saved-list/${data.id}`        
    );
}

export const getListByIdAPI = async(data: SavedListRequest) => {
    console.log(data);
    API.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
    return await API.get(
        `/api/v1/saved-list/${data.id}`        
    );
}

export const getListAPI = async(data: SavedListRequest) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
    return await API.get(
        '/api/v1/saved-list'
    );
}
