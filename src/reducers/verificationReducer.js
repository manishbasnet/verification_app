/** @format */
import { RESPONSE_ERROR, VERIFY_CODE } from '../actions/types';

const verification = (state = {}, action) => {
    switch (action.type) {
        case VERIFY_CODE:
            return action.payload;

        case RESPONSE_ERROR:
            return { ...state, verification: false };

        default:
            return state;
    }
};
export default verification;
