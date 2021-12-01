import { createAction } from '@reduxjs/toolkit';
import { AuthSignData } from '../../../types';

export const signIn = createAction<AuthSignData>('auth/signin');
export const signUp = createAction<AuthSignData>('auth/signup');
export const changePassword = createAction<AuthSignData>('auth/change_password');