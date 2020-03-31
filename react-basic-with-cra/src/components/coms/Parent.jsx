import React, { Component } from 'react';
import Child from './Child';
import Child2 from './Child2';
import ChildTopic from './ChildTopic';
import ChildHighLevelComponent from './ChildHighLevelComponent';
import ErrorBoundary from './ErrorBoundary';
import ErrorPage from './ErrorPage';
import Child3 from './Child3';
import ChildUse from './ChildUse';

const MyAPI = {
    count: 0,
    subscribe(callback) {
        this.intervalId = setInterval(() => {
            this.count += 1;
            callback(this.count);
        }, 1000);
    },
    unsubscribe() {
        clearInterval(this.intervalId);
        this.reset();
    },
    reset() {
        this.count = 0;
    }
};

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        MyAPI.subscribe((currentCount) => {
            this.setState({ count: currentCount });
        });
    }

    componentWillUnmount() {
        MyAPI.unsubscribe();
    }

    render() {
        return (
            <div>
                Parent
                <Child title={ '子标题' + this.state.count } onEvent={ (e) => this.setState({ 'name': e }) }/>
                {/*<Child2 title={ '子标题'+this.state.count } onEvent={ (e) => this.setState({ 'name': e }) }/>*/ }
                <Child2 title={ '子标题' + this.state.count }/>
                <Child3 title={ '子标题' + this.state.count }/>
                <div>{ this.state?.name }</div>
                <div> count:{ this.state?.count }</div>
                <ChildTopic/>
                <ChildHighLevelComponent/>
                <ChildUse/>
                <ErrorBoundary>
                    ErrorBoundary
                    {/*<ErrorPage/>*/}
                </ErrorBoundary>
            </div>
        );
    }
}

export default Parent;