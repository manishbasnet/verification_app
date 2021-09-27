import axios from 'axios';
import config from '../config';

const { apiUrl } = config;
/**
 * @param {apiUrl} //base url values
 */
export default axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-type': 'application/json'
    }
});
