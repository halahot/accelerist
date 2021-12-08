import { isAuthorized, getToken, isError } from './selectors';
import authReducer, { changePass, signIn, signUp } from './authSlice';

export {
    authReducer,
    signIn,
    signUp,
    isAuthorized,
    getToken,
    changePass,
    isError
};
