import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.css';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        User: {
            email: '',
            password: '',
            error: '',
            message: '',
            isBurning: true
        }    
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }  

        axios.post(`http://localhost:3001/authorization`, { user })
        .then(res => {
            if (!res.data.ok) {
                this.setState({error: res.data.error});
                this.setState({message: ''});
                this.setState({password: ''});
            } else {
                this.setState({error: ''});
                this.setState({message: res.data.message});
                this.setState({password: ''});
                this.setState({email: ''});
            }
        });
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value});
    }

    render() {     
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Log In</h1>             
                    <p className='error'>{this.state.error}</p>
                    <p className='message'>{this.state.message}</p>
                    <form onSubmit={this.handleSubmit} className='signup-form'>
                        
                        <input 
                            value={this.state.email} 
                            onChange={this.handleChangeEmail} 
                            type='email' 
                            name='email' 
                            placeholder='Email'/>
                    
                        <input 
                            value={this.state.password} 
                            onChange={this.handleChangePassword} 
                            type='password' 
                            name='password' 
                            placeholder='Password'/>

                        <div className="createAccount">
                            <button type='submit'>Log In</button>
                        </div>    
                            <Link to='Signin' className='click'>Create new account</Link>                        
                    </form>
                </div>
            </div> 
        );
    }
}

export default Login;

