import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Signin from './Signin';
import Login from './Login';
import Home from './Home';
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Home} />
                <Route path='/signin' component={Signin} />
                <Route path='/login' component={Login} />
            </BrowserRouter>    
        )
    }
}

export default App;