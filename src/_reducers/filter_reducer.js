import {
    FILTER_CONTENTS
} from '../_actions/types';
import {createAction} from 'redux-actions';


export const filterContents = createAction(FILTER_CONTENTS);

const initialState = {
    filter : {}
    
};

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case FILTER_CONTENTS:
            return { ...state, filter: action.payload }
        default:
            return state;
    }
}