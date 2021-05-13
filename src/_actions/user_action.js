import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types'


export function auth( input) {
    return {
        type: AUTH_USER,
        payload : input
    }
}
