import React, {Component, Fragment} from 'react';
import News from './News';
import Phone from './Phone';
import axios from 'axios';

class Home extends Component {
    // componentDidMount() {
    //     this.ajaxFun();
    // }

    ajaxFun = () => {
        axios.get('http://localhost:4000/arr').then((resp) => {
            console.log(resp);
        });
    };

    render() {
        return (
            <Fragment>
                <News text="hello" parentFunc={(e) => {
                    console.log(e);
                }}/>
                {/*<Phone/>*/}
                <div>abc</div>
                <div>
                    你好我是组件{Math.random() * 10}
                </div>
                <div>第二个标签</div>
                <img src="tree.png" alt=""/>
                <img src={require('../assets/tree.png')} alt=""/>
                <button onClick={this.ajaxFun}>点击获取服务器数据</button>
            </Fragment>
        );
    }
}

export default Home;
