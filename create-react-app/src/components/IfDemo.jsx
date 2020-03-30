import React, {Component} from 'react';

class IfDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            names: ['abc','sdfsf']
        };
    }

    clickHandler = () => {
        this.setState({isLogin: true});
    };

    render() {
        const {names} = this.state;
        let showView = this.state.isLogin ?
            <div>abc</div>
            :
            <div>请登录</div>
        ;
        return (
            <div>
                用户：{showView}
                <button onClick={this.clickHandler}>登录</button>
                <div>
                    {
                        names.length > 0 ? names.map((v, i) => {
                            return (
                                <h1 key={i}>{v}</h1>
                            );
                        }) : <div>没有数据</div>
                    }
                </div>
            </div>
        );
    }
}

export default IfDemo;