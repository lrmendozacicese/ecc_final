import React, { Component } from 'react'
import axios from 'axios'
import setAuthToken from './Authorization'
export default class Login extends Component {

    state = {
        email: '',
        password: ''
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const userEntry = {
            email: this.state.email,
            password: this.state.password
        };
        await axios.post('https://ecg-backend.herokuapp.com/api/patient/login', userEntry).then(res=> {
            const token=res.data.token; 
            localStorage.setItem('token',token);
            setAuthToken(token);
        });
        console.log(userEntry);
        /*const { tokens } = userEntry;
        localStorage.setItem('tokens', tokens);*/
        window.location.href = '/Search';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Login</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name='email'
                                    placeholder='Email'
                                    onChange={this.onInputChange}
                                    value={this.state.email}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    name='password'
                                    placeholder='Password'
                                    onChange={this.onInputChange}
                                    value={this.state.password}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Login
                    </button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}
