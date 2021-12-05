import { companies, getCurrentPage, getFavorites } from './selectors';
import companyReducer, { dislike, fetchFavorites, getCompanies, like } from './companySlice';

export {
    companyReducer, 
    getCompanies, 
    companies, 
    getCurrentPage,
    like,
    dislike,
    getFavorites,
    fetchFavorites,
}
