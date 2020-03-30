import React, { Component } from 'react';
import { Redirect, Prompt } from 'react-router-dom';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            name: ''
        };
    }

    render() {
        let urlSearchParams = new URLSearchParams(this.props.location.search);
        let login = urlSearchParams.get('login');
        console.log(login);
        console.log('login type ' + typeof login);
        return (
            <div>
                Shop
                {
                    urlSearchParams.get('login') === 'true' ?
                        <div>shop content</div> : <Redirect to="/"/>
                }
                <Prompt when={!!this.state.name} message={"确定离开吗"}/>
                <input type="text" value={this.state.name} onChange={event => {
                    this.setState({ name: event.target.value });
                }}/>
            </div>
        );
    }
}

export default Shop;