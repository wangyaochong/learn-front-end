import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
    }
    errorRender = (error, errorInfo) => {
        return (
            <p>组件错误</p>
        )
    };
    render() {
        return (
            this.state.hasError ? this.errorRender(this.state.error, this.state.errorInfo) : this.props.children
        );
    }
}

export default ErrorBoundary;