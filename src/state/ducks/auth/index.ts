import { isAuthorized } from './selectors';
import authReducer, { signIn, signUp } from './authSlice';

export { authReducer, signIn, signUp, isAuthorized }
