import React, {Component} from 'react';

class RefsForm extends Component {
    constructor(props) {
        super(props);
        this.username = React.createRef();
    }

    render() {
        return (
            <div>
                <div>
                    helloRefsForm
                    <input type="text" ref={this.username}/>
                    <button onClick={() => {
                        console.log(this.username.current.value);
                    }}>点击</button>
                </div>
            </div>
        );
    }
}

export default RefsForm;