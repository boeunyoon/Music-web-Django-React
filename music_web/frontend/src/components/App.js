import React, {Component} from 'react';
import { render } from 'react-dom';

function App(){
    return (
        <div>
            <h1>Testing React Code</h1>
            <button>test</button>
        </div>
    )
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
export default App;