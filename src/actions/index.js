import { RESPONSE_ERROR, VERIFY_CODE } from './types';
import { verifyCode } from '../api/verificationAPI';

export const formSubmit = (code, history) => async (dispatch) => {
    try {
        await verifyCode({ code });

        dispatch({
            type: VERIFY_CODE,
            payload: { verification: true }
        });
        history.push('/success');
    } catch (error) {
        dispatch({
            type: RESPONSE_ERROR
        });
        alert('Verification Error');
    }
};
