import API from '../../axios';
import { SavedListRequest } from './../../../types/SavedListRequest';


export const createListAPI = async(data: SavedListRequest) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
    return await API.post(
        '/api/v1/saved-list',
        JSON.stringify(data.data)
    );
}

export const getListAPI = async(data: SavedListRequest) => {
    API.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
    return await API.get(
        '/api/v1/saved-list'
    );
}
