import { httpGet } from '../utils/http';
import base from './base';

const api = {
    apiList() {
        return httpGet(base.ownUrl + base.apiList);
    }
};
export default api;