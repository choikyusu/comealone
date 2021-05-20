import {
    AUTH_USER
} from '../_actions/types';
import {createAction} from 'redux-actions';

export const authUser = createAction(AUTH_USER);

const initialState = {
    isLogin : false
};

export default function reducer (state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, userData: action.payload, isLogin : true }
            break;
        default:
            return {...state, isLogin : true};
    }
}