import React, { Component } from 'react';
import { Route,BrowserRouter as Router,Switch } from 'react-router-dom';
class SubMine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>---------------测试子路由--------/mine/sub1或/mine/sub2------------------
                <Router>
                    <Switch>
                        <Route path="/mine/sub1">sub1</Route>
                        <Route path="/mine/sub2">sub2</Route>
                        <Route>default</Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default SubMine;