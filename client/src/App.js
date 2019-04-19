import React, { Component } from 'react';
import './styles/App.css';

import {BrowserRouter, Route} from 'react-router-dom';

import Signin from './Signin';
import Login from './Login';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                <Route path='/Signin' component={Signin} />
                <Route path='/Login' component={Login} />
                </div>
            </BrowserRouter>
            
        )
    }
}

export default App;