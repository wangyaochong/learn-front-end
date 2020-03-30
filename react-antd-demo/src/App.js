import React from 'react';
import {Button} from 'antd';
import "antd/es/button/style/css"
function App() {
    return (
        <div className="App">
            Hello
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </div>
        </div>
    );
}

export default App;
