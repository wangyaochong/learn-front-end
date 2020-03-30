import qs from 'querystring';

export function httpGet(url) {
    return fetch(url);
}

export function httpPost(url, params) {
    return fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'accept': 'application/json,text/plain,*/*'
        },
        body: qs.stringify(params)
    });
}