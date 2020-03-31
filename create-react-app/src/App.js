import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Link, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import Phone from './components/Phone';
import News from './components/News';
import {withRouter} from 'react-router';
import MyRedux from './components/MyRedux';
import SetStateDemo from './components/SetStateDemo';
import IfDemo from './components/IfDemo';
import FormDemo from './components/FormDemo';
import RefsForm from './components/RefsForm';

function App(props) {
    //hook，在不使用class的情况下也可以使用state
    let [valNum, setValNum] = useState(0);
    let [val, setVal] = useState({
        a:"a",
        b:"b"
    });
    console.log(props);
    props.history.listen((link) => {
        console.log(link);
    });
    return (
        <div className="App">

            <div>
                <RefsForm/>
                <FormDemo/>
                <IfDemo/>
                <SetStateDemo/>
                <MyRedux/>
                <div>使用stateNum={valNum}</div>
                <div>使用state={val.a}</div>
                <button onClick={ ()=>{setValNum(valNum + 1)}}>修改stateNum</button>
                <button onClick={ ()=>{setVal({a:"A"})}}>修改state</button>
                <div>这个页面的news无法显示是正常的，不用管</div>
                <Link to="/home">---home---</Link>
                <Link to={
                    {
                        pathname: '/phone', query: {id: '这是query的参数'}
                    }
                }>phone，query---</Link>
                <Link to="/news">---news---</Link>
            </div>
            <div>
                <div>这个页面的news无法显示是正常的，不用管</div>
                <NavLink to="/home">home</NavLink>
                <NavLink to="/phone/我是参数">phone</NavLink>
                <NavLink to="/news">news</NavLink>
            </div>
            <Switch>
                <Route path="/home" component={Home} exact={true}/>
                <Route path="/phone" component={Phone} exact={true}/>
                <Route path="/phone/:id" component={Phone} exact={true}/>
                <Route path="/news" component={News}/>
            </Switch>
            <Redirect to="/home" from="/"/>
            <button onClick={() => props.history.push('/phone')}>到phone页面</button>

        </div>
    );
}

export default withRouter(App);
