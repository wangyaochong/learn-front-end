import React, { Component } from 'react';
import SubMine from './SubMine';
import MineDemo from './MineDemo';

class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromDashBoard: 'xxx'
        };
    }

    render() {
        //测试url=http://localhost:3000/mine/sds?name=123
        console.log('属性=' + this.props.match.params.param);
        let urlSearchParams = new URLSearchParams(this.props.location.search);
        console.log('searchParam=' + urlSearchParams.get('name'));
        console.log("this.state.fromDashBoard="+this.state.fromDashBoard);
        console.log("props=",this.props);
        return (
            <div>
                Mine
                <button onClick={()=>{
                    this.props.history.push("/home")
                }}>回到home，可以返回</button>
                   <button onClick={()=>{
                    this.props.history.replace("/home")
                }}>回到home，不可以返回</button>
                <div>{this.props.location?.state?.fromDashBoard}</div>
                <MineDemo/>
                <SubMine/>
            </div>
        );
    }
}

export default Mine;