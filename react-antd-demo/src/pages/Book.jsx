import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Book
                {/*路由嵌套显示的位置*/}
                {this.props.children}
            </div>
        );
    }
}

export default Book;