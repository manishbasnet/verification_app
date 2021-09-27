import API from './common';

/**
 * @param  {object} values
 */

export const verifyCode = (values) => {
    return API.post(`/verify`, values);
};