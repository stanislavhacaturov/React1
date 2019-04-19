import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.css';
import { Link } from 'react-router-dom';

class Signin extends Component {
    state = {
        newUser: {
            username: '',
            lastname: '',
            email: '',
            password: '',
            error: '',
            message: '',
            isBurning: false
        }    
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        }  

        axios.post(`http://localhost:3001/register`, { user })
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
                this.setState({lastname: ''});
                this.setState({username: ''});
            }
        });
    }

    handleChangeUserName = (event) => {
        this.setState({username: event.target.value});
    }

    handleChangeLastName = (event) => {
        this.setState({lastname: event.target.value});
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
                    <h1>Sign In</h1>
                    <p className='error'>{this.state.error}</p>
                    <p className='message'>{this.state.message}</p>
                    <form onSubmit={this.handleSubmit} className='signup-form'>
                    
                        <input 
                            value={this.state.firstName} 
                            onChange={this.handleChangeUserName} 
                            type='text' 
                            name='username' 
                            placeholder='First Name'/>
                        
                        <input 
                            value={this.state.lastName} 
                            onChange={this.handleChangeLastName} 
                            type='text' 
                            name='lastname' 
                            placeholder='Last Name'/>
                        
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
                            <button type='submit'>Create Account</button>
                        </div>   
                        <Link to='Login' className='click'>Already have an account?</Link> 
                            
                    </form>
                </div>
            </div>
        );
    }
}

export default Signin;
