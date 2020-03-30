import React, {Component} from 'react';

class FormDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value)
    };

    onChangeHandler = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onChangeHandler}/>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
}

export default FormDemo;