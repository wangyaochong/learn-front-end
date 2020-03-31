import React, { Component } from 'react';

const withFetch = (Comp) => {
    return class extends Component {
        render() {
            return (
                <div>
                    <div>-------高阶组件-------</div>
                    <div><Comp { ...this.props }/></div>
                    <div>-------高阶组件-------</div>

                </div>
            );
        }
    };
};


class MyData extends Component {
    render() {
        return (
            <div>
                MyData:{ this.props.data }
            </div>
        );
    }
}


class ChildHighLevelComponent extends Component {
    withFetch = withFetch(MyData);

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <this.withFetch data={ 'hello' }/>
            </div>
        );
    }
}

export default ChildHighLevelComponent;