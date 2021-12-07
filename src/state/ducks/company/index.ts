import { companies, excel, getCurrentCompany, getCurrentPage, getFavorites } from './selectors';
import companyReducer, { dislike, fetchFavorites, getCompanies, getCompanyById, getExcel, like } from './companySlice';

export {
    companyReducer, 
    getCompanies, 
    companies, 
    getCurrentPage,
    like,
    dislike,
    getFavorites,
    fetchFavorites,
    getCurrentCompany,
    getCompanyById,
    getExcel,
    excel,
}
