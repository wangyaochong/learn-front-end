import React, { Component } from 'react';
import { Route,BrowserRouter as Router,Switch,withRouter } from 'react-router-dom';
class MineDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                ------------------测试高阶组件----------------------------
                <Router>
                      <button onClick={()=>{
                    this.props.history.replace("/home")
                }}>回到home</button>
                </Router>

            </div>
        );
    }
}

export default withRouter(MineDemo);