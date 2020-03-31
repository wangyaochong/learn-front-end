import React, { Component,PureComponent } from 'react';

//对于PureComponent，只要传入一个新对象，就会渲染，简单说，只要用了{} 并且返回的是新对象（）比如函数，就要重新渲染
//PureComponent只是实现了一个浅比较的shouldComponentUpdate
class Child2 extends PureComponent {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        console.log('child2 render');
        return (
            <div>
                Child2：{ this.props.title }
                <button onClick={ this.props.onEvent?.bind(this, 'abc') }>传递数据</button>
            </div>
        );
    }
}

export default Child2;