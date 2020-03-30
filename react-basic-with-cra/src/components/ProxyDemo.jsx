import React, { Component } from 'react';
import qs from 'querystring';
import api from '../api/api';

class ProxyDemo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('/api/list').then(res => {
            return res.json();
        }).then(data => {
            console.log('跨域：' + qs.stringify(data));
        }).catch(e => {
            console.log('错误', e);
        });
        api.apiList().then(res => {
            return res.json();
        }).then((data) => {
            console.log('跨域apiList：' + qs.stringify(data));
        });
    }

    render() {
        return (
            <div>
                测试跨域
            </div>
        );
    }
}

export default ProxyDemo;