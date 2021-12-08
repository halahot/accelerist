import { isAuthorized, getToken } from './selectors';
import authReducer, { changePass, signIn, signUp } from './authSlice';

export { authReducer, signIn, signUp, isAuthorized, getToken, changePass }
