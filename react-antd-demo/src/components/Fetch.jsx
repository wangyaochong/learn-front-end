import React, { Component } from 'react';
class Fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: []
        };
    }

    componentDidMount() {
        fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            this.setState({ banners: data.banner });
        });
        // fetch('http://iwenwiki/api/blueberrypai/login.php', {
        //     method: 'post', headers: {
        //         'content-type':'application/x-www-form-urlencoded',
        //         'accept':'application/json,text/plain,*/*'
        //     },
        //     body:qs.stringify({
        //         user_id: 'iwen@qq.com',
        //         password: 'iwen123',
        //         verification_code:"crfvw"
        //     })
        // }).then(res => {
        //     return res.json();
        // }).then(data => {
        //     console.log(data);
        // });
    }

    render() {
        const { banners } = this.state;
        return (
            <div>
                {
                    banners.length > 0 ?
                        <ul>
                            {
                                banners.map((element, index) => {
                                    return (
                                        <li key={index}>{element.title}</li>
                                    );
                                })
                            }
                        </ul> : <div> '暂无数据'</div>
                }
            </div>
        );
    }
}

export default Fetch;