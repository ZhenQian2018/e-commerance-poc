import {createAction} from '@reduxjs/toolkit';

export const loginBegan = createAction("api/loginBegan");
export const loginSuccess = createAction("api/loginSuccess");
export const loginFailed = createAction("api/loginFailed");
export const updateEmail = createAction("api/updateEmail");
export const logoutBegan = createAction("api/logoutBegan");
export const logoutFailed= createAction("api/logoutFailed");
export const updatePass= createAction("api/updatePass");
export const updateUser= createAction("api/updateUser");
export const signout= createAction("api/logout");
export const registerBegan = createAction("api/registerBegan");
export const registerSuccess = createAction("api/registerSuccess");
export const registerFailed = createAction("api/registerFailed");
