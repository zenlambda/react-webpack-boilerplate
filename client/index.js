import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('normalize.css');
require('./app.scss');

export class Root extends Component {
    render() {
        return (
            <div>Hello World</div>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('app'));
