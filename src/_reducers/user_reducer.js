import {
    AUTH_USER,
    USER_LOGOUT
} from '../_actions/types';
import {createAction} from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const authUser = createAction(AUTH_USER);
export const logout = createAction(USER_LOGOUT);

const initialState = {
    isLogin : false,
    number : 0,
    userData : {},
    accessToken : {}
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, userData: action.payload.user, accessToken : action.payload.accessToken, isLogin : true }
            break;
        case USER_LOGOUT:
            return {...state, isLogin : false, userData : {}, accessToken : {}}
            break;
        case INCREMENT:
            return {...state, number : state.number + 1, isLogin : true};
        case DECREMENT:
            return {...state, number : state.number - 1, isLogin : false, userData : {}, accessToken : {}};

        default:
            return state;
    }
}