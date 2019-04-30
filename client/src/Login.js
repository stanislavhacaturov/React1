import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';

class Login extends Component {
    state = {
        User: {
            email: '',
            password: '',
            error: '',
            message: ''
        }    
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }  

        axios.post(`http://localhost:3001/authorization`,
            { user }
        ).then(res => {
           console.log('res', res);
           const token = res.data.token;
           localStorage.setItem('token', token)
           this.props.history.push('/todo');
        }).catch(err => {
            console.log('err', err);
        })

        // axios.post(`http://localhost:3001/authorization`, { user })
        // .then(res => {
        //     if (!res.data.ok) {
        //         this.setState({
        //             error: res.data.error,
        //             message: '',
        //             password: ''
        //         });
        //     } else {
        //         this.setState({
        //             error: '',
        //             message: res.data.message,
        //             password: '',
        //             email: ''
        //         });
        //     }
        // });
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {    
        const {
            error,
            message,
            email,
            password
        } = this.state 
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <Link to='/' className='homeLink'>Home</Link>
                    <h1>Log In</h1>             
                    <p className='error'>{error}</p>
                    <p className='message'>{message}</p>
                    <form onSubmit={this.handleSubmit} className='signup-form'>
                        
                        <input 
                            value={email} 
                            onChange={this.handleChangeEmail} 
                            type='email' 
                            name='email' 
                            placeholder='Email'/>
                    
                        <input 
                            value={password} 
                            onChange={this.handleChangePassword} 
                            type='password' 
                            name='password' 
                            placeholder='Password'/>

                        <div className="createAccount">
                            <button type='submit'>Log In</button>
                        </div>    
                            <Link to='signin' className='click'>Create new account</Link>                        
                    </form>
                </div>
            </div> 
        );
    }
}

export default Login;

