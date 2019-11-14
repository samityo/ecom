/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

// Login page
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILED = 'LOG_OUT_FAILED';

// Sign Up
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

// Password Reset
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

// User Details
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const SET_USER_REQUEST = 'SET_USER_REQUEST';

export const SET_NOTIFICATION = 'SET_NOTIFICATION';

// Permissions
export const GET_PERMISSIONS_REQUEST = 'GET_PERMISSIONS_REQUEST';
export const GET_PERMISSIONS_SUCCESS = 'GET_PERMISSIONS_SUCCESS';
export const GET_PERMISSIONS_FAILED = 'GET_PERMISSIONS_FAILED';

export const CREATE_PERMISSIONS_REQUEST = 'CREATE_PERMISSIONS_REQUEST';
export const CREATE_PERMISSIONS_SUCCESS = 'CREATE_PERMISSIONS_SUCCESS';
export const CREATE_PERMISSIONS_FAILED = 'CREATE_PERMISSIONS_FAILED';

export const DELETE_PERMISSIONS_REQUEST = 'DELETE_PERMISSIONS_REQUEST';
export const DELETE_PERMISSIONS_SUCCESS = 'DELETE_PERMISSIONS_SUCCESS';
export const DELETE_PERMISSIONS_FAILED = 'DELETE_PERMISSIONS_FAILED';

// Roles
export const GET_ROLES_REQUEST = 'GET_ROLES_REQUEST';
export const GET_ROLES_SUCCESS = 'GET_ROLES_SUCCESS';
export const GET_ROLES_FAILED = 'GET_ROLES_FAILED';

export const GET_ROLE_REQUEST = 'GET_ROLE_REQUEST';
export const GET_ROLE_SUCCESS = 'GET_ROLE_SUCCESS';
export const GET_ROLE_FAILED = 'GET_ROLE_FAILED';

export const CREATE_ROLE_REQUEST = 'CREATE_ROLE_REQUEST';
export const CREATE_ROLE_SUCCESS = 'CREATE_ROLE_SUCCESS';
export const CREATE_ROLE_FAILED = 'CREATE_ROLE_FAILED';

export const DELETE_ROLE_REQUEST = 'DELETE_ROLE_REQUEST';
export const DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS';
export const DELETE_ROLE_FAILED = 'DELETE_ROLE_FAILED';

// Users
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';

export const CREATE_USERS_REQUEST = 'CREATE_USERS_REQUEST';
export const CREATE_USERS_SUCCESS = 'CREATE_USERS_SUCCESS';
export const CREATE_USERS_FAILED = 'CREATE_USERS_FAILED';

export const DELETE_USERS_REQUEST = 'DELETE_USERS_REQUEST';
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';
export const DELETE_USERS_FAILED = 'DELETE_USERS_FAILED';

export const GET_FILTERS_REQUEST = 'GET_FILTERS_REQUEST';
export const GET_FILTERS_SUCCESS = 'GET_FILTERS_SUCCESS';
export const GET_FILTERS_FAILED = 'GET_FILTERS_FAILED';
