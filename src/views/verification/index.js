import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactInputVerificationCode from 'react-input-verification-code';
import { formSubmit } from '../../actions';
import { CODE_LENGTH } from '../../constants';


const VerificationCodeForm = () => {
    let history = useHistory();

    const [code, setCode] = useState();

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Prevent form submit if input is not entered.
        if (code === '······') {
            return false;
        }

        dispatch(formSubmit(parseInt(code), history));
    };

    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <h4 className='text-bold'>Verification Code:</h4>{' '}
                    <form>
                        <div className='row'>
                            <div className='col-md-12 '>
                                <ReactInputVerificationCode length={CODE_LENGTH} onChange={(value) => setCode(value)} />
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='btn-blue btn' type='submit' data-testid='verification_code'>
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default VerificationCodeForm;
