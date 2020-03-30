import React from 'react';
import { Button } from 'antd';
import Fetch from './components/Fetch';
import ProxyDemo from './components/ProxyDemo';
import Home from './pages/Home';
import Mine from './pages/Mine';
import { BrowserRouter as Router, Switch, NavLink, Redirect } from 'react-router-dom';
import { Route } from 'react-router';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import Book from './pages/Book';
import BookJava from './pages/BookJava';
import BookWeb from './pages/BookWeb';
import Parent from './components/coms/Parent';
import { connect } from 'react-redux';
import * as counterAction from './redux/actions/counter';
import { bindActionCreators } from 'redux';
import User from './components/User';

class App extends React.Component {
    render() {
        console.log(this.state);
        console.log(this.props);
        return (
            <div className="container">
                <div className={"text-center"}>
                    {/*这个是使用原生redux的路由*/}
                    {/*<h1 className={'jumbotron-heading text-center'}>{this.props.value}</h1>*/}
                    {/*<p className={'text-center'}>*/}
                    {/*    <button className={'btn btn-primary'} onClick={this.props.onAdd}>+</button>*/}
                    {/*    <button className={'btn btn-success'} onClick={this.props.onSub}>-</button>*/}
                    {/*</p>*/}

                    <h1 className={'jumbotron-heading text-center'}>{this.props.counter}</h1>
                    {/*<button className={'btn btn-primary'} onClick={this.props.add}>+</button>*/}
                    {/*<button className={'btn btn-success'} onClick={this.props.sub}>-</button>      */}
                    <button className={'btn btn-primary'} onClick={this.props.counterAction.add.bind(this, 5)}>+</button>
                    <button className={'btn btn-success'} onClick={this.props.counterAction.sub.bind(this, 5)}>-</button>
                    <User/>
                </div>


                <Parent/>
                <Router>
                    <Button type="link"><NavLink to={{
                        pathname: '/mine',
                        search: '?sort=name',
                        hash: '#mine',
                        state: {
                            fromDashBoard: 'bbb'//隐性参数传递
                        }
                    }}>mine</NavLink></Button>
                    <Switch>
                        <Redirect from="/xxxMine" to="mine"/>
                        {/*<Route path="/book" component={Book}>*/}
                        <Book>
                            <Switch>
                                <Route path="/book/java"><BookJava/></Route>
                                <Route path="/book/web"><BookWeb/></Route>
                                <Route/>
                            </Switch>
                        </Book>

                        {/*</Route>*/}
                        <Route path="/shop" component={Shop}/>
                        <Route path="/home" component={Home} exact={true} strict={true}/>
                        <Route path="/mine/:param" component={Mine}/>
                        <Route path="/mine" component={Mine}/>
                        <Route path="/nm" render={() => {
                            return (<h1>匿名Route</h1>);
                        }}/>
                        <Route path="/nmMine" render={() => {
                            return (<h1>{<Mine/>}</h1>);
                        }}/>
                        <Route path="/other" render={
                            () => {
                                return (
                                    <div>
                                        <Fetch/>
                                        <ProxyDemo/>
                                        <div>
                                            <Button type="primary">Primary</Button>
                                            <Button>Default</Button>
                                            <Button type="dashed">Dashed</Button>
                                            <Button type="link">Link</Button>
                                        </div>
                                    </div>
                                );
                            }
                        }/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        counter: state.counter
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: () => dispatch(counterAction.add()),
//         sub: () => dispatch(counterAction.sub())
//
//         // add: () => dispatch({type:"add"}),
//         // sub: () => dispatch({type:"sub"})
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
