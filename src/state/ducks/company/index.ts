import { companies, excel, getCurrentCompany, getPageInfo, getFavorites } from './selectors';
import companyReducer, { dislike, fetchFavorites, getCompanies, getCompanyById, getExcel, like } from './companySlice';

export {
    companyReducer, 
    getCompanies, 
    companies, 
    getPageInfo,
    like,
    dislike,
    getFavorites,
    fetchFavorites,
    getCurrentCompany,
    getCompanyById,
    getExcel,
    excel,
}
